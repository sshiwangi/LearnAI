import React from "react";
import Scan from "../assets/whatsapp.jpeg";
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
          <button className=" md:w-1/2 lg:w-1/3 w-full items-center justify-center p-3 font-bold text-lg rounded-md bg-custom-main mb-5">
            Scan Now
          </button>
        </div>
        <div className="w-full sm:w-[300px] h-[300px] shadow-card-shadow mt-4">
          <img src={Scan} alt="Scan" className="w-full h-full " />
        </div>
      </div>
    </div>
  );
}

export default Whatsapp;
