import React, { useState } from "react";
import Flag from "../assets/flag.png";

const RoadmapPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [videoSuggestions, setVideoSuggestions] = useState<string[]>([]);

  const handleSearch = () => {
    const dummySuggestions = [
      "Video 1",
      "Video 2",
      "Video 3",
      "Video 4",
      "Video 5",
    ];
    setVideoSuggestions(dummySuggestions);
  };

  return (
    <div className="min-h-screen bg-gray-200 ">
      <div className="max-w-lg mx-auto">
        {/* <h1 className="text-3xl font-bold mb-4">Roadmap Page</h1> */}
        <div className="flex items-center py-10">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search videos..."
            className="border border-gray-300 px-3 py-2 w-full mr-2"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-4 left-0 w-full "></div>
        <div className="absolute bottom-4 left-0 w-full"></div>
        <div className="flex justify-between mt-4 h-8 w-full bg-black">
          {videoSuggestions.map((video, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-8 h-8  text-white flex items-center justify-center my-1">
                <img src={Flag} alt="" className="w-6 h-6 mb-2" />
                {/* {index + 1} */}
              </div>
              <div>{video}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
