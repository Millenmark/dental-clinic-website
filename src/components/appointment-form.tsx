import { useState } from "react";
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

export default function AppointmentForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: console.log the form data instead of sending to API
    console.log("Booking form data:", formData);
    // TODO: Replace with actual API call when ready
    // Example: fetch('/api/book-appointment', { method: 'POST', body: JSON.stringify(formData) });
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
          />

          <Input
            type="text"
            label="Middle Name"
            id="middleName"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            placeholder="Middle Name"
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

          <TimeInput id="time" label="Time" min="09:00" max="17:00" />

          <Select id="service" label="Service" options={treatments || []} />

          <Textarea />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}
