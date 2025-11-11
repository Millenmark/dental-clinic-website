export default function Contact() {
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
          Contact Us
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">
              Get in Touch With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to schedule your appointment or have questions about our
              services? We're here to help and look forward to hearing from you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-scooter-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/phone.svg" alt="Phone" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-brand-dark">
                Call Us
              </h3>
              <p className="text-gray-600 mb-2">+63 993 123 3452</p>
              <p className="text-sm text-gray-500">Mon-Sun, 9 AM - 5 PM</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-scooter-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/email.svg" alt="Email" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-brand-dark">
                Email Us
              </h3>
              <p className="text-gray-600 mb-2">rkdental@mailsac.com</p>
              <p className="text-sm text-gray-500">
                We'll respond within 24 hours
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-scooter-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/clock.svg" alt="Hours" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-brand-dark">
                Office Hours
              </h3>
              <p className="text-gray-600 mb-2">Monday - Sunday</p>
              <p className="text-sm text-gray-500">9:00 AM - 5:00 PM</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-scooter-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/mobile.svg" alt="Location" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-brand-dark">
                Location
              </h3>
              <p className="text-gray-600 mb-2">Manila, Philippines</p>
              <p className="text-sm text-gray-500">Central location</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="bg-[url('/bg1.png')] py-20 bg-fit bg-center bg-no-repeat bg-blend-overlay bg-scooter-600/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-brand-dark mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-scooter-500 focus:border-scooter-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-scooter-500 focus:border-scooter-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-scooter-500 focus:border-scooter-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-scooter-500 focus:border-scooter-500"
                    placeholder="+63 123 456 7890"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-scooter-500 focus:border-scooter-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Schedule Appointment</option>
                    <option value="treatment">Treatment Inquiry</option>
                    <option value="insurance">Insurance Questions</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="emergency">Emergency Care</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-scooter-500 focus:border-scooter-500"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-scooter-500 hover:bg-scooter-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-brand-dark mb-6">
                  Quick Contact
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <img
                      src="/phone.svg"
                      alt="Call"
                      className="w-6 h-6 mr-4 mt-1 text-scooter-500"
                    />
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-1">
                        Phone
                      </h4>
                      <p className="text-gray-600">+63 993 123 3452</p>
                      <p className="text-sm text-gray-500">
                        Available during office hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <img
                      src="/email.svg"
                      alt="Email"
                      className="w-6 h-6 mr-4 mt-1 text-scooter-500"
                    />
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-1">
                        Email
                      </h4>
                      <p className="text-gray-600">rkdental@mailsac.com</p>
                      <p className="text-sm text-gray-500">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <img
                      src="/clock.svg"
                      alt="Hours"
                      className="w-6 h-6 mr-4 mt-1 text-scooter-500"
                    />
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-1">
                        Emergency
                      </h4>
                      <p className="text-gray-600">
                        Call for urgent dental issues
                      </p>
                      <p className="text-sm text-gray-500">
                        Available 9 AM - 5 PM daily
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-brand-dark mb-6">
                  Why Choose RK Dental?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <img
                      src="/tooth.svg"
                      alt="Quality"
                      className="w-5 h-5 mr-3 text-scooter-500"
                    />
                    <span className="text-gray-700">
                      15+ years of professional experience
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="/tooth.svg"
                      alt="Team"
                      className="w-5 h-5 mr-3 text-scooter-500"
                    />
                    <span className="text-gray-700">
                      Expert team of dental specialists
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="/tooth.svg"
                      alt="Technology"
                      className="w-5 h-5 mr-3 text-scooter-500"
                    />
                    <span className="text-gray-700">
                      State-of-the-art equipment
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="/tooth.svg"
                      alt="Care"
                      className="w-5 h-5 mr-3 text-scooter-500"
                    />
                    <span className="text-gray-700">
                      Personalized, gentle care
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="/tooth.svg"
                      alt="Insurance"
                      className="w-5 h-5 mr-3 text-scooter-500"
                    />
                    <span className="text-gray-700">
                      Most insurance plans accepted
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brand-dark mb-4">
              Visit Our Clinic
            </h3>
            <p className="text-lg text-gray-600">
              Conveniently located in the heart of Manila with easy access and
              parking
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <img
                src="/doctors.png"
                alt="Location"
                className="w-16 h-16 mx-auto mb-4 opacity-50"
              />
              <p className="text-gray-600 font-semibold">Interactive Map</p>
              <p className="text-gray-500">Manila, Philippines</p>
              <p className="text-sm text-gray-400 mt-2">
                Map integration coming soon
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-brand-dark py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-xl text-gray-300">
              Quick answers to common questions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-2">
                  How do I schedule an appointment?
                </h4>
                <p className="text-gray-300 text-sm">
                  You can schedule an appointment by calling us, filling out our
                  online form, or using our convenient online booking system.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  Do you accept walk-in patients?
                </h4>
                <p className="text-gray-300 text-sm">
                  While we accept walk-ins when possible, we recommend
                  scheduling ahead to ensure you receive prompt attention.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  What should I bring to my appointment?
                </h4>
                <p className="text-gray-300 text-sm">
                  Please bring a valid ID, your insurance card, a list of
                  current medications, and any previous dental records or
                  X-rays.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-2">
                  Do you offer emergency dental care?
                </h4>
                <p className="text-gray-300 text-sm">
                  Yes, we provide emergency dental services during our regular
                  office hours. Call us immediately for urgent dental issues.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  How often should I visit the dentist?
                </h4>
                <p className="text-gray-300 text-sm">
                  We recommend visiting every 6 months for routine cleanings and
                  checkups, or more frequently if you have specific dental
                  concerns.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  What payment methods do you accept?
                </h4>
                <p className="text-gray-300 text-sm">
                  We accept cash, credit cards, and work with most major dental
                  insurance plans. We also offer flexible payment plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't wait - contact us today to schedule your appointment or ask
            any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/appointment"
              className="px-8 py-3 bg-scooter-500 hover:bg-scooter-600 text-white font-semibold rounded-lg transition duration-200"
            >
              Book Appointment
            </a>
            <a
              href="tel:+639931233452"
              className="px-8 py-3 border-2 border-scooter-500 text-scooter-500 hover:bg-scooter-500 hover:text-white font-semibold rounded-lg transition duration-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
