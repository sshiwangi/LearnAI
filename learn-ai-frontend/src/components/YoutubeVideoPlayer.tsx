import React, { useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface videoProps {
  videoId: string;
  buttonStyle: string;
  buttonEvent: () => void;
}

function YouTubeVideoPlayer({ videoId, buttonStyle, buttonEvent }: videoProps) {
  return (
    <div className="bg-[#393738] gap-3 hover:bg-gray items-center p-4 h-full w-[660px] flex flex-col justify-center">
      <YouTube videoId={videoId} />
      <button className={buttonStyle} onClick={buttonEvent}>
        Chat
      </button>
    </div>
  );
}

export default YouTubeVideoPlayer;
