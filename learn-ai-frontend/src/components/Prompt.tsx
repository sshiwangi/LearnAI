import { useState } from "react";
import Message from "./Message";
import Input from "./Input";

interface PromptProps {
  text: string;
  id?: string;
}

interface MessageItem {
  role: string;
  content: string;
  answer?: string;
}

function Prompt({ text, id }: PromptProps) {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<MessageItem[]>([]);

  const handleSubmit = async () => {
    const prompt = {
      role: "user",
      content: input,
      question: input,
    };
    setMessages([...messages, prompt]);

    try {
      const response = await fetch(
        "https://learnai-api.vercel.app/api/AI/videoChat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            text: text,
            question: input,
          }),
        }
      );

      const data = await response.json();
      const answer = data.answer;
      const assistantMessage: MessageItem = {
        role: "assistant",
        content: input, // Replace with the content you want to display
        answer: answer, // Pass the user's question to assistant's message
      };

      // if (data.answer) {
      //   assistantMessage.content = data.answer;
      // }

      setMessages([...messages, assistantMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }

    // await fetch("https://learnai-api.vercel.app/api/AI/videoChat", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     id: id,
    //     text: text,
    //     question: input,
    //   }),
    // })
    //   .then((data) => data.json())
    //   .then((data) => {
    //     console.log(data);
    //     // Handle the API response
    //   });
    setInput("");
  };
  if (!text) {
    return null;
  }

  return (
    <div className="bg-custom-promptbg p-5 w-full rounded-md">
      <div>
        {/* <h3>start Chatting</h3> */}
        <div>
          {messages.map((el: MessageItem, i: number) => (
            <Message
              key={i}
              role={el.role}
              content={el.content}
              answer={el.answer}
            />
          ))}
        </div>
        <Input
          styles="w-full rounded-lg border border-slate-300 bg-slate-200 p-3 text-sm text-slate-800 shadow-md focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-slate-200/10 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400 dark:focus:border-blue-600 sm:text-base"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onClick={input ? handleSubmit : undefined}
        />
      </div>
    </div>
  );
}

export default Prompt;
