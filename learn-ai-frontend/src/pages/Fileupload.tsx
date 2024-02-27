import { useState, useEffect, useRef, ChangeEvent } from "react";
// import FileUploadComponent from "../components/FileUploadComponent";
import { useNavigate } from "react-router-dom";
import Image from "../assets/Import_Pdf.png";

const FileUpload = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Function to handle file upload
  // const handleFileUpload = (file: File) => {
  //   if (file.size > 5 * 1024 * 1024) {
  //     alert("File too large. Please upload a file less than 5MB.");
  //   } else {
  //     setUploadedFile(file);
  //   }

  //   // Navigate to the second page after file upload
  //   // navigate("/docschat", { state: { uploadedFile: file } });
  // };
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File too large. Please upload a file less than 5MB.");
      } else {
        setUploadedFile(file);
      }
    }
    // if (file?file.size > 5 * 1024 * 1024) {
    //   alert("File too large. Please upload a file less than 5MB.");
    // } else {
    //   setUploadedFile(file);
    // }
  };

  useEffect(() => {
    if (uploadedFile) {
      console.log(uploadedFile);

      // Navigate to the second page after file upload
      navigate("/docschat", { state: { uploadedFile } });
    }
  }, [uploadedFile]);

  return (
    <div className="bg-custom-bg">
      <div className="relative px-6 pt-10 lg:px-8">
        <div className="mx-auto max-w-2xl pt-8 pb-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl pb-5">
              Books, Handwritten Notes, Articles, Pdfs...
            </h1>
            <p className="w-full text-xl flex text-center leading-8 text-gray-300 mb-6 text-opacity-70 pb-5">
              Throw/Dump any Text Material Here, and get a ready-to-chat
              personal Teaching Assistant
            </p>
            <div className="bg-[#6F53FF] px-20 py-10 rounded-2xl w-3/4 sm:w-auto mx-auto flex justify-center items-center">
              {/* <FileUploadComponent onFileUpload={handleFileUpload} /> */}
              <>
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <div
                  className="rounded-full sm:h-20 sm:w-20 h-10 w-10 bg-black flex justify-center items-center cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <img
                    src={Image}
                    className="sm:h-10 sm:w-10 h-6 w-6"
                    alt="Import PDF"
                  />
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FileUpload;
