import { ReactNode } from "react";

type ButtonProps = {
  prefix?: ReactNode;
  onClick?: () => void;
  children: ReactNode;
};

export default function Button({ prefix, onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center rounded bg-purple-600 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-purple-500 active:bg-purple-500/90"
    >
      {prefix && <span className="mr-0.5 -ml-0.5 h-5 w-5">{prefix}</span>}
      <span>{children}</span>
    </button>
  );
}
