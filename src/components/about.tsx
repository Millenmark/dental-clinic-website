export default function About() {
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
          About Us
        </div>
      </div>

      {/* About Content */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/doctors.png"
                alt="Our Dental Team"
                className="w-full max-w-lg mx-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-brand-dark mb-6">
                Caring for Your Smile Since 2010
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At RK Dental, we believe that everyone deserves a healthy,
                beautiful smile. Our mission is to provide exceptional dental
                care in a comfortable and welcoming environment.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Led by Dr. RK and our dedicated team of dental professionals, we
                combine years of experience with the latest dental technology to
                deliver the highest quality care to our patients.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-scooter-500">15+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-scooter-500">
                    5000+
                  </div>
                  <div className="text-gray-600">Happy Patients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-[url('/bg1.png')] py-20 bg-fit bg-center bg-no-repeat bg-blend-overlay bg-scooter-600/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our approach to
              patient care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-scooter-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="/tooth.svg" alt="Quality" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-brand-dark">
                Quality Care
              </h3>
              <p className="text-gray-600">
                We maintain the highest standards in dental care, using
                state-of-the-art equipment and following strict sterilization
                protocols.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-scooter-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="/email.svg" alt="Communication" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-brand-dark">
                Open Communication
              </h3>
              <p className="text-gray-600">
                We believe in transparent communication, ensuring our patients
                understand their treatment options and feel comfortable
                throughout their visit.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-scooter-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <img
                  src="/mobile.svg"
                  alt="Accessibility"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-brand-dark">
                Accessibility
              </h3>
              <p className="text-gray-600">
                Quality dental care should be accessible to everyone. We offer
                flexible scheduling and work with various insurance providers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Team Preview */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dental professionals are dedicated to providing you with the
              best possible care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-24 h-24 bg-scooter-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img src="/doctors.png" alt="Dr. RK" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-dark">
                Dr. RK
              </h3>
              <p className="text-gray-600 mb-2">Lead Dentist & Founder</p>
              <p className="text-sm text-gray-500">
                DDS, 15+ years of experience in general and cosmetic dentistry
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-24 h-24 bg-scooter-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img src="/doctors.png" alt="Dr. Sarah" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-dark">
                Dr. Sarah Johnson
              </h3>
              <p className="text-gray-600 mb-2">Orthodontist</p>
              <p className="text-sm text-gray-500">
                DMD, Specialist in braces and Invisalign treatment
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-24 h-24 bg-scooter-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/doctors.png"
                  alt="Dr. Michael"
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-dark">
                Dr. Michael Chen
              </h3>
              <p className="text-gray-600 mb-2">Oral Surgeon</p>
              <p className="text-sm text-gray-500">
                DDS, MD, Expert in surgical procedures and implants
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="/doctors"
              className="inline-block px-8 py-3 bg-scooter-500 hover:bg-scooter-600 text-white font-semibold rounded-lg transition duration-200"
            >
              Meet Our Full Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
