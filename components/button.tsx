import { motion, useAnimationControls } from "framer-motion";
import {
  ComponentPropsWithoutRef,
  forwardRef,
  HTMLProps,
  ReactNode,
  RefObject,
  useRef,
} from "react";
import { FocusRing, useButton } from "react-aria";

let f = () => {};

export default forwardRef(function Button(
  // props: HTMLProps<HTMLButtonElement>,
  props: ComponentPropsWithoutRef<"button">,
  ref
) {
  let controls = useAnimationControls();
  let onClick = props.onClick !== undefined ? props.onClick : f;
  let localRef = useRef(null);

  // ref = localRef;
  props.onAnimationStart;
  // console.log({ props });

  let { buttonProps } = useButton(
    {
      onPressStart: () => {
        controls.stop();
        controls.set({ background: "#757376" });
      },
      onPressEnd: () => {
        controls.start({
          background: "#353336",
          transition: { duration: 0.4 },
        });
      },
      onPress: (e) => {
        onClick(e);
        controls.start({
          background: [null, "#353336"],
          transition: { duration: 0.4 },
        });
      },
    },
    ref
  );

  return (
    <FocusRing focusRingClass="ring ring-offset-2 ring-offset-black">
      <motion.button
        {...props}
        {...buttonProps}
        ref={ref}
        animate={controls}
        className="h-20 w-20 touch-none select-none rounded-full bg-[#353336] text-white focus:outline-none"
        style={{
          WebkitTapHighlightColor: "transparent",
        }}
      />
    </FocusRing>
  );
});
