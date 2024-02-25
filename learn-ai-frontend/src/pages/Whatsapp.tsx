import Scan from "../assets/qr cropped 1.png";
import { UserIcon, ClockIcon, LanguageIcon } from "@heroicons/react/24/outline";
import React from "react";
import mobileView from "../assets/whatsapp-pic.png";
function Whatsapp() {
  const features = [
    {
      name: "Personalised content",
      description:
        "BotsApp adapts to your learning style, providing tailored responses and suggestions based on your preferences and progress",
      icon: UserIcon,
    },
    {
      name: "Round-the-Clock Availability",
      description:
        "Experience uninterrupted support and service with our round-the-clock availability, ensuring your needs are met 24/7",
      icon: ClockIcon,
    },
    // language with our multi-lingual capabilities.
    {
      name: "Multilingual support",
      description:
        "BotsApp understands diversity. Enjoy learning in your preferred language with our multi-lingual capabilities.",
      icon: LanguageIcon,
    },
  ];
  return (
    <div className="bg-custom-bg bg-repeat  px-10 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row text-white h-screen items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex flex-col justify-center sm:w-1/2 gap-6 sm:gap-5">
          <h1 className="text-5xl font-bold">Education at Your Fingertips!</h1>
          <p className="w-[500px] text-md">
            Bringing learning to your fingertips at your convenience through
            your favorite app - WhatsApp
          </p>
          <button className=" md:w-1/2 lg:w-1/3 w-full items-center justify-center hover:opacity-75 p-3 font-bold text-lg rounded-md bg-custom-main mb-5">
            Scan Now
          </button>
        </div>
        <div className="w-full sm:w-[300px] h-[300px] shadow-card-shadow mt-4">
          <img src={Scan} alt="Scan" className="w-full h-full " />
        </div>
      </div>
      {/* <div className=" text-white px-40">
        <div className="text-white text-3xl font-bold my-10 flex justify-center">
          INTRODUCING BOTSAPP
        </div>
        <div className="text-white mb-6 text-xl">
          Access all of our powerful features directly through WhatsApp in your
          phone.
        </div>
        <div className="text-white mb-20 text-xl">
          Experience learning through natural, conversational interactions. With
          BotsApp, you can ask questions, seek clarification, and engage in
          dynamic discussions—all within the familiar WhatsApp chat interface.
        </div>
        <div className="w-full flex justify-center">
          <img src={mobileView} />
        </div>
      </div> 
      <div className="px-40 pb-40 pt-20 ">
        <div className="text-3xl text-white font-bold my-8 flex justify-center">
          Integrating learning in whatsapp
        </div>
        <div className="text-white my-10 text-xl">
          Whether you're on the bus, waiting in line, or simply relaxing at
          home, your learning journey is always with you. Break free from
          traditional constraints and embrace the flexibility of learning on
          your terms.
        </div>
        <div className="flex space-x-10 mt-20">
          <div className="w-1/3 bg-[#1E1E20] border border-3 border-[#1E1E20] rounded-lg shadow-md shadow-gray-500/50 translate-x-0 hover:translate-y-2 transition duration-300 ease-in-out">
            <div className="w-full p-6">
              <div className="text-white mb-3 font-bold text-lg text-[#6F53FF]">
                Personalised content
              </div>
              <div className="text-white">
                BotsApp adapts to your learning style, providing tailored
                responses and suggestions based on your preferences and
                progress.
              </div>
            </div>
          </div>
          <div className="w-1/3  bg-[#1E1E20] border border-3 border-[#1E1E20] rounded-lg shadow-md shadow-gray-500/50 translate-x-0 hover:translate-y-2 transition duration-300 ease-in-out">
            <div className="w-full p-6 ">
              <div className="text-white font-bold text-lg text-[#6F53FF]">
                Round-the-Clock Availability
              </div>
              <div className="text-white"></div>
            </div>
          </div>
          <div className="w-1/3  bg-[#1E1E20] border border-3 border-[#1E1E20] rounded-lg shadow-md shadow-gray-500/50 translate-x-0 hover:translate-y-2 transition duration-300 ease-in-out">
            <div className="w-full p-6">
              <div className="text-white mb-3 font-bold text-lg text-[#6F53FF]">
                Multilingual support
              </div>
              <div className="text-white">
                BotsApp understands diversity. Enjoy learning in your preferred
                language with our multi-lingual capabilities.
              </div>
            </div>
          </div>
        </div>
      </div>*/}
      {/* <div className="bg-[#1E1E20] py-24 sm:py-32"> */}
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-custom-main sm:text-4xl">
            Integrating learning in whatsapp
          </p>
          <p className="mt-6 text-md leading-8 text-white">
            Whether you're on the bus, waiting in line, or simply relaxing at
            home, your learning journey is always with you. Break free from
            traditional constraints and embrace the flexibility of learning on
            your terms.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-12">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative pl-16 bg-[#1E1E20] p-8 rounded-md"
              >
                <dt className="text-base font-bold text-lg leading-7 text-custom-main pl-3">
                  <div className="absolute left-3 top-8 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white pl-3">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Whatsapp;
