export default function Pricing() {
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
          Insurance & Pricing
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">
              Transparent Dental Care Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in clear, upfront pricing and work with most insurance
              plans to help make quality dental care accessible to everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Insurance Information */}
      <div className="bg-[url('/bg1.png')] py-20 bg-fit bg-center bg-no-repeat bg-blend-overlay bg-scooter-600/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brand-dark mb-4">
              Insurance We Accept
            </h3>
            <p className="text-lg text-gray-600">
              We work with most major insurance providers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-scooter-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/tooth.svg" alt="Insurance" className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-brand-dark mb-2">
                Blue Cross Blue Shield
              </h4>
              <p className="text-sm text-gray-600">Major dental coverage</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-scooter-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/tooth.svg" alt="Insurance" className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-brand-dark mb-2">Aetna</h4>
              <p className="text-sm text-gray-600">PPO and HMO plans</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-scooter-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/tooth.svg" alt="Insurance" className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-brand-dark mb-2">Cigna</h4>
              <p className="text-sm text-gray-600">Comprehensive coverage</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-scooter-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/tooth.svg" alt="Insurance" className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-brand-dark mb-2">
                Delta Dental
              </h4>
              <p className="text-sm text-gray-600">Preferred provider</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Don't see your insurance? Call us at{" "}
              <strong>+63 993 123 3452</strong> to verify your coverage.
            </p>
            <p className="text-sm text-gray-500">
              We also accept cash, credit cards, and offer flexible payment
              plans for uncovered procedures.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Tables */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brand-dark mb-4">
              Common Procedures & Pricing
            </h3>
            <p className="text-lg text-gray-600">
              Starting prices for our most requested treatments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* General Dentistry */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-bold text-brand-dark mb-4 text-center">
                General Dentistry
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Routine Cleaning</span>
                  <span className="font-semibold">₱1,500</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Deep Cleaning</span>
                  <span className="font-semibold">₱3,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Dental Fillings</span>
                  <span className="font-semibold">₱2,500</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Dental Sealants</span>
                  <span className="font-semibold">₱1,200</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Fluoride Treatment</span>
                  <span className="font-semibold">₱800</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">X-Rays</span>
                  <span className="font-semibold">₱1,000</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="text-xs text-gray-500">
                  *Prices may vary based on complexity and individual needs
                </p>
              </div>
            </div>

            {/* Restorative Dentistry */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-bold text-brand-dark mb-4 text-center">
                Restorative Dentistry
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Dental Crowns</span>
                  <span className="font-semibold">₱15,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Root Canal</span>
                  <span className="font-semibold">₱12,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Dental Bridges</span>
                  <span className="font-semibold">₱25,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Extractions</span>
                  <span className="font-semibold">₱3,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Wisdom Teeth</span>
                  <span className="font-semibold">₱8,000</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Dentures (Full)</span>
                  <span className="font-semibold">₱18,000</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="text-xs text-gray-500">
                  *Prices may vary based on complexity and individual needs
                </p>
              </div>
            </div>

            {/* Cosmetic Dentistry */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-bold text-brand-dark mb-4 text-center">
                Cosmetic Dentistry
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Teeth Whitening</span>
                  <span className="font-semibold">₱6,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Porcelain Veneers</span>
                  <span className="font-semibold">₱20,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Dental Bonding</span>
                  <span className="font-semibold">₱4,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Smile Makeover</span>
                  <span className="font-semibold">₱45,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Invisalign</span>
                  <span className="font-semibold">₱180,000</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Dental Implants</span>
                  <span className="font-semibold">₱50,000</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="text-xs text-gray-500">
                  *Prices may vary based on complexity and individual needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Options */}
      <div className="bg-[url('/bg1.png')] py-20 bg-fit bg-center bg-no-repeat bg-blend-overlay bg-scooter-600/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brand-dark mb-4">
              Flexible Payment Options
            </h3>
            <p className="text-lg text-gray-600">
              Making quality dental care affordable for everyone
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-scooter-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/mobile.svg" alt="Payment" className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-brand-dark mb-3">
                Payment Plans
              </h4>
              <p className="text-sm text-gray-600">
                Flexible installment plans for major treatments. Interest-free
                options available.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-scooter-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/email.svg" alt="Credit" className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-brand-dark mb-3">
                Credit Cards
              </h4>
              <p className="text-sm text-gray-600">
                We accept Visa, MasterCard, and American Express for your
                convenience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-scooter-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/clock.svg" alt="Cash" className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-brand-dark mb-3">
                Cash Payments
              </h4>
              <p className="text-sm text-gray-600">
                Cash payments accepted with 5% discount for major procedures
                over ₱20,000.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-scooter-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/tooth.svg" alt="Insurance" className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-brand-dark mb-3">
                Dental Savings
              </h4>
              <p className="text-sm text-gray-600">
                In-house dental savings plan for patients without insurance
                coverage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Free Consultation */}
      <div className="bg-brand-dark py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Free Consultation & Estimate
            </h3>
            <p className="text-xl text-gray-300">
              Every patient deserves a clear understanding of their treatment
              options and costs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-scooter-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/phone.svg" alt="Call" className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">Call Us</h4>
              <p className="text-gray-300 mb-4">
                Speak with our team about your insurance coverage and treatment
                options.
              </p>
              <a
                href="tel:+639931233452"
                className="inline-block px-6 py-2 bg-scooter-500 hover:bg-scooter-600 text-white font-semibold rounded-lg transition duration-200"
              >
                Call Now
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-scooter-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/email.svg" alt="Email" className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">
                Email Us
              </h4>
              <p className="text-gray-300 mb-4">
                Send us your insurance information and we'll verify your
                coverage.
              </p>
              <a
                href="mailto:rkdental@mailsac.com"
                className="inline-block px-6 py-2 bg-scooter-500 hover:bg-scooter-600 text-white font-semibold rounded-lg transition duration-200"
              >
                Email Us
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-scooter-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/mobile.svg" alt="Visit" className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">
                Visit Us
              </h4>
              <p className="text-gray-300 mb-4">
                Schedule a consultation to discuss your treatment plan and
                payment options.
              </p>
              <a
                href="/appointment"
                className="inline-block px-6 py-2 bg-scooter-500 hover:bg-scooter-600 text-white font-semibold rounded-lg transition duration-200"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brand-dark mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-lg text-gray-600">
              Common questions about insurance and pricing
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-brand-dark mb-2">
                Do you accept my insurance?
              </h4>
              <p className="text-gray-600">
                We work with most major dental insurance providers. Contact us
                with your policy information, and we'll verify your benefits and
                coverage before your appointment.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-brand-dark mb-2">
                What if I don't have dental insurance?
              </h4>
              <p className="text-gray-600">
                We offer flexible payment plans and an in-house dental savings
                plan. We also provide cash payment discounts for major
                procedures over ₱20,000.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-brand-dark mb-2">
                Are the prices shown exact costs?
              </h4>
              <p className="text-gray-600">
                The prices shown are starting estimates and may vary based on
                the complexity of your specific case. We'll provide a detailed
                treatment plan with exact costs before proceeding.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-brand-dark mb-2">
                Can I get a second opinion on treatment costs?
              </h4>
              <p className="text-gray-600">
                Absolutely! We encourage patients to seek second opinions,
                especially for major procedures. We'll provide detailed
                treatment plans and transparent pricing to help you make
                informed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">
            Ready to Discuss Your Treatment Options?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free consultation and transparent pricing
            estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/appointment"
              className="px-8 py-3 bg-scooter-500 hover:bg-scooter-600 text-white font-semibold rounded-lg transition duration-200"
            >
              Book Consultation
            </a>
            <a
              href="tel:+639931233452"
              className="px-8 py-3 border-2 border-scooter-500 text-scooter-500 hover:bg-scooter-500 hover:text-white font-semibold rounded-lg transition duration-200"
            >
              Call +63 993 123 3452
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
