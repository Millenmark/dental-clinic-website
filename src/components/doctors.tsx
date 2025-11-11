export default function Doctors() {
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
          Our Doctors
        </div>
      </div>

      {/* Team Introduction */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">
              Meet Our Expert Dental Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced dentists are committed to providing exceptional
              care with a gentle touch and personalized attention to every
              patient.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/doctors.png"
                alt="Our Dental Team"
                className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                Professional Excellence
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our team brings together decades of experience in various dental
                specialties, ensuring you receive the highest quality care for
                all your dental needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <img
                    src="/tooth.svg"
                    alt="Experience"
                    className="w-6 h-6 mr-4 text-scooter-500"
                  />
                  <span>Over 50 years of combined experience</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="/tooth.svg"
                    alt="Specialization"
                    className="w-6 h-6 mr-4 text-scooter-500"
                  />
                  <span>Multiple dental specialties represented</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="/tooth.svg"
                    alt="Education"
                    className="w-6 h-6 mr-4 text-scooter-500"
                  />
                  <span>Continuing education and training</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Dentist */}
      <div className="bg-[url('/bg1.png')] py-20 bg-fit bg-center bg-no-repeat bg-blend-overlay bg-scooter-600/5">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-scooter-100 text-scooter-700 text-sm font-semibold rounded-full mb-4">
                    Lead Dentist
                  </span>
                  <h3 className="text-3xl font-bold text-brand-dark mb-2">
                    Dr. RK
                  </h3>
                  <p className="text-xl text-gray-600 mb-4">
                    Founder & Principal Dentist
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-2">
                      Education
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Doctor of Dental Surgery (DDS), University of Manila
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-2">
                      Experience
                    </h4>
                    <p className="text-gray-600 text-sm">
                      15+ years in general and cosmetic dentistry
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-2">
                      Specializations
                    </h4>
                    <p className="text-gray-600 text-sm">
                      General Dentistry • Cosmetic Dentistry • Dental Implants •
                      Oral Surgery
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">
                    About Dr. RK
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Dr. RK founded RK Dental with a vision to provide
                    exceptional dental care in a comfortable, welcoming
                    environment. Known for his gentle approach and attention to
                    detail, Dr. RK has helped thousands of patients achieve
                    healthy, beautiful smiles.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <img
                      src="/clock.svg"
                      alt="Availability"
                      className="w-4 h-4 mr-2"
                    />
                    <span>Available Monday - Saturday</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 lg:p-12 flex items-center justify-center">
                <div className="w-48 h-48 bg-scooter-100 rounded-full flex items-center justify-center">
                  <img src="/doctors.png" alt="Dr. RK" className="w-32 h-32" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specialist Team */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brand-dark mb-4">
              Our Specialist Team
            </h3>
            <p className="text-lg text-gray-600">
              Dedicated professionals in their respective fields
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-scooter-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/doctors.png"
                  alt="Dr. Sarah Johnson"
                  className="w-12 h-12"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-brand-dark">
                Dr. Sarah Johnson
              </h4>
              <p className="text-scooter-600 font-medium mb-2">Orthodontist</p>
              <p className="text-sm text-gray-600 mb-3">
                DMD, Orthodontic Residency, 10 years experience
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Specializes in braces, Invisalign, and jaw alignment treatments
              </p>
              <div className="flex justify-center space-x-4 text-xs text-gray-500">
                <span>Monday</span>
                <span>Wednesday</span>
                <span>Friday</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-scooter-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/doctors.png"
                  alt="Dr. Michael Chen"
                  className="w-12 h-12"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-brand-dark">
                Dr. Michael Chen
              </h4>
              <p className="text-scooter-600 font-medium mb-2">
                Oral & Maxillofacial Surgeon
              </p>
              <p className="text-sm text-gray-600 mb-3">
                DDS, MD, 12 years surgical experience
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Expert in complex extractions, implants, and jaw surgery
              </p>
              <div className="flex justify-center space-x-4 text-xs text-gray-500">
                <span>Tuesday</span>
                <span>Thursday</span>
                <span>Saturday</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-scooter-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/doctors.png"
                  alt="Dr. Emily Rodriguez"
                  className="w-12 h-12"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-brand-dark">
                Dr. Emily Rodriguez
              </h4>
              <p className="text-scooter-600 font-medium mb-2">
                Pediatric Dentist
              </p>
              <p className="text-sm text-gray-600 mb-3">
                DMD, Pediatric Residency, 8 years experience
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Specializes in children's dental care and anxiety management
              </p>
              <div className="flex justify-center space-x-4 text-xs text-gray-500">
                <span>Monday</span>
                <span>Tuesday</span>
                <span>Thursday</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-scooter-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/doctors.png"
                  alt="Dr. David Park"
                  className="w-12 h-12"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-brand-dark">
                Dr. David Park
              </h4>
              <p className="text-scooter-600 font-medium mb-2">Periodontist</p>
              <p className="text-sm text-gray-600 mb-3">
                DDS, Periodontic Residency, 14 years experience
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Expert in gum disease treatment and implant procedures
              </p>
              <div className="flex justify-center space-x-4 text-xs text-gray-500">
                <span>Wednesday</span>
                <span>Friday</span>
                <span>Saturday</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-scooter-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/doctors.png"
                  alt="Dr. Lisa Thompson"
                  className="w-12 h-12"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-brand-dark">
                Dr. Lisa Thompson
              </h4>
              <p className="text-scooter-600 font-medium mb-2">Endodontist</p>
              <p className="text-sm text-gray-600 mb-3">
                DDS, Endodontic Residency, 11 years experience
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Specializes in root canal therapy and pulp treatments
              </p>
              <div className="flex justify-center space-x-4 text-xs text-gray-500">
                <span>Monday</span>
                <span>Wednesday</span>
                <span>Friday</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-scooter-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/doctors.png"
                  alt="Dr. James Wilson"
                  className="w-12 h-12"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-brand-dark">
                Dr. James Wilson
              </h4>
              <p className="text-scooter-600 font-medium mb-2">
                Prosthodontist
              </p>
              <p className="text-sm text-gray-600 mb-3">
                DDS, Prosthodontic Residency, 16 years experience
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Expert in crowns, bridges, dentures, and smile makeovers
              </p>
              <div className="flex justify-center space-x-4 text-xs text-gray-500">
                <span>Tuesday</span>
                <span>Thursday</span>
                <span>Saturday</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Values */}
      <div className="bg-brand-dark py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Our Commitment to You
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These values guide our practice and ensure every patient receives
              the best possible care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-scooter-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/tooth.svg" alt="Excellence" className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">
                Excellence
              </h4>
              <p className="text-gray-300 text-sm">
                We maintain the highest standards in dental care and stay
                current with the latest techniques.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-scooter-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/clock.svg" alt="Compassion" className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">
                Compassion
              </h4>
              <p className="text-gray-300 text-sm">
                We treat every patient with empathy, understanding, and genuine
                care for their comfort.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-scooter-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/doctors.png" alt="Teamwork" className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">
                Teamwork
              </h4>
              <p className="text-gray-300 text-sm">
                Our collaborative approach ensures comprehensive care from our
                multidisciplinary team.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-scooter-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/mobile.svg" alt="Innovation" className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">
                Innovation
              </h4>
              <p className="text-gray-300 text-sm">
                We embrace new technologies and techniques to provide the most
                effective treatments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">
            Meet Your New Dental Team
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule an appointment to experience our personalized approach to
            dental care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/appointment"
              className="px-8 py-3 bg-scooter-500 hover:bg-scooter-600 text-white font-semibold rounded-lg transition duration-200"
            >
              Book an Appointment
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-scooter-500 text-scooter-500 hover:bg-scooter-500 hover:text-white font-semibold rounded-lg transition duration-200"
            >
              Ask Questions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
