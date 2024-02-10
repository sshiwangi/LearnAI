import React, { useState } from "react";
import YouTube from "react-youtube";

interface videoProps {
  videoId: string;
}
function YouTubeVideoPlayer({ videoId }: videoProps) {
  return (
    <div className=" h-full w-1/2 flex justify-center">
      <YouTube videoId={videoId} />
    </div>
  );
}

export default YouTubeVideoPlayer;
