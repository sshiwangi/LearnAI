import React from "react";
import Scan from "../assets/whatsapp.jpeg";
import mobileView from "../assets/whatsapp-pic.png";
function Whatsapp() {
  return (
    <div className="bg-custom-bg bg-repeat bg-[url('https://fffuel.co/images/sssvg/grid.svg')] px-10 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row text-white h-screen items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex flex-col justify-center sm:w-1/2 gap-6 sm:gap-5">
          <h1 className="text-5xl font-bold">Education at Your Fingertips!</h1>
          <p>
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
      <div className=" text-white px-40">
          <div className="text-white text-3xl font-bold my-5 flex justify-center text-[#6F53FF]">
            INTRODUCING BOTSAPP
          </div>
          <div className="text-white mb-4 text-lg" >Access all of our powerful features directly through WhatsApp in your phone.</div>
          <div className="text-white mb-10 text-lg">Experience learning through natural, conversational interactions. With BotsApp, you can ask questions, seek clarification, and engage in dynamic discussions—all within the familiar WhatsApp chat interface.</div>
          <div className="w-full flex justify-center">
            <img src={mobileView}/></div>
      </div>
      <div className="px-40 pb-40 pt-10 ">
        <div className="text-3xl text-white font-bold my-5 flex justify-center text-[#6F53FF]">
          Integrating learning  in whatsapp
        </div>
        <div className="text-white my-5 text-lg">Whether you're on the bus, waiting in line, or simply relaxing at home, your learning journey is always with you. Break free from traditional constraints and embrace the flexibility of learning on your terms.</div>
        <div className="flex space-x-10 mt-10">
        <div className="w-1/3 bg-[#1E1E20] border border-3 border-[#1E1E20] rounded-lg shadow-md shadow-gray-500/50 translate-x-0 hover:translate-y-2 transition duration-300 ease-in-out">
          <div className="w-full p-6">
             <div className="text-white mb-3 font-bold text-lg text-[#6F53FF]">Personalised content</div>
             <div className="text-white">BotsApp adapts to your learning style, providing tailored responses and suggestions based on your preferences and progress.</div>
          </div>
        </div>
         <div className="w-1/3  bg-[#1E1E20] border border-3 border-[#1E1E20] rounded-lg shadow-md shadow-gray-500/50 translate-x-0 hover:translate-y-2 transition duration-300 ease-in-out">
          <div className="w-full p-6 ">
             <div className="text-white font-bold mb-3 text-lg text-[#6F53FF]">Round-the-Clock Availability</div>
             <div className="text-white">Experience uninterrupted support and service with our round-the-clock availability, ensuring your needs are met 24/7.</div>
          </div>
        </div>
         <div className="w-1/3  bg-[#1E1E20] border border-3 border-[#1E1E20] rounded-lg shadow-md shadow-gray-500/50 translate-x-0 hover:translate-y-2 transition duration-300 ease-in-out">
          <div className="w-full p-6">
             <div className="text-white mb-3 font-bold text-lg text-[#6F53FF]">Multilingual support</div>
             <div className="text-white">BotsApp understands diversity. Enjoy learning in your preferred language with our multi-lingual capabilities.</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Whatsapp;
