export default function Testimonials() {
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
          Testimonials
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read real experiences from our patients who have entrusted us with
              their dental care. Their smiles tell our story better than we ever
              could.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-scooter-500 mb-2">
                5000+
              </div>
              <div className="text-gray-600">Happy Patients</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-scooter-500 mb-2">
                4.9/5
              </div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-scooter-500 mb-2">
                15+
              </div>
              <div className="text-gray-600">Years of Service</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Reviews */}
      <div className="bg-[url('/bg1.png')] py-20 bg-fit bg-center bg-no-repeat bg-blend-overlay bg-scooter-600/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brand-dark mb-4">
              Patient Reviews
            </h3>
            <p className="text-lg text-gray-600">
              Authentic feedback from our valued patients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                </div>
                <span className="ml-2 text-sm text-gray-500">5.0</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Dr. RK and his team made my dental implant procedure so
                comfortable. The results exceeded my expectations, and I can't
                stop smiling!"
              </p>
              <div className="border-t pt-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-scooter-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-scooter-600 font-semibold text-sm">
                      MJ
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark">
                      Maria Johnson
                    </div>
                    <div className="text-sm text-gray-500">
                      Dental Implant Patient
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                </div>
                <span className="ml-2 text-sm text-gray-500">5.0</span>
              </div>
              <p className="text-gray-600 mb-4">
                "I've been coming to RK Dental for 5 years. Dr. Sarah Johnson
                did my Invisalign treatment, and the transformation is amazing.
                Highly recommend!"
              </p>
              <div className="border-t pt-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-scooter-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-scooter-600 font-semibold text-sm">
                      DC
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark">
                      David Chen
                    </div>
                    <div className="text-sm text-gray-500">
                      Orthodontic Patient
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                </div>
                <span className="ml-2 text-sm text-gray-500">5.0</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Dr. Emily is fantastic with kids! My daughter used to be scared
                of dental visits, but now she actually looks forward to her
                appointments."
              </p>
              <div className="border-t pt-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-scooter-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-scooter-600 font-semibold text-sm">
                      SP
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark">
                      Sarah Parker
                    </div>
                    <div className="text-sm text-gray-500">
                      Parent of Pediatric Patient
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                </div>
                <span className="ml-2 text-sm text-gray-500">5.0</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Professional, caring, and knowledgeable staff. They explained
                every step of my root canal procedure and made sure I was
                comfortable throughout."
              </p>
              <div className="border-t pt-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-scooter-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-scooter-600 font-semibold text-sm">
                      MR
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark">
                      Michael Rodriguez
                    </div>
                    <div className="text-sm text-gray-500">
                      Endodontic Patient
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                </div>
                <span className="ml-2 text-sm text-gray-500">5.0</span>
              </div>
              <p className="text-gray-600 mb-4">
                "The entire team at RK Dental is exceptional. From scheduling to
                treatment, everything was smooth and professional. My smile
                makeover changed my life!"
              </p>
              <div className="border-t pt-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-scooter-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-scooter-600 font-semibold text-sm">
                      LW
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark">
                      Lisa Wilson
                    </div>
                    <div className="text-sm text-gray-500">
                      Cosmetic Dentistry Patient
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                  <span className="text-lg">★</span>
                </div>
                <span className="ml-2 text-sm text-gray-500">5.0</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Emergency dental care when I needed it most. Dr. RK saw me the
                same day for a broken tooth. Quick, professional, and excellent
                results!"
              </p>
              <div className="border-t pt-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-scooter-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-scooter-600 font-semibold text-sm">
                      JW
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark">
                      James Wong
                    </div>
                    <div className="text-sm text-gray-500">
                      Emergency Patient
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Patient Stories */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brand-dark mb-4">
              Patient Success Stories
            </h3>
            <p className="text-lg text-gray-600">
              Detailed experiences from our patients
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                    <span className="ml-2 text-sm text-gray-500">
                      Complete Smile Makeover
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-brand-dark">
                    From Dental Anxiety to Confident Smiling
                  </h4>
                  <p className="text-gray-600 mb-4">
                    "I had avoided the dentist for over 10 years due to severe
                    anxiety. When I finally made it to RK Dental, Dr. RK and his
                    team were incredibly patient and understanding. They
                    explained every procedure, took breaks when needed, and made
                    sure I was comfortable. I had veneers, whitening, and gum
                    treatment. The transformation is incredible, but more
                    importantly, I actually enjoy going to the dentist now!"
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Treatment Duration:</strong> 6 months |
                    <strong>Procedures:</strong> Veneers, Whitening, Gum
                    Treatment
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-scooter-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <span className="text-scooter-600 font-bold text-lg">
                      AJ
                    </span>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-brand-dark">
                      Anna Jones
                    </div>
                    <div className="text-gray-500">Age 34</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-scooter-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <span className="text-scooter-600 font-bold text-lg">
                      RT
                    </span>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-brand-dark">
                      Robert Taylor
                    </div>
                    <div className="text-gray-500">Age 52</div>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                    <span className="ml-2 text-sm text-gray-500">
                      Full Mouth Reconstruction
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-brand-dark">
                    Rediscovering the Joy of Eating
                  </h4>
                  <p className="text-gray-600 mb-4">
                    "Years of dental problems had made it difficult to eat
                    certain foods and affected my confidence. Dr. Michael Chen
                    and the team created a comprehensive treatment plan that
                    included implants, crowns, and gum treatment. The process
                    took about 8 months, but the results are life-changing. I
                    can eat anything now and feel confident in social situations
                    again."
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Treatment Duration:</strong> 8 months |
                    <strong>Procedures:</strong> Multiple Implants, Crowns, Gum
                    Treatment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics & Recognition */}
      <div className="bg-brand-dark py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Our Track Record
            </h3>
            <p className="text-xl text-gray-300">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-scooter-400 mb-2">
                99%
              </div>
              <div className="text-white">Patient Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-scooter-400 mb-2">
                50+
              </div>
              <div className="text-white">Continuing Education Hours</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-scooter-400 mb-2">
                15+
              </div>
              <div className="text-white">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-scooter-400 mb-2">
                5000+
              </div>
              <div className="text-white">Successful Treatments</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">
            Ready to Join Our Happy Patients?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the difference that personalized, caring dental service
            can make in your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/appointment"
              className="px-8 py-3 bg-scooter-500 hover:bg-scooter-600 text-white font-semibold rounded-lg transition duration-200"
            >
              Schedule Your Visit
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-scooter-500 text-scooter-500 hover:bg-scooter-500 hover:text-white font-semibold rounded-lg transition duration-200"
            >
              Read More Reviews
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
