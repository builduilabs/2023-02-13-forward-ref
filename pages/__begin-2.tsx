import {
  BanknotesIcon,
  BuildingOfficeIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import * as Popover from "@radix-ui/react-popover";

export default function Index() {
  return (
    <div className="flex h-screen flex-col items-start justify-start">
      <header className="flex h-20 w-full justify-between border-b border-gray-700 bg-gray-800 px-6 text-sm font-medium text-gray-200">
        <div className="flex items-center space-x-4">
          <a href="#" className="text-xl">
            <BuildingOfficeIcon className="h-6 w-6" />
          </a>
          <a href="#">Invoices</a>
        </div>
        <div className="flex items-center">
          <Popover.Root>
            <Popover.Trigger>+ New invoice</Popover.Trigger>

            <Popover.Portal>
              <Popover.Content
                sideOffset={8}
                side="bottom"
                align="end"
                className="flex w-[360px] flex-col overflow-hidden rounded-md bg-gray-900 shadow-xl"
              >
                <div className="flex items-center justify-between py-3 px-5 text-white">
                  <div className="flex items-center">
                    <BanknotesIcon className="mr-3 h-6 w-6 opacity-50" />
                    <p className="text-lg font-semibold">New invoice</p>
                  </div>

                  <Popover.Close className="PopoverClose">
                    <XMarkIcon className="h-6 w-6 opacity-25" />
                  </Popover.Close>
                </div>
                <div className="bg-gray-800 py-5 px-5">
                  <p className="text-gray-500">Create a new invoice...</p>
                </div>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>
      </header>

      <main className="flex w-full flex-1 items-center justify-center">
        <BuildingOfficeIcon className="h-40 w-40 text-white/[.02]" />
      </main>
    </div>
  );
}
