import { useNavigate } from "@tanstack/react-router";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src="/bg.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-950/35"></div>
        <div className="absolute inset-0 bg-brand-dark/55 mix-blend-overlay"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              Your Smile, Our Priority
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Professional dental care with state-of-the-art technology and
              compassionate service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate({ to: "/appointment" })}
                className="cursor-pointer px-8 py-4 bg-scooter-500 hover:bg-scooter-600 text-white font-semibold rounded-lg transition duration-200"
              >
                Book Appointment
              </button>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-brand-dark font-semibold rounded-lg transition duration-200">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-scooter-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/clock.svg" alt="Hours" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Open Daily</h3>
              <p className="text-gray-600">
                Monday to Sunday, 9:00 AM - 5:00 PM
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-scooter-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/phone.svg" alt="Phone" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">+63 993 123 3452</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-scooter-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/mobile.svg" alt="Booking" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">Schedule online 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="bg-[url('/bg1.png')] py-20 bg-fit bg-center bg-no-repeat bg-blend-overlay bg-scooter-600/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">
              Comprehensive Dental Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine cleanings to complex procedures, we provide complete
              dental services with the latest technology and gentle care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-brand-dark">
                General Dentistry
              </h3>
              <p className="text-gray-600 mb-4">
                Complete oral health care including cleanings, fillings, and
                preventive treatments.
              </p>
              <a
                href="/services"
                className="text-scooter-500 hover:text-scooter-600 font-medium"
              >
                Learn More →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-brand-dark">
                Cosmetic Dentistry
              </h3>
              <p className="text-gray-600 mb-4">
                Transform your smile with whitening, veneers, and aesthetic
                treatments.
              </p>
              <a
                href="/services"
                className="text-scooter-500 hover:text-scooter-600 font-medium"
              >
                Learn More →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-brand-dark">
                Oral Surgery
              </h3>
              <p className="text-gray-600 mb-4">
                Expert surgical procedures including extractions and implant
                placement.
              </p>
              <a
                href="/treatments"
                className="text-scooter-500 hover:text-scooter-600 font-medium"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
