import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PromptChat from "../components/PromptChat";

function DocsChat() {
  const location = useLocation();
  const uploadedFile: File | undefined = location.state?.uploadedFile;
  const [transcript, setTranscript] = useState<string>("");

  useEffect(() => {
    const fetchTranscript = async () => {
      if (uploadedFile) {
        try {
          const formData = new FormData();
          formData.append("pdfFile", uploadedFile);

          const response = await fetch(
            "https://learnai-chat-with-pdf.vercel.app/PDF/generate-transcript",
            {
              method: "POST",
              body: formData,
            }
          );

          if (!response.ok) {
            throw new Error(
              `Error fetching transcript. Status: ${response.status}`
            );
          }

          const data = await response.json();
          console.log(data.pdfText);
          setTranscript(data.pdfText);
        } catch (error) {
          console.error("Error fetching transcript:", (error as Error).message);
        }
      }
    };

    fetchTranscript();
  }, [uploadedFile]);
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
          <PromptChat text={transcript} />
        </div>
      </div>
    </div>
  );
}

export default DocsChat;
