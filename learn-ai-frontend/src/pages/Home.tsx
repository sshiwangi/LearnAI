import { Link } from "react-router-dom";
import Homepage from "../assets/HomePage.png";
import Scales from "../assets/scales.png";
import { Reveal } from "../components/Reveal";
import useCustomStyle from "../hooks/useCustomStyle";

export default function Home() {
  const shouldApplyCustomStyle = useCustomStyle();
  //   const [isContentLoaded, setIsContentLoaded] = useState(false);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setIsContentLoaded(true);
  //     }, 1000);
  //   }, []);
  return (
    <>
      <div className="bg-custom-bg">
        <div className="relative isolate px-6 pt-10 lg:px-8">
          <div className="mx-auto max-w-lg sm:max-w-2xl lg:max-w-5xl py-20 ">
            <div className="text-center flex flex-col gap-8 lg:gap-10">
              <Reveal>
                <h1
                  className={`${
                    shouldApplyCustomStyle ? "custom-style" : "justify-center"
                  } text-5xl font-bold tracking-tight flex text-gray-200 sm:text-6xl lg:text-8xl`}
                >
                  Tired of Clickbaits? We've got your back.
                </h1>
              </Reveal>
              <Reveal>
                <p
                  className={`${
                    shouldApplyCustomStyle ? "custom-style" : " "
                  } text-xl mx-auto max-w-2xl text-gray-100 mb-2`}
                >
                  Say goodbye to generic recommendations and embrace a platform
                  that understands your unique interests.
                </p>
              </Reveal>
              <div className="relative">
                <div
                  className={`${
                    shouldApplyCustomStyle ? "custom-btn-style" : ""
                  } w-auto relative flex justify-center items-center`}
                >
                  {/* {isContentLoaded && <SparklesBackground />} */}
                  <Reveal>
                    <Link to="/roadmap">
                      <button
                        className="relative z-10 rounded-xl bg-indigo-600 px-12 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 tra"
                        role="button"
                      >
                        Get Started
                      </button>
                    </Link>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center bg-custom-bg">
        {/* <img
          src={Scales}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        /> */}
        <div
          style={{ maxWidth: "1200px", minWidth: "300px" }}
          className="flex p-4 justify-center items-start mt-auto mx-30 lg:max-w-3xl sm:max-w-2xl xs:max-w-xl"
        >
          <img
            src={Homepage}
            alt="Image"
            className="border-8 border-gray-300 border-opacity-20 rounded-tl-3xl rounded-tr-3xl w-auto h-auto mt-24"
          />
        </div>
      </div>
      <div className="py-20 lg:py-40 bg-custom-bg border-black">
        <div className="hidden md:flex w-full h-full pl-10 lg:pl-20 gap-x-8">
          <div className="flex flex-col justify-between md:w-1/2 md:pr-10 gap-y-6">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Start your smarter learning journey today
              </h1>
            </div>
            <div className="w-full ">
              <div>
                <div className="font-bold text-xl text-white mb-4">
                  AI guided learning recommmendation
                </div>
                <div className="text-lg text-white">
                  Tailoring content to your interests for a more personalized
                  and enriching experience
                </div>
                <button className="text-base flex justify-center items-center font-semibold leading-7 text-indigo-600 ">
                  Explore more{" "}
                  <svg
                    className="mt-1"
                    width="14px"
                    height="14px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="#CCCCCC"
                      stroke-width="0.048"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
                        stroke="#6F53FF"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-full">
              <div>
                <div className="font-bold text-xl text-white mb-4">
                  Whatsapp integration
                </div>
                <div className="text-lg text-white">
                  Bringing learning to your fingertips at oyur cinvenience
                  through your favourite app-WhatsApp
                </div>
                <button className="text-base flex justify-center items-center font-semibold leading-7 text-indigo-600 ">
                  Explore more{" "}
                  <svg
                    className="mt-1"
                    width="14px"
                    height="14px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="#CCCCCC"
                      stroke-width="0.048"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
                        stroke="#6F53FF"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-full">
              <div>
                <div className="font-bold text-xl text-white mb-4">
                  Boost your learning pace
                </div>
                <div className="text-lg text-white">
                  Simply paste your URL and receive a quik summary, optimizing
                  your understanding with ease
                </div>
                <button className="text-base flex justify-center items-center font-semibold leading-7 text-indigo-600 ">
                  Explore more{" "}
                  <svg
                    className="mt-1"
                    width="14px"
                    height="14px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="#CCCCCC"
                      stroke-width="0.048"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
                        stroke="#6F53FF"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-gray-300 h-full overflow-hidden rounded-tl-xl rounded-bl-xl">
              <div className="flex justify-center items-center h-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/lhgEQvd4jpU?si=QFfKgPC3VdgvQFPw"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="grid grid-cols-1 gap-y-6">
            <div className="mb-6 p-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Start your smarter learning journey today
              </h1>
            </div>
            <div className="bg-gray-300 h-96 overflow-hidden ">
              <div className="flex justify-center items-center h-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/lhgEQvd4jpU?si=QFfKgPC3VdgvQFPw"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
            <div className="p-10 space-y-8">
              <div className="w-full">
                <div>
                  <div className="font-bold text-lg text-white mb-4">
                    AI guided learning recommmendation
                  </div>
                  <div className="text-lg text-white">
                    Tailoring content to your interests for a more personalized
                    and enriching experience
                  </div>
                  <button className="text-base flex justify-center items-center font-semibold leading-7 text-indigo-600 ">
                    Explore more{" "}
                    <svg
                      className="mt-1"
                      width="14px"
                      height="14px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke="#CCCCCC"
                        stroke-width="0.048"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
                          stroke="#6F53FF"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="w-full">
                <div>
                  <div className="font-bold text-lg text-white mb-4">
                    Whatsapp integration
                  </div>
                  <div className="text-lg text-white">
                    Bringing learning to your fingertips at oyur cinvenience
                    through your favourite app-WhatsApp
                  </div>
                  <button className="text-base flex justify-center items-center font-semibold leading-7 text-indigo-600 ">
                    Explore more{" "}
                    <svg
                      className="mt-1"
                      width="14px"
                      height="14px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke="#CCCCCC"
                        stroke-width="0.048"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
                          stroke="#6F53FF"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="w-full">
                <div>
                  <div className="font-bold text-lg text-white mb-4">
                    Boost your learning pace
                  </div>
                  <div className="text-lg text-white">
                    Simply paste your URL and receive a quik summary, optimizing
                    your understanding with ease
                  </div>
                  <button className="text-base flex justify-center items-center font-semibold leading-7 text-indigo-600 ">
                    Explore more{" "}
                    <svg
                      className="mt-1"
                      width="14px"
                      height="14px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke="#CCCCCC"
                        stroke-width="0.048"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
                          stroke="#6F53FF"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
