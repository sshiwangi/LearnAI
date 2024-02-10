import bot from "../assets/Bot.png";
import user from "../assets/Male User (1).png";

interface MessageProps {
  role: string;
  content: string;
  answer?: string;
}

export default function Message({ role, content, answer }: MessageProps) {
  return (
    <div>
      <div className="flex items-center">
        <img className="w-12 h-12" src={role === "assistant" ? bot : user} alt="profile avatar" />
         <span className="ml-1 text-lg">{role === "assistant" ? "Bot" : "You"}</span>
      </div>
      <div>
        <p className="  mb-2">{content}</p>
        {role === "assistant" && answer && (
          <p className="font-lg mb-4">Answer: {answer}</p>
        )}
      </div>
    </div>
  );
}
