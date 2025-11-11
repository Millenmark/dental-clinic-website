export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-80 overflow-hidden">
        <img
          src="/bg.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-950/35"></div>
        <div className="absolute inset-0 bg-brand-dark/55 mix-blend-overlay"></div>
        <div className="relative z-10 text-8xl font-extrabold h-full flex items-center justify-center text-white">
          Our Services
        </div>
      </div>

      {/* Services Overview */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">
              Comprehensive Dental Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a full range of dental services to meet all your oral
              health needs, from routine cleanings to advanced cosmetic
              procedures.
            </p>
          </div>
        </div>
      </div>

      {/* General Dentistry */}
      <div className="bg-[url('/bg1.png')] py-20 bg-fit bg-center bg-no-repeat bg-blend-overlay bg-scooter-600/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brand-dark mb-4">
              General Dentistry
            </h3>
            <p className="text-lg text-gray-600">
              Essential dental care for maintaining optimal oral health
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-scooter-100 rounded-lg flex items-center justify-center mb-4">
                <img src="/tooth.svg" alt="Cleanings" className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-brand-dark">
                Professional Cleanings
              </h4>
              <p className="text-gray-600 mb-4">
                Regular cleanings and examinations to prevent dental problems
                and maintain oral health.
              </p>
              <div className="text-sm text-gray-500">
                Duration: 45-60 minutes
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-scooter-100 rounded-lg flex items-center justify-center mb-4">
                <img src="/tooth.svg" alt="Fillings" className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-brand-dark">
                Dental Fillings
              </h4>
              <p className="text-gray-600 mb-4">
                Tooth-colored composite fillings to restore damaged teeth and
                prevent further decay.
              </p>
              <div className="text-sm text-gray-500">
                Duration: 30-45 minutes
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-scooter-100 rounded-lg flex items-center justify-center mb-4">
                <img src="/tooth.svg" alt="Sealants" className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-brand-dark">
                Dental Sealants
              </h4>
              <p className="text-gray-600 mb-4">
                Protective coatings applied to teeth to prevent cavities,
                especially in children.
              </p>
              <div className="text-sm text-gray-500">
                Duration: 15-30 minutes
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cosmetic Dentistry */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brand-dark mb-4">
              Cosmetic Dentistry
            </h3>
            <p className="text-lg text-gray-600">
              Transform your smile with our aesthetic dental treatments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-scooter-100 rounded-lg flex items-center justify-center mb-4">
                <img src="/tooth.svg" alt="Whitening" className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-brand-dark">
                Teeth Whitening
              </h4>
              <p className="text-gray-600 mb-4">
                Professional whitening treatments for a brighter, more confident
                smile.
              </p>
              <div className="text-sm text-gray-500">
                Duration: 60-90 minutes
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-scooter-100 rounded-lg flex items-center justify-center mb-4">
                <img src="/tooth.svg" alt="Veneers" className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-brand-dark">
                Porcelain Veneers
              </h4>
              <p className="text-gray-600 mb-4">
                Thin shells that cover the front of teeth to improve appearance
                and function.
              </p>
              <div className="text-sm text-gray-500">Duration: 2-3 visits</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-scooter-100 rounded-lg flex items-center justify-center mb-4">
                <img src="/tooth.svg" alt="Bonds" className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-brand-dark">
                Dental Bonding
              </h4>
              <p className="text-gray-600 mb-4">
                Tooth-colored resin to repair chips, gaps, or discoloration.
              </p>
              <div className="text-sm text-gray-500">
                Duration: 30-60 minutes
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Restorative Dentistry */}
      <div className="bg-[url('/bg1.png')] py-20 bg-fit bg-center bg-no-repeat bg-blend-overlay bg-scooter-600/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brand-dark mb-4">
              Restorative Dentistry
            </h3>
            <p className="text-lg text-gray-600">
              Advanced solutions to restore function and aesthetics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-scooter-100 rounded-lg flex items-center justify-center mb-4">
                <img src="/tooth.svg" alt="Crowns" className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-brand-dark">
                Dental Crowns
              </h4>
              <p className="text-gray-600 mb-4">
                Custom-made caps to protect and restore damaged or weak teeth.
              </p>
              <div className="text-sm text-gray-500">Duration: 2 visits</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-scooter-100 rounded-lg flex items-center justify-center mb-4">
                <img src="/tooth.svg" alt="Bridges" className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-brand-dark">
                Dental Bridges
              </h4>
              <p className="text-gray-600 mb-4">
                Replace missing teeth with artificial teeth supported by
                adjacent natural teeth.
              </p>
              <div className="text-sm text-gray-500">Duration: 2-3 visits</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-scooter-100 rounded-lg flex items-center justify-center mb-4">
                <img src="/tooth.svg" alt="Implants" className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-brand-dark">
                Dental Implants
              </h4>
              <p className="text-gray-600 mb-4">
                Permanent replacement for missing teeth with natural-looking
                results.
              </p>
              <div className="text-sm text-gray-500">Duration: 3-6 months</div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Services */}
      <div className="bg-brand-dark py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Emergency Dental Care</h2>
              <p className="text-xl mb-8 text-gray-300">
                Dental emergencies can happen at any time. We provide same-day
                emergency appointments for urgent dental issues.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <img src="/phone.svg" alt="Phone" className="w-6 h-6 mr-4" />
                  <span>Call us immediately: +63 993 123 3452</span>
                </div>
                <div className="flex items-center">
                  <img src="/clock.svg" alt="Hours" className="w-6 h-6 mr-4" />
                  <span>Available 9 AM - 5 PM daily</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="/mobile.svg"
                    alt="Emergency"
                    className="w-6 h-6 mr-4"
                  />
                  <span>Walk-ins welcome for emergencies</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-brand-dark mb-6">
                What to Do in a Dental Emergency
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-scooter-500 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Severe Toothache</h4>
                    <p className="text-gray-600">
                      Rinse with warm water and contact us immediately
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-scooter-500 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Broken Tooth</h4>
                    <p className="text-gray-600">
                      Save any pieces and apply cold compress
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-scooter-500 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Knocked Out Tooth</h4>
                    <p className="text-gray-600">
                      Keep tooth moist and seek immediate care
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">
            Ready to Schedule Your Visit?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to learn more about our services or to book an
            appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-scooter-500 hover:bg-scooter-600 text-white font-semibold rounded-lg transition duration-200"
            >
              Contact Us
            </a>
            <a
              href="/appointment"
              className="px-8 py-3 border-2 border-scooter-500 text-scooter-500 hover:bg-scooter-500 hover:text-white font-semibold rounded-lg transition duration-200"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
