import React, { useState } from "react";
import YouTube from "react-youtube";

interface videoProps {
  videoId: string;
}
function YouTubeVideoPlayer({ videoId }: videoProps) {
  return (
    <div className="h-[70vh] w-1/2 md:w-3/4 flex justify-center items-center">
      <YouTube videoId={videoId} />
    </div>
  );
}

export default YouTubeVideoPlayer;
