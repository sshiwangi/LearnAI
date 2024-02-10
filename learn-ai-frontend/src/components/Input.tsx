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
    <div className="flex">
      <input
        className={styles}
        placeholder="Your prompt here..."
        value={value}
        onChange={onChange}
      />
      <button
        className="rounded-lg ml-2 border border-transparent bg-custom-main px-3 py-1 text-slate-200 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        onClick={onClick}
      >
        Search
      </button>
    </div>
  );
}
