import React from "react";
import ReactDOM from "react-dom";
import logo from "../assets/aicrafttube-log.png";
import cross from "../assets/Multiply.png";

type LoginDialogueProps = {
  dialogueOpen: boolean;
  closeDialogue: () => void;
};

function LoginDialogue({ dialogueOpen, closeDialogue }: LoginDialogueProps) {
  if (!dialogueOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 bg-black opacity-30"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-custom-bg text-white p-5 rounded-md shadow-lg lg:h-1/2 lg:w-1/3 h-1/2 w-1/2">
          <button onClick={closeDialogue} className="flex justify-end w-full">
            <img src={cross} alt="" />
          </button>
          <div className="flex w-full gap-3 h-full flex-col justify-center items-center">
            <div className="flex flex-col items-center gap-3">
              <img src={logo} alt="" />
              <h1 className="text-bold text-2xl text-center">
                Sign in to AICraftTube
              </h1>
              <p className="text-gray-300">
                Login or register to start learning now
              </p>
            </div>
            <button className="bg-custom-main rounded-md px-6 py-2 text-lg">
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal-container")!
  );
}

export default LoginDialogue;
