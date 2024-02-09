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
      <div>
        <img src={role === "assistant" ? bot : user} alt="profile avatar" />
      </div>
      <div>
        <p>{content}</p>
        {role === "assistant" && answer && (
          <p className="font-bold">Answer: {answer}</p>
        )}
      </div>
    </div>
  );
}
