export default function Treatments() {
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
          Treatments
        </div>
      </div>

      {/* Treatment Categories */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">
              Advanced Dental Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine procedures to complex surgical treatments, we provide
              comprehensive care using the latest techniques and equipment.
            </p>
          </div>
        </div>
      </div>

      {/* Preventive Treatments */}
      <div className="bg-[url('/bg1.png')] py-20 bg-fit bg-center bg-no-repeat bg-blend-overlay bg-scooter-600/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brand-dark mb-4">
              Preventive Treatments
            </h3>
            <p className="text-lg text-gray-600">
              Protecting your oral health before problems develop
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4 text-brand-dark">
                Deep Cleaning (Scaling & Root Planing)
              </h4>
              <p className="text-gray-600 mb-4">
                Thorough cleaning below the gum line to treat gum disease and
                prevent progression.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Duration:</span>
                  <span className="font-medium">60-90 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sessions:</span>
                  <span className="font-medium">1-4 visits</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Recovery:</span>
                  <span className="font-medium">1-2 days</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4 text-brand-dark">
                Fluoride Treatment
              </h4>
              <p className="text-gray-600 mb-4">
                Professional fluoride application to strengthen tooth enamel and
                prevent decay.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Duration:</span>
                  <span className="font-medium">15-30 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Frequency:</span>
                  <span className="font-medium">Every 6 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Recovery:</span>
                  <span className="font-medium">None</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4 text-brand-dark">
                Night Guards
              </h4>
              <p className="text-gray-600 mb-4">
                Custom-made appliances to protect teeth from grinding and
                clenching during sleep.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Duration:</span>
                  <span className="font-medium">2 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Consultation:</span>
                  <span className="font-medium">30 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Adjustment:</span>
                  <span className="font-medium">2-3 weeks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Restorative Treatments */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brand-dark mb-4">
              Restorative Treatments
            </h3>
            <p className="text-lg text-gray-600">
              Repairing and rebuilding damaged teeth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-brand-dark">
                Root Canal Treatment
              </h4>
              <p className="text-gray-600 mb-6">
                Advanced procedure to save infected or severely damaged teeth by
                removing infected pulp.
              </p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border-l-4 border-scooter-500">
                  <h5 className="font-semibold mb-2">Procedure Steps:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Local anesthesia and tooth isolation</li>
                    <li>• Access opening and pulp removal</li>
                    <li>• Cleaning and shaping root canals</li>
                    <li>• Filling with gutta-percha</li>
                    <li>• Crown placement for protection</li>
                  </ul>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500 block">Duration</span>
                    <span className="font-medium">2-3 visits</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Pain Level</span>
                    <span className="font-medium">Minimal</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Success Rate</span>
                    <span className="font-medium">95%+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-brand-dark">
                Dental Implants
              </h4>
              <p className="text-gray-600 mb-6">
                Permanent tooth replacement that looks, feels, and functions
                like natural teeth.
              </p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border-l-4 border-scooter-500">
                  <h5 className="font-semibold mb-2">Treatment Process:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Initial consultation and planning</li>
                    <li>• Titanium implant placement</li>
                    <li>• Healing period (3-6 months)</li>
                    <li>• Abutment placement</li>
                    <li>• Custom crown attachment</li>
                  </ul>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500 block">Timeline</span>
                    <span className="font-medium">3-6 months</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Success Rate</span>
                    <span className="font-medium">98%</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Lifespan</span>
                    <span className="font-medium">25+ years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Surgical Treatments */}
      <div className="bg-[url('/bg1.png')] py-20 bg-fit bg-center bg-no-repeat bg-blend-overlay bg-scooter-600/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brand-dark mb-4">
              Surgical Treatments
            </h3>
            <p className="text-lg text-gray-600">
              Advanced surgical procedures performed by specialists
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold mb-6 text-brand-dark">
                Tooth Extractions
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold mb-2">Simple Extractions</h5>
                  <p className="text-gray-600 text-sm mb-3">
                    Removal of visible teeth using local anesthesia
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Duration:</span>
                      <span className="ml-2 font-medium">20-40 minutes</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Recovery:</span>
                      <span className="ml-2 font-medium">3-7 days</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Surgical Extractions</h5>
                  <p className="text-gray-600 text-sm mb-3">
                    Complex removal of impacted or broken teeth
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Duration:</span>
                      <span className="ml-2 font-medium">45-90 minutes</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Recovery:</span>
                      <span className="ml-2 font-medium">7-14 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold mb-6 text-brand-dark">
                Wisdom Tooth Removal
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold mb-2">Impacted Wisdom Teeth</h5>
                  <p className="text-gray-600 text-sm mb-3">
                    Removal of partially or fully impacted third molars
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Duration:</span>
                      <span className="ml-2 font-medium">60-90 minutes</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Recovery:</span>
                      <span className="ml-2 font-medium">7-10 days</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Post-Operative Care</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ice pack application</li>
                    <li>• Soft diet for 24-48 hours</li>
                    <li>• Salt water rinses</li>
                    <li>• Follow-up appointment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Treatment Planning */}
      <div className="bg-brand-dark py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Personalized Treatment Plans
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every patient receives a customized treatment plan based on their
              unique needs and goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-scooter-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/tooth.svg" alt="Consultation" className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white">
                Initial Consultation
              </h4>
              <p className="text-gray-300">
                Comprehensive examination and discussion of treatment options
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-scooter-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/clock.svg" alt="Planning" className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white">
                Treatment Planning
              </h4>
              <p className="text-gray-300">
                Detailed plan with timeline, costs, and expected outcomes
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-scooter-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/doctors.png" alt="Care" className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white">
                Ongoing Care
              </h4>
              <p className="text-gray-300">
                Regular follow-ups and maintenance to ensure long-term success
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">
            Ready to Begin Your Treatment?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a consultation to discuss your treatment options and create
            a plan that's right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/appointment"
              className="px-8 py-3 bg-scooter-500 hover:bg-scooter-600 text-white font-semibold rounded-lg transition duration-200"
            >
              Book Consultation
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
