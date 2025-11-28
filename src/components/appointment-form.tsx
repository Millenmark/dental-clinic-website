import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useTreatments } from "../hooks/use-treatment";
import Input from "./input";
import TimeInput from "./time-input";
import Select from "./select";
import Textarea from "./textarea";

interface FormData {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  note: string;
}

const defaultFormData = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  service: "",
  note: "",
};

export default function AppointmentForm() {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    // Apply per-field limits
    const limits: Record<string, number> = {
      note: 100,
    };

    const limit = limits[name] ?? 50; // default 50 if not specified

    if (value.length > limit) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND}/api/appointments`,
        {
          method: "POST",
          body: JSON.stringify({
            first_name: data.firstName,
            middle_name: data.middleName,
            last_name: data.lastName,
            email: data.email,
            contact_number: data.phone,
            treatment_id: data.service,
            scheduled_at: `${data.date} ${data.time}`,
            note: data.note,
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Api-Key": import.meta.env.VITE_API_KEY,
          },
        }
      );
      return response.json();
    },
    onSuccess: () => {
      setShowSuccessModal(true);
      setFormData(defaultFormData);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const { data: treatments } = useTreatments();

  const today = new Date();
  const minDate = today.toISOString().split("T")[0];

  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 30);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  return (
    <div className="w-full p-6 bg-scooter-500/80 rounded-4xl shadow-md absolute left-0 top-0">
      <h2 className="text-2xl font-bold mb-4 text-white">
        Book an Appointment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-6">
          <Input
            type="text"
            label="First Name"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="First Name"
            maxLength={50}
          />

          <Input
            type="text"
            label="Middle Name"
            id="middleName"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            placeholder="Middle Name"
            maxLength={50}
          />

          <Input
            type="text"
            label="Last Name"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Last Name"
            maxLength={50}
          />

          <Input
            type="email"
            label="Email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            maxLength={50}
          />

          <Input
            type="tel"
            label="Phone"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone"
            maxLength={50}
          />

          <Input
            type="date"
            label="Preferred Date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            placeholder="Preferred Date"
            min={minDate}
            max={maxDateStr}
          />

          <TimeInput
            id="time"
            label="Time"
            min="09:00"
            max="17:00"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <Select
            id="service"
            label="Service"
            value={formData.service}
            options={treatments || []}
            onChange={handleChange}
            required
          />

          <Textarea
            id="note"
            label="Note"
            value={formData.note}
            onChange={handleChange}
            maxLength={100}
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Booking..." : "Book"}
          </button>
        </div>
      </form>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-lg text-gray-900 mb-2 font-bold">
                Booking Successful!
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Please confirm this booking on your email address that you
                provided. Thank you
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
