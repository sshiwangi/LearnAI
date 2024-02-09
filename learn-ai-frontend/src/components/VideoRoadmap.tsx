import React from "react";

const videoInfo = [
  {
    title: "Introduction to HTML",
    link: "http://youtube.com32",
  },
  {
    title: "Introduction to HTML",
    link: "http://youtube.com32",
  },
];

function VideoRoadmap() {
  return (
    <div>
      {videoInfo.map((item, index) => (
        <div>
          {/* video title */}
          <div>{item.title}</div>
          {/* video-thumbnail */}
          <div></div>
        </div>
      ))}
      <div>
        {/* video title */}
        <div></div>
        {/* video-thumbnail */}
        <div></div>
      </div>
    </div>
  );
}

export default VideoRoadmap;
