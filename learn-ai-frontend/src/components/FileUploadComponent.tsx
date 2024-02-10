import React, { useRef, ChangeEvent } from "react";
import Image from "../assets/Import_Pdf.png";

interface FileUploadComponentProps {
  onFileUpload: (file: File) => void; // Callback function to handle file upload
}

const FileUploadComponent: React.FC<FileUploadComponentProps> = ({
  onFileUpload,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Function to handle file input change
  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      // Pass the uploaded file to the parent component
      onFileUpload(file);
    }
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileInputChange}
      />
      <div
        className="rounded-full sm:h-20 sm:w-20 h-10 w-10 bg-black flex justify-center items-center cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <img src={Image} className="sm:h-10 sm:w-10 h-6 w-6" alt="Import PDF" />
      </div>
    </>
  );
};

export default FileUploadComponent;
