import { navItems } from "../static-data";

export default function Navbar() {
  return (
    <>
      <div className="hidden lg:flex lg:flex-wrap lg:justify-between lg:gap-10 xl:w-[96rem] mx-auto my-4">
        <div className="flex gap-2">
          <img src="/phone.svg" alt="Contact Us" />
          <div>
            <p className="font-semibold text-scooter-500 text-sm">Contact Us</p>
            <span className="text-brand-dark font-bold">+63 993 123 3452</span>
          </div>
        </div>

        <div className="flex gap-2">
          <img src="/email.svg" alt="Email" />
          <div>
            <p className="font-semibold text-scooter-500 text-sm">Email</p>
            <span className="text-brand-dark font-bold">
              rkdental@mailsac.com
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <img src="/mobile.svg" alt="Booking" />
          <div>
            <p className="font-semibold text-scooter-500 text-sm">
              Online Appointment
            </p>
            <span className="text-brand-dark font-bold">Book Now</span>
          </div>
        </div>

        <div className="flex gap-2">
          <img src="/clock.svg" alt="Support" />
          <div>
            <p className="font-semibold text-scooter-500 text-sm">Supports</p>
            <span className="text-brand-dark font-bold">Open Daily 9-5</span>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-50 flex flex-wrap text-white sm:justify-start sm:flex-nowrap w-full bg-brand-dark text-sm py-3">
        <nav className="max-w-[96rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between">
            <a
              className="flex-none text-xl font-semibold dark:text-white focus:outline-hidden focus:opacity-80"
              href="/"
              aria-label="Brand"
            >
              <img src="/tooth.svg" alt="Tooth Logo" className="size-16" />
            </a>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                id="hs-navbar-example-collapse"
                aria-expanded="false"
                aria-controls="hs-navbar-example"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-example"
              >
                <svg
                  className="hs-collapse-open:hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
          </div>
          <div
            id="hs-navbar-example"
            className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
            aria-labelledby="hs-navbar-example-collapse"
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              {navItems.map(({ name, path }, i) => (
                <a
                  key={i}
                  className="font-medium  hover:text-scooter-500 transition duration-200 focus:outline-hidden "
                  href={path}
                >
                  {name}
                </a>
              ))}
              <button
                type="button"
                className="cursor-pointer py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Appointment
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
