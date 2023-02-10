import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

export default function ButtonB({ children, onClick }: ButtonProps) {
  return (
    <button className="relative" onClick={onClick}>
      <span>{children}</span>
      <span className="absolute inset-y-0 right-0"></span>
    </button>
  );
}
