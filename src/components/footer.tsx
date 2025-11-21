import { navItems } from "../static-data";
import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-[96rem] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
             <img src="/tooth.svg" alt="RK Dental" className="h-10 w-10 brightness-0 invert" />
             <span className="text-2xl font-bold tracking-tight">RK Dental</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Providing top-quality dental care with a gentle touch. Your smile is our priority. We are dedicated to improving your oral health.
          </p>
          <div className="flex gap-4 pt-2">
            {/* Facebook */}
            <a href="#" className="bg-gray-800 p-2.5 rounded-full hover:bg-scooter-500 hover:text-white text-gray-400 transition-all duration-300">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            {/* Twitter/X */}
            <a href="#" className="bg-gray-800 p-2.5 rounded-full hover:bg-scooter-500 hover:text-white text-gray-400 transition-all duration-300">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            {/* Instagram */}
            <a href="#" className="bg-gray-800 p-2.5 rounded-full hover:bg-scooter-500 hover:text-white text-gray-400 transition-all duration-300">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-scooter-500 inline-block pb-1">Quick Links</h3>
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="text-gray-400 hover:text-scooter-500 transition-colors duration-200 text-sm flex items-center gap-2">
                  <span className="text-scooter-500">›</span> {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-scooter-500 inline-block pb-1">Contact Us</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
               <div className="bg-gray-800 p-2 rounded-full shrink-0 text-scooter-500">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
               </div>
               <span className="mt-1">123 Dental Street, Cityville, State 12345</span>
            </li>
            <li className="flex items-start gap-3">
               <div className="bg-gray-800 p-2 rounded-full shrink-0 text-scooter-500">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
               </div>
               <span className="mt-1">+63 993 123 3452</span>
            </li>
            <li className="flex items-start gap-3">
               <div className="bg-gray-800 p-2 rounded-full shrink-0 text-scooter-500">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
               </div>
               <span className="mt-1">rkdental@mailsac.com</span>
            </li>
             <li className="flex items-start gap-3">
               <div className="bg-gray-800 p-2 rounded-full shrink-0 text-scooter-500">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
               </div>
               <span className="mt-1">Open Daily 9:00 AM - 5:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Action Column */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-scooter-500 inline-block pb-1">Book an Appointment</h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Ready to smile with confidence? Schedule your visit today! We accept most insurance plans.
          </p>
          <Link to="/appointment" className="inline-block bg-scooter-500 hover:bg-scooter-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-scooter-500/30 transform hover:-translate-y-1">
            Book Now
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-8 mt-8">
        <div className="max-w-[96rem] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} RK Dental. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-scooter-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-scooter-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-scooter-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
