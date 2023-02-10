import Button from "@/components/button";
import * as Popover from "@radix-ui/react-popover";
import { BuildingOfficeIcon } from "@heroicons/react/24/solid";

export default function Index() {
  return (
    <div className="flex h-screen items-start justify-start">
      <header className="shadow-b flex w-full justify-between bg-gray-800 p-6 text-sm text-gray-200">
        <div className="flex items-center space-x-4">
          <a href="#" className="text-xl">
            <BuildingOfficeIcon className="h-6 w-6" />
          </a>
          <a href="#">Invoices</a>
        </div>
        <div className="flex items-center">
          <span>+ New invoice</span>
        </div>
      </header>

      {/* <div className="">
        <Popover.Root>
          <Popover.Trigger
            asChild
            className="hover:text-gray-400 focus:outline-none"
          >
            <Button>Click me</Button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              className=""
              sideOffset={5}
              side="top"
              onOpenAutoFocus={(e) => e.preventDefault()}
              asChild
            >
              <div className="focus:outline-none">
                <div className="rounded border border-white/20 bg-gray-800 py-1.5 px-4 text-sm font-semibold text-gray-400 shadow">
                  Copied!
                </div>
                <Popover.Arrow className="fill-white/20" />
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div> */}
    </div>
  );
}
