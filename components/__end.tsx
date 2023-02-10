import { ComponentPropsWithRef, forwardRef } from "react";

export default forwardRef<HTMLButtonElement, ComponentPropsWithRef<"button">>(
  function ButtonB({ children, ...rest }, ref) {
    return (
      <div className="relative inline-block">
        <button ref={ref} {...rest}>
          <span>{children}</span>
          <span className="absolute inset-y-0 right-0"></span>
        </button>
      </div>
    );
  }
);
