import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Homepage from "../assets/HomePage.png";
import Scales from "../assets/scales.png";
import { Reveal } from "../components/Reveal";
import SparklesBackground from "../components/Sparklesbackground";

export default function Home() {
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
          <div className="mx-auto max-w-2xl py-20 ">
            <div className="text-center">
              <Reveal>
                <h1 className="text-4xl font-bold tracking-tight text-gray-200 text-opacity-70 h-[9rem] sm:text-6xl">
                  Tired of Clickbaits? We've got your back.
                </h1>
              </Reveal>
              <Reveal>
                <p className=" text-lg leading-8 text-gray-300 mb-6 text-opacity-70">
                  Say goodbye to generic recommendations and embrace a platform
                  that understands your unique interests.
                </p>
              </Reveal>
              <div className="relative">
                <div className="w-auto relative flex justify-center items-center">
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
      <div className="relative flex justify-center items-center h-screen bg-custom-bg">
        <img
          src={Scales}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute flex justify-center items-start mt-auto mx-30 lg:max-w-3xl sm:max-w-2xl xs:max-w-xl">
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
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" > 
      </iframe>
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
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" > 
      </iframe>
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
      {/* <div className="bg-custom-bg relative">
        <div className="pt-20 pb-40 relative">
          <div className="h-[25rem] relative z-10 pl-20 pr-20">
            <img
              src={Scales}
              alt="background"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute left-0 top-0 flex flex-col items-start justify-center h-full lg:pl-20 lg:pr-20 pl-10 pr-10">
              <div className="text-4xl lg:text-5xl md:w-[40rem] text-[#CED1D8] mb-12 font-bold z-10">
                Start your smarter learning journey today!
              </div>
              <div className="relative">
                <div className="w-auto relative">
                  <SparklesBackground />
                  <button className="py-3 px-8 bg-[#6F53FF] flex text-lg text-white font-semibold rounded-lg z-10">
                    Start Now
                    <svg
                      width="28px"
                      height="28px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
                    >
                      <path
                        d="M7 17L17 7M17 7H8M17 7V16"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

// function Home() {
//   const [isContentLoaded, setIsContentLoaded] = useState(false);
//   useEffect(() => {
//     setTimeout(() => {
//       setIsContentLoaded(true);
//     }, 1000);
//   }, []);

//   return (
//     <>
//       <div className="bg-custom-bg">
//         <div className="relative isolate px-6 pt-10 lg:px-8">
//           <div className="mx-auto max-w-2xl py-20 ">
//             <div className="text-center">
//               <Reveal>
//                 <h1 className="text-4xl font-bold tracking-tight text-gray-200 text-opacity-70 h-[9rem] sm:text-6xl">
//                   Tired of Clickbaits? We've got your back.
//                 </h1>
//               </Reveal>
//               <Reveal>
//                 <p className=" text-lg leading-8 text-gray-300 mb-6 text-opacity-70">
//                   Say goodbye to generic recommendations and embrace a platform
//                   that understands your unique interests.
//                 </p>
//               </Reveal>
//               <div className="relative">
//                 <div className="w-auto relative flex justify-center items-center">
//                   {isContentLoaded && <SparklesBackground />}
//                   <Reveal>
//                     <button
//                       className="relative z-10 rounded-xl bg-indigo-600 px-12 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 tra"
//                       role="button"
//                     >
//                       Get Started
//                     </button>
//                   </Reveal>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* section-2 */}
//       <div className="relative flex justify-center items-center h-screen bg-custom-bg">
//         <img
//           src={Scales}
//           alt="background"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute flex justify-center items-start mt-auto mx-30 lg:max-w-3xl sm:max-w-2xl xs:max-w-xl">
//           <img
//             src={Homepage}
//             alt="Image"
//             className="border-8 border-gray-300 border-opacity-20 rounded-tl-3xl rounded-tr-3xl w-auto h-auto mt-24"
//           />
//         </div>
//       </div>
//       {/* <div className="bg-custom-bg h-screen flex justify-center items-center relative">
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//         <img src={Scales} alt="Image Scales"className="absolute top-0 left-0 w-full h-full object-cover"/>
//         <div className="absolute pt-10 pb-0 px-20 w-full h-full">
//           <img src={Homepage} alt="Image" className="border-2 border-gray-300 border-opacity-50 rounded-tl-3xl rounded-tr-3xl  md:w-full h-full " />
//         </div>
//       </div>
//     </div> */}
//       {/* section-3 */}
//       <div className="py-20 lg:py-40 bg-custom-bg border-black">
//         <div className="hidden md:flex w-full h-full pl-10 lg:pl-20 gap-x-8">
//           <div className="flex flex-col justify-between md:w-1/2 md:pr-10 gap-y-6">
//             <div className="mb-6">
//               <h1 className="text-3xl md:text-4xl font-bold text-white">
//                 Start your smarter learning journey today
//               </h1>
//             </div>
//             <div className="w-full ">
//               <div>
//                 <div className="font-bold text-xl text-white mb-4">
//                   AI guided learning recommmendation
//                 </div>
//                 <div className="text-lg text-white">
//                   Tailoring content to your interests for a more personalized
//                   and enriching experience
//                 </div>
//                 <button className="text-base flex justify-center items-center font-semibold leading-7 text-indigo-600 ">
//                   Explore more{" "}
//                   <svg
//                     className="mt-1"
//                     width="14px"
//                     height="14px"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//                     <g
//                       id="SVGRepo_tracerCarrier"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke="#CCCCCC"
//                       stroke-width="0.048"
//                     ></g>
//                     <g id="SVGRepo_iconCarrier">
//                       {" "}
//                       <path
//                         d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
//                         stroke="#6F53FF"
//                         stroke-width="1.5"
//                         stroke-miterlimit="10"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>{" "}
//                     </g>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//             <div className="w-full">
//               <div>
//                 <div className="font-bold text-xl text-white mb-4">
//                   Whatsapp integration
//                 </div>
//                 <div className="text-lg text-white">
//                   Bringing learning to your fingertips at oyur cinvenience
//                   through your favourite app-WhatsApp
//                 </div>
//                 <button className="text-base flex justify-center items-center font-semibold leading-7 text-indigo-600 ">
//                   Explore more{" "}
//                   <svg
//                     className="mt-1"
//                     width="14px"
//                     height="14px"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//                     <g
//                       id="SVGRepo_tracerCarrier"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke="#CCCCCC"
//                       stroke-width="0.048"
//                     ></g>
//                     <g id="SVGRepo_iconCarrier">
//                       {" "}
//                       <path
//                         d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
//                         stroke="#6F53FF"
//                         stroke-width="1.5"
//                         stroke-miterlimit="10"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>{" "}
//                     </g>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//             <div className="w-full">
//               <div>
//                 <div className="font-bold text-xl text-white mb-4">
//                   Boost your learning pace
//                 </div>
//                 <div className="text-lg text-white">
//                   Simply paste your URL and receive a quik summary, optimizing
//                   your understanding with ease
//                 </div>
//                 <button className="text-base flex justify-center items-center font-semibold leading-7 text-indigo-600 ">
//                   Explore more{" "}
//                   <svg
//                     className="mt-1"
//                     width="14px"
//                     height="14px"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//                     <g
//                       id="SVGRepo_tracerCarrier"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke="#CCCCCC"
//                       stroke-width="0.048"
//                     ></g>
//                     <g id="SVGRepo_iconCarrier">
//                       {" "}
//                       <path
//                         d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
//                         stroke="#6F53FF"
//                         stroke-width="1.5"
//                         stroke-miterlimit="10"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>{" "}
//                     </g>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="w-full md:w-1/2">
//             <div className="bg-gray-300 h-full overflow-hidden rounded-tl-xl rounded-bl-xl">
//               <div className="flex justify-center items-center h-full"></div>
//             </div>
//           </div>
//         </div>

//         {/* For smaller screens */}
//         <div className="md:hidden">
//           <div className="grid grid-cols-1 gap-y-6">
//             <div className="mb-6 p-10">
//               <h1 className="text-3xl md:text-4xl font-bold text-white">
//                 Start your smarter learning journey today
//               </h1>
//             </div>
//             <div className="bg-gray-300 h-96 overflow-hidden ">
//               <div className="flex justify-center items-center h-full">
//                 <iframe
//                   title="Video"
//                   className="w-full h-full border-none"
//                   src="https://www.youtube.com/embed/your-video-id"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             </div>
//             <div className="p-10 space-y-8">
//               <div className="w-full">
//                 <div>
//                   <div className="font-bold text-lg text-white mb-4">
//                     AI guided learning recommmendation
//                   </div>
//                   <div className="text-lg text-white">
//                     Tailoring content to your interests for a more personalized
//                     and enriching experience
//                   </div>
//                   <button className="text-base flex justify-center items-center font-semibold leading-7 text-indigo-600 ">
//                     Explore more{" "}
//                     <svg
//                       className="mt-1"
//                       width="14px"
//                       height="14px"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//                       <g
//                         id="SVGRepo_tracerCarrier"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke="#CCCCCC"
//                         stroke-width="0.048"
//                       ></g>
//                       <g id="SVGRepo_iconCarrier">
//                         {" "}
//                         <path
//                           d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
//                           stroke="#6F53FF"
//                           stroke-width="1.5"
//                           stroke-miterlimit="10"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                         ></path>{" "}
//                       </g>
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//               <div className="w-full">
//                 <div>
//                   <div className="font-bold text-lg text-white mb-4">
//                     Whatsapp integration
//                   </div>
//                   <div className="text-lg text-white">
//                     Bringing learning to your fingertips at oyur cinvenience
//                     through your favourite app-WhatsApp
//                   </div>
//                   <button className="text-base flex justify-center items-center font-semibold leading-7 text-indigo-600 ">
//                     Explore more{" "}
//                     <svg
//                       className="mt-1"
//                       width="14px"
//                       height="14px"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//                       <g
//                         id="SVGRepo_tracerCarrier"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke="#CCCCCC"
//                         stroke-width="0.048"
//                       ></g>
//                       <g id="SVGRepo_iconCarrier">
//                         {" "}
//                         <path
//                           d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
//                           stroke="#6F53FF"
//                           stroke-width="1.5"
//                           stroke-miterlimit="10"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                         ></path>{" "}
//                       </g>
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//               <div className="w-full">
//                 <div>
//                   <div className="font-bold text-lg text-white mb-4">
//                     Boost your learning pace
//                   </div>
//                   <div className="text-lg text-white">
//                     Simply paste your URL and receive a quik summary, optimizing
//                     your understanding with ease
//                   </div>
//                   <button className="text-base flex justify-center items-center font-semibold leading-7 text-indigo-600 ">
//                     Explore more{" "}
//                     <svg
//                       className="mt-1"
//                       width="14px"
//                       height="14px"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//                       <g
//                         id="SVGRepo_tracerCarrier"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke="#CCCCCC"
//                         stroke-width="0.048"
//                       ></g>
//                       <g id="SVGRepo_iconCarrier">
//                         {" "}
//                         <path
//                           d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
//                           stroke="#6F53FF"
//                           stroke-width="1.5"
//                           stroke-miterlimit="10"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                         ></path>{" "}
//                       </g>
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* section-4 */}
//       <div className="bg-custom-bg relative">
//         <div className="pt-20 pb-40 relative">
//           <div className="h-[25rem] relative z-10 pl-20 pr-20">
//             <img
//               src={Scales}
//               alt="background"
//               className="absolute inset-0 w-full h-full object-cover z-0"
//             />
//             <div className="absolute left-0 top-0 flex flex-col items-start justify-center h-full lg:pl-20 lg:pr-20 pl-10 pr-10">
//               <div className="text-4xl lg:text-5xl md:w-[40rem] text-[#CED1D8] mb-12 font-bold z-10">
//                 Start your smarter learning journey today!
//               </div>
//               <div className="relative">
//                 <div className="w-auto relative">
//                   <SparklesBackground />
//                   <button className="py-3 px-8 bg-[#6F53FF] flex text-lg text-white font-semibold rounded-lg z-10">
//                     Start Now
//                     <svg
//                       width="28px"
//                       height="28px"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       stroke="#ffffff"
//                     >
//                       <path
//                         d="M7 17L17 7M17 7H8M17 7V16"
//                         stroke="#ffffff"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       ></path>
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Home;
