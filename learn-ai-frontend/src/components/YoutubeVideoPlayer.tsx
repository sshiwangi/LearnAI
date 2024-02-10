import React, { useState } from "react";
import YouTube from "react-youtube";

interface videoProps {
  videoId: string;
}
function YouTubeVideoPlayer({ videoId }: videoProps) {
  return (
    <div className=" h-full w-full flex justify-center items-center">
      <YouTube videoId={videoId} />
    </div>
  );
}

export default YouTubeVideoPlayer;
