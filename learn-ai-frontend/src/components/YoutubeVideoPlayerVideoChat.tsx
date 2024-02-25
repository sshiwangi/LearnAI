import React, { useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface videoProps {
  videoId: string;
}

function YouTubeVideoPlayerVideoChat({ videoId }: videoProps) {
  return (
    <div className=" h-full w-[57%] flex flex-col justify-center">
      <YouTube videoId={videoId} />
    </div>
  );
}

export default YouTubeVideoPlayerVideoChat;
