import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PromptChat from "../components/PromptChat";

function DocsChat() {
  const location = useLocation();
  const uploadedFile: File | undefined = location.state?.uploadedFile;
  const [transcript, setTranscript] = useState<string>("");

  useEffect(() => {
    fetchTranscript();
  }, [uploadedFile]);

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
        // console.log(transcript);
      } catch (error) {
        console.error("Error fetching transcript:", (error as Error).message);
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-[#1E1E20]">
      <div className="w-full flex h-screen  bg-[#363435]">
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
      <div className="flex gap-8 w-full px-8">
        <div className=" w-full flex justify-between flex-col p-3">
          <PromptChat text={transcript} />
        </div>
      </div>
    </div>
  );
}

export default DocsChat;
