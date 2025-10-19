import AppointmentForm from "./appointment-form";

export default function Appointment() {
  return (
    <div>
      <div className="relative w-full h-80 overflow-hidden">
        <img
          src="/bg.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-950/35"></div>
        <div className="absolute inset-0 bg-brand-dark/55 mix-blend-overlay"></div>
        <div className="relative z-10 text-8xl font-extrabold h-full flex items-center justify-center text-white">
          Appointment
        </div>
      </div>
      <div className=" place-content-center gap-5 w-full bg-[url('/bg1.png')] pt-20 bg-fit bg-center bg-no-repeat bg-blend-overlay bg-scooter-600/5">
        <div className="container grid grid-cols-2 gap-6 mx-auto">
          <div>
            <img src="/doctors.png" alt="" className="ml-auto block" />
          </div>
          <div className="relative">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </div>
  );
}
