import React, { useState, useEffect } from "react";
// import Flag from '../assets/flag.png';
import YouTubeVideoPlayer from "../components/YoutubeVideoPlayer";
import { fetchYouTubeTranscript } from "../utils/Transcript";
import { useNavigate } from "react-router-dom";



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
      <div className=" py-20 flex justify-center items-center flex-col">
        <h1 className="text-6xl font-bold mb-4 flex text-center w-[600px] items-center">
          Your Ultimate Study Roadmap for Academic Excellence
        </h1>
        <div className="flex items-center py-10 w-full justify-center">
          <div className="w-1/2 flex items-center justify-center">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Type your query here"
              className="border text-black border-gray-300 px-3 py-2 w-full mr-2"
            />
            <button
              onClick={handleSearchClick}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Search
            </button>
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
            {recommendedVideos.map((video: Video, index) => (
              <div
                key={index}
               className="flex gap-16 justify-between items-center"
              >
                <YouTubeVideoPlayer videoId={getVideoId(video.url)} />

                <button
                  onClick={() => handleChatClick(video.url)}
                  className="text-white ml-4 p-2 h-[60px] w-[180px] rounded-full text-2xl font-bold bg-custom-main"
                >
                  Chat
                </button>
              </div>
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
