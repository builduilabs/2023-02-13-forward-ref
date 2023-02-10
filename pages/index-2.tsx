import ButtonB from "@/components/button-b";
import * as Popover from "@radix-ui/react-popover";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useRestartSetTimeout() {
  let ref = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => {
      clearTimeout(ref.current);
    };
  }, []);

  return (timer: ReturnType<typeof setTimeout>) => {
    clearTimeout(ref.current);
    ref.current = timer;
  };
}

export default function Index() {
  let [open, setOpen] = useState(false);
  let restart = useRestartSetTimeout();

  function handleOpenChange() {
    setOpen(true);

    // restart(setTimeout(() => setOpen(false), 10000));
  }

  return (
    <div className="relative m-20">
      <div className="relative">
        <div className="rounded bg-white px-4 py-3 font-mono text-sm shadow">
          npm install react-aria framer-motion
        </div>

        <div>
          <ButtonB>asdf</ButtonB>
        </div>

        <div className="absolute inset-y-0 right-3">
          <Popover.Root open={open} onOpenChange={handleOpenChange}>
            <Popover.Trigger
              asChild
              className="hover:text-gray-400 focus:outline-none"
            >
              <ButtonB>Click me</ButtonB>
            </Popover.Trigger>
            <AnimatePresence>
              {open && (
                <Popover.Portal forceMount>
                  <Popover.Content
                    // className=""
                    // sideOffset={5}
                    side="bottom"
                    // onOpenAutoFocus={(e) => e.preventDefault()}
                    asChild
                  >
                    <motion.div
                      initial="hidden"
                      animate="showing"
                      exit="hidden"
                      transition={{ duration: 0.2 }}
                      variants={{
                        hidden: {
                          y: 3,
                          opacity: 0,
                        },
                        showing: {
                          y: 0,
                          opacity: 1,
                        },
                      }}
                      className="focus:outline-none"
                    >
                      <div className="rounded border border-white/20 bg-gray-800 py-1.5 px-4 text-sm font-semibold text-gray-400 shadow">
                        Copied!
                      </div>
                      <Popover.Arrow className="fill-white/20" />
                    </motion.div>
                  </Popover.Content>
                </Popover.Portal>
              )}
            </AnimatePresence>
          </Popover.Root>
        </div>
      </div>
    </div>
  );
}
