import React, { useState, useEffect } from "react";
// import Flag from '../assets/flag.png';
import YouTubeVideoPlayer from "../components/YoutubeVideoPlayer";
import { fetchYouTubeTranscript } from "../utils/Transcript";
import { useNavigate } from "react-router-dom";
import roadmapIcon from "../assets/Arrow 1.png";

interface Video {
  videoId: string;
  videoText: string;
  url: string;
}

const Roadmap = () => {
  const [videoText, setVideoText] = useState<string>("");
  const [videoId, setVideoId] = useState<string>("");

  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [showRoadmapHeading, setShowRoadmapHeading] = useState(false);
  const navigate = useNavigate();

  const handleChatClick = async (videoUrl: string) => {
    try {
      // Fetch transcript using your fetchYouTubeTranscript function
      const { transcriptText, videoId } = await fetchYouTubeTranscript(
        videoUrl
      );
      // Set the transcript text and show VideoChat component
      console.log(transcriptText);
      setVideoText(transcriptText);
      setVideoId(videoId);
      console.log(videoText);
      console.log(videoId);
      navigate(`/chatwithvideo?videourl=${encodeURIComponent(videoUrl)}`);
    } catch (error) {
      console.error("Error fetching transcript:", (error as Error).message);
      // Handle the error, you might want to display an error message to the user
    } finally {
      setLoading(false); // Set loading to false when the fetch is complete (success or error)
    }
  };

  const handleSearchClick = async () => {
    try {
      setLoading(true);
      // Make a POST request to the recommendation API
      const response = await fetch(
        "http://localhost:3000/youtube/recommend-videos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: searchInput,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Error fetching recommended videos. Status: ${response.status}`
        );
      }

      const recommendedVideosData = await response.json();
      console.log(recommendedVideosData);
      // Set the recommended videos array
      setRecommendedVideos(recommendedVideosData);
      setLoading(false);
      setShowRoadmapHeading(true);
    } catch (error) {
      console.error(
        "Error fetching recommended videos:",
        (error as Error).message
      );
      // Handle the error, you might want to display an error message to the user
    }
  };

  return (
    <div className=" bg-custom-bg text-white ">
      <div className=" pt-20 pb-5 flex justify-center items-center flex-col">
        <h1 className="text-6xl font-bold mb-4 flex text-center w-[600px] items-center">
          Your Ultimate Study Roadmap for Academic Excellence
        </h1>
        <div className="flex items-center pt-10 pb-5 w-full justify-center">
          <div className="w-1/2 flex items-center justify-center">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Type your query here"
              className="rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 border text-black border-gray-300 px-3 py-2 w-full mr-2"
            />
            <button
              onClick={handleSearchClick}
              type="submit"
              className="text-white flex gap-2 end-2.5 bottom-2.5 bg-custom-main hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
            {/* <button
              onClick={handleSearchClick}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Search
            </button> */}
          </div>
        </div>
      </div>

      <div className="w-full h-full">
        <div className="py-5 px-10 h-full ">
          {loading && (
            <div className="text-4xl text-center text-white font-bold">
              Loading...
            </div>
          )}
          <div className="w-full h-full flex flex-col gap-6 items-center">
            {showRoadmapHeading ? (
              <div className="text-custom-main rounded-md text-xl bg-[#1A2025] p-2">
                Here's the roadmap generated just for you.
              </div>
            ) : (
              ""
            )}

            {recommendedVideos.map((video: Video, index) => (
              <>
                <div>
                  <img src={roadmapIcon} alt="" />
                </div>
                <div className="text-custom-main rounded-full w-10 h-10 flex justify-center items-center text-xl bg-[#1A2025] p-2">
                  {index + 1}
                </div>

                <div key={index} className="flex w-full justify-center">
                  <YouTubeVideoPlayer
                    videoId={getVideoId(video.url)}
                    buttonStyle="text-white p-2 w-[640px] rounded-md text-xl font-bold bg-custom-main"
                    buttonEvent={() => handleChatClick(video.url)}
                  />
                  {/* <button
                  // onClick={() => handleChatClick(video.url)}
                  // className="text-white ml-4 p-2 h-[60px] w-[180px] rounded-full text-2xl font-bold bg-custom-main"
                  >
                    Chat
                  </button> */}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getVideoId = (videoUrl: string) => {
  const match = videoUrl.match(
    /(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|y\/)([^"&?\/\s]{11})/
  );
  return match ? match[1] : "";
};
export default Roadmap;
