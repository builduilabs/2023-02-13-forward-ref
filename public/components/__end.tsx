import { ComponentProps, forwardRef, ReactNode } from "react";

type ButtonProps = {
  leading?: ReactNode;
};

export default forwardRef<
  HTMLButtonElement,
  ComponentProps<"button"> & ButtonProps
>(function Button({ leading, onClick, className, children, ...rest }, ref) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center rounded bg-purple-600 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-purple-500 active:bg-purple-500/90 ${className}`}
      ref={ref}
      {...rest}
    >
      {leading && <span className="mr-0.5 -ml-0.5 h-5 w-5">{leading}</span>}
      <span>{children}</span>
    </button>
  );
});
