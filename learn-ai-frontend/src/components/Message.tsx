import bot from "../assets/chatbot.png";
import user from "../assets/Male User (1).png";

interface MessageProps {
  role: string;
  content: string;
  answer?: string;
}

export default function Message({ role, content, answer }: MessageProps) {
  return (
    <div>
      {/* <div className="flex items-center">
        <img
          className="w-12 h-12"
          src={role === "assistant" ? bot : user}
          alt="profile avatar"
        />
        <span className="ml-1 text-lg">
          {role === "assistant" ? "LearnAI" : "You"}
        </span>
      </div> */}
      <div>
        <p className=" flex gap-2 items-center mb-2">
          <img src={user} className="h-[40px]" alt="" />
          <span className=" "> {content}</span>
        </p>
        {role === "assistant" && answer && (
          <p className=" mb-4 ">
            <div className="flex gap-2">
              <img src={bot} className="h-[40px]" alt="" />{" "}
              <span className=""> {answer}</span>
            </div>
          </p>
        )}
      </div>
    </div>
  );
}
