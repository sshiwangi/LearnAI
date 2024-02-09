import logoImage from "../assets/aicrafttube-log.png";
import linkedin from "../assets/LinkedIn 2.png";
import youtube from "../assets/YouTube.png";
import twitter from "../assets/TwitterX.png";
import instagram from "../assets/Instagram.png";

const gradientStyle = {
  background:
    "linear-gradient(177deg, #090909 2.48%, rgb(111, 83, 255) 181.92%)",
};

export default function Example() {
  return (
    <div
      className="relative isolate overflow-hidden sm:py-20 lg:py-20"
      style={gradientStyle}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-7">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white xs:pt-10 sm:text-3xl">
            Be the first to experience our innovations.
          </h2>
          <p className="mt-4 lg:text-lg sm:text-sm leading-8 text-gray-300">
            Stay ahead with the latest features! Subscribe now for timely
            updates
          </p>
          <div className="mt-6 flex max-w-md gap-x-4 mx-auto">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Subscribe
            </button>
          </div>
        </div>
        <footer className="py-8 ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-white flex flex-col items-center">
            <div className="flex justify-between max-w-5xl w-full">
              <div className="logo-items mr-4">
                <img src={logoImage} alt="Logo" className="w-24 mb-4" />
              </div>

              <div className="nav-items flex sm:space-x-5 lg:space-x-10 hidden sm:block">
                <a
                  href="#about"
                  className="hover:text-gray-400  text-lg text-white"
                >
                  About
                </a>
                <a
                  href="#features"
                  className="hover:text-gray-400 text-lg text-white"
                >
                  Features
                </a>
                <a
                  href="#contact"
                  className="hover:text-gray-400   text-lg text-white"
                >
                  Contact
                </a>
              </div>

              <div className="socials flex  space-x-6">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="Logo" className="w-5 h-5 mb-4" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={youtube} alt="Logo" className="w-5 h-5 mb-4" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt="Logo" className="w-5 h-5 mb-4" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="Logo" className="w-5 h-5 mb-4" />
                </a>
              </div>
            </div>
            <p className="mt-7 sm:mr-12 text-sm  text-white">
              {" "}
              Copyright &copy; 2024 | 100XDevs
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
