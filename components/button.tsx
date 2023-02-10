import { ReactNode } from "react";

type ButtonProps = {
  leading?: ReactNode;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
};

export default function Button({
  leading,
  className,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center rounded bg-purple-600 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-purple-500 active:bg-purple-500/90 ${className}`}
    >
      {leading && <span className="mr-0.5 -ml-0.5 h-5 w-5">{leading}</span>}
      <span>{children}</span>
    </button>
  );
}
