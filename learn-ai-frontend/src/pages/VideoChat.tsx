import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Prompt from "../components/Prompt";
import YouTubeVideoPlayer from "../components/YoutubeVideoPlayer";

function VideoChat() {
  const [videoText, setVideoText] = useState<string>("");
  const [videoId, setVideoId] = useState<string>("");

  const handleVideoLoad = (text: string, id: string) => {
    setVideoText(text);
    setVideoId(id);
  };
  return (
    <div className="bg-custom-bg gap-10 py-8 flex flex-col items-center justify-center">
      {!videoText ? (
        <div className="text-center flex mt-[5rem] flex-col gap-5 w-full justify-center items-center">
          <h1 className="text-8xl w-[700px] font-bold text-white">
            Boost Your <span className="text-custom-main"> Learning Pace</span>
          </h1>
          <p className="text-gray-200 w-[500px] mb-4 text-xl">
            Simply paste any URL and receive a quick summary, optimizing your
            understanding with ease.
          </p>
          <SearchBar onVideoLoad={handleVideoLoad} />
        </div>
      ) : (
        <div>
          <YouTubeVideoPlayer videoId={videoId} />
          <div className="w-full flex justify-center text-white">
            {/* Prompt container */}
            <Prompt text={videoText} id={videoId} />
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoChat;
