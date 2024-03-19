import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Prompt from "../components/Prompt";
import YouTubeVideoPlayerVideoChat from "../components/YoutubeVideoPlayerVideoChat";

function VideoChat() {
  const [videoText, setVideoText] = useState<string>("");
  const [videoId, setVideoId] = useState<string>("");

  const handleVideoLoad = (text: string, id: string) => {
    setVideoText(text);
    setVideoId(id);
  };
  return (
    <div className="bg-custom-bg gap-10 p-10 flex flex-col items-center justify-center">
      {!videoText ? (
        <div className="text-center flex mt-[5rem] flex-col gap-5 w-full justify-center items-center">
          <h1 className="text-4xl sm:w-[400px] sm:text-5xl md:w-[600px] md:text-7xl lg:text-8xl lg:w-[800px] font-bold text-white">
            Video <span className="text-custom-main">Too Long? </span>
            <br />
            Didn't watch,{" "}
          </h1>
          <p className="text-gray-200 w-[300px] sm:w-[500px] mb-4 text-xl">
            No Worries, We have got your covered!
          </p>
          <SearchBar onVideoLoad={handleVideoLoad} />
        </div>
      ) : (
        <div className="flex flex-col xl:flex-row gap-7 xl:gap-3 w-full justify-center">
          <YouTubeVideoPlayerVideoChat videoId={videoId} />
          <div className="w-full xl:w-1/2 flex justify-center text-white">
            {/* Prompt container */}
            <Prompt text={videoText} id={videoId} />
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoChat;
