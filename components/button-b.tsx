import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  forwardRef,
  ReactNode,
} from "react";

// export default forwardRef<
//   HTMLButtonElement,
//   ComponentPropsWithoutRef<"button">
// >(function ButtonB({ children, onClick }, ref) {
//   return (
//     <button onClick={onClick} className="relative">
//       <span>{children}</span>
//       <span className="absolute inset-y-0 right-0"></span>
//     </button>
//   );
// });

// export default function ButtonB({ children }: { children: ReactNode }) {
//   return (
//     <button className="relative">
//       <span>{children}</span>
//       <span className="absolute inset-y-0 right-0"></span>
//     </button>
//   );
// }

// Step 1
// type ButtonProps = {
//   children: ReactNode;
//   onClick?: () => void;
// };

// export default function ButtonB({ children, onClick }: ButtonProps) {
//   return (
//     <button className="relative" onClick={onClick}>
//       <span>{children}</span>
//       <span className="absolute inset-y-0 right-0"></span>
//     </button>
//   );
// }

// Step 2: forwardRef with explanation
// type ButtonProps = {
//   children: ReactNode;
//   onClick?: () => void;
// };

// export default forwardRef<HTMLButtonElement, ButtonProps>(function ButtonB(
//   { children, onClick },
//   ref
// ) {
//   return (
//     <button ref={ref} className="relative" onClick={onClick}>
//       <span>{children}</span>
//       <span className="absolute inset-y-0 right-0"></span>
//     </button>
//   );
// });

// {
//   /* <ClassComponent ref={ref} */
// }

// Step 3: all props
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
