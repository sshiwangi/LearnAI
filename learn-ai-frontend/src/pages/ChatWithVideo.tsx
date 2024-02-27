import React, { useState, useEffect } from "react";
import YouTubeVideoPlayerVideoChat from "../components/YoutubeVideoPlayerVideoChat";
import Prompt from "../components/Prompt";
import { useLocation } from "react-router-dom";
import { fetchYouTubeTranscript } from "../utils/Transcript";
import { getVideoId } from "./Roadmap";

function ChatWithVideo() {
  const [videoId, setVideoId] = useState("");
  const [videoText, setVideoText] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();
  const videoURL = query.get("videourl");
  console.log(videoURL);

  useEffect(() => {
    if (videoURL) {
      setVideoUrl(videoURL);
      fetchVideoDetails(videoURL);
    }
  }, [videoURL]);

  const fetchVideoDetails = async (videoURL: string) => {
    try {
      // Fetch transcript using your fetchYouTubeTranscript function
      const { transcriptText, videoId } = await fetchYouTubeTranscript(
        videoURL
      );
      setVideoText(transcriptText);
      setVideoId(videoId);
      console.log({ videoText, videoId });
      // Set the transcript text and show VideoChat component
    } catch (error) {
      console.error("Error fetching transcript:", (error as Error).message);
      // Handle the error, you might want to display an error message to the user
    }
  };

  return (
    <div className="flex p-10 bg-custom-bg">
      <YouTubeVideoPlayerVideoChat videoId={getVideoId(videoUrl)} />
      <div className="w-full flex justify-center text-white">
        <Prompt text={videoText} id={videoId} />
      </div>
    </div>
  );
}

export default ChatWithVideo;
