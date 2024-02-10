import { useLocation } from "react-router-dom";
import Prompt from "../components/Prompt";

function DocsChat() {
  const location = useLocation();
  const uploadedFile: File | undefined = location.state?.uploadedFile;

  return (
    <div className="flex bg-[#1E1E20]">
      <div className="w-full flex flex-col h-screen items-center justify-between bg-[#363435]">
        <div className="py-10 px-10 w-full">
          {uploadedFile && (
            <embed
              src={URL.createObjectURL(uploadedFile)}
              type="application/pdf"
              width="100%"
              height="600px"
            />
          )}
        </div>
      </div>
      <div className="flex mt-10 gap-8 w-full px-8">
        <div className=" w-full flex justify-between flex-col p-3">
          <div></div>
          <Prompt text={"Chat with pdf"} id={""} />
        </div>
      </div>
    </div>
  );
}

export default DocsChat;
