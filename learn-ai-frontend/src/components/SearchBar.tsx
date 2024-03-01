import React, { FormEvent, useState } from "react";
// import { useNavigate } from "react-router-dom";
// interface SearchBarProps
//   onVideoLoad: (videoDetails: VideoDetails, transcript: string) => void;
// }

// interface TransriptResponse {
//   transcript: string;
//   id: string;
// }

interface SearchBarProps {
  onVideoLoad: (text: string, id: string) => void;
}

function SearchBar({ onVideoLoad }: SearchBarProps) {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  // const [videoId, setVideoId] = useState("");
  // const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
  // const [transcript, setTranscript] = useState<string>("");
  // const navigate = useNavigate();
  const loadVideo = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Call your API to get transcript
      const transcriptResponse: { text: string; id: string } =
        await fetchTranscript(youtubeUrl);
      console.log(transcriptResponse);

      // Call YouTube Data API to get additional details
      // const videoDetails = await fetchVideoDetails(transcriptResponse.id);

      // setVideoDetails(videoDetails);
      // console.log(videoDetails);
      // setTranscript(transcriptResponse.text);
      // setVideoId(transcriptResponse.id);
      onVideoLoad(transcriptResponse.text, transcriptResponse.id);
      // navigate("/videochat");
    } catch (error) {
      console.error("Error loading video:", error);
      // setVideoDetails(null);
      // setTranscript("");
    }
  };

  const fetchTranscript = async (
    videoUrl: string
  ): Promise<{ text: string; id: string }> => {
    const response = await fetch(
      "https://learnai-api.vercel.app/api/AI/getTranscript",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          videoUrl,
        }),
      }
    );

    const data = await response.json();

    // Ensure that the response has both 'text' and 'id' properties
    if ("text" in data && "id" in data) {
      return { text: data.text, id: data.id };
    } else {
      throw new Error("Invalid response structure from the API");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update youtubeUrl state as the user types
    setYoutubeUrl(event.target.value);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <form
        className="w-1/2 mb-10 flex items-center justify-center"
        onSubmit={loadVideo}
      >
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Paste link here..."
            required
            value={youtubeUrl}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="text-white flex gap-2 absolute end-2.5 bottom-2.5 bg-custom-main hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
            <svg
              width="22"
              height="22"
              viewBox="0 0 20 20"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1274 1.01957V1.01957C14.4612 3.69008 16.5647 5.79356 19.2352 6.12736V6.12736V6.12736C16.5647 6.46118 14.4612 8.56466 14.1274 11.2352V11.2352V11.2352C13.7936 8.56471 11.6901 6.46117 9.01968 6.12733V6.12733V6.12733C11.6901 5.79355 13.7936 3.69001 14.1274 1.01957V1.01957Z"
                fill="white"
              ></path>
              <path
                d="M4.5689 6.01362V6.01362C4.80125 7.87244 6.2654 9.33656 8.12422 9.5689V9.5689V9.5689C6.2654 9.80126 4.80125 11.2654 4.56889 13.1242V13.1242V13.1242C4.33655 11.2654 2.87245 9.80126 1.01368 9.56889H1.01368V9.56889C2.87245 9.33656 4.33655 7.87239 4.5689 6.01362V6.01362Z"
                fill="white"
              ></path>
              <path
                d="M9.67949 13.0102V13.0102C9.85394 14.4058 10.9532 15.5051 12.3488 15.6795V15.6795V15.6795C10.9532 15.854 9.85394 16.9533 9.67949 18.3489V18.3489V18.3489C9.50504 16.9533 8.4058 15.854 7.01023 15.6795V15.6795V15.6795C8.4058 15.5051 9.50505 14.4058 9.67949 13.0102V13.0102Z"
                fill="white"
              ></path>
            </svg>
          </button>
        </div>
      </form>
      {/* {transcript && <YouTubeVideoPlayer videoId={videoId} />} */}
    </div>
  );
}

export default SearchBar;
