import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <>
      {/* Notification Bar */}
      <a
        href="https://app.logofork.com"
        className="block w-full cursor-pointer hover:opacity-95 transition-opacity"
        data-umami-event="Notification Bar Click"
      >
        <div className="w-full py-2 text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-rotate">
          <p className="text-sm font-medium">
            ✨ New: We&apos;ve added color variants and board syncing! ✨
          </p>
        </div>
      </a>

      <section className="py-3 mt-1 mb-6 lg:mb-0">
        <div className="px-4 mx-auto container-none sm:px-6">
          <nav className="justify-between hidden lg:flex">
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="flex items-center gap-2"
                data-umami-event="Logo Click Desktop"
              >
                <div className="flex items-center">
                  <Image
                    src="/logo.svg"
                    alt="Logofork Logo"
                    width={26}
                    height={26}
                  />
                </div>
                <span className="ml-0.5 mt-0.5 text-3xl font-bold text-zinc-800">
                  Logofork
                </span>
              </Link>
            </div>
            <div className="flex gap-3">
              <a
                href="https://app.logofork.com"
                data-umami-event="Go To App Desktop"
              >
                <Button className="bg-zinc-800">Go To App</Button>
              </a>
            </div>
          </nav>
          <div className="block lg:hidden">
            <div className="flex items-center justify-center">
              <Link
                href="/"
                className="flex items-center h-4 gap-2 pt-8"
                data-umami-event="Logo Click Mobile"
              >
                <div className="flex items-center pb-1.5">
                  <Image
                    src="/logo.svg"
                    alt="Logofork Logo"
                    width={26}
                    height={26}
                  />
                </div>
                <span className="-mt-1 text-3xl font-bold text-zinc-800">
                  Logofork
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
