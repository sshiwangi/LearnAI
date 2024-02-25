import search from "../assets/Email Send.png";
interface InputProps {
  styles: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void | Promise<void>;
}

export default function Input({
  styles,
  value,
  onChange,
  onClick = () => {},
}: InputProps) {
  return (
    <div className="flex rounded-md items-center w-full bg-gradient-to-b from-[#525050] to-[#1F1F1F]">
      <input
        className={styles}
        placeholder="Ask your question here..."
        value={value}
        onChange={onChange}
      />
      <button
        className="rounded-lg h-[36px] ml-2 border border-transparent bg-[#575454] px-3 py-1 "
        onClick={onClick}
      >
        <img className="h-[20px]" src={search} alt="" />
      </button>
    </div>
  );
}
