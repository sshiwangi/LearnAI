import YouTube from "react-youtube";

interface videoProps {
  videoId: string;
}

function YouTubeVideoPlayerVideoChat({ videoId }: videoProps) {
  return (
    <div className=" h-full w-full xl:w-[57%] items-center flex flex-col justify-center">
      <YouTube videoId={videoId} />
    </div>
  );
}

export default YouTubeVideoPlayerVideoChat;
