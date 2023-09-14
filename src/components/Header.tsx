import { Component, createSignal } from "solid-js";
import { A } from "@solidjs/router";

import Logo from "./../assets/img/logo.svg";
import MobileNav from "./MobileNav";

export const [mobileNavOpen, setMobileNavOpen] = createSignal(false);

const Header: Component = () => {
  return (
    <nav class="relative container mx-auto p-6">
      <div class="flex items-center justify-between">
        <div class="pt-2">
          <A href="/">
            <img src={Logo} />
          </A>
        </div>

        <div class="hidden space-x-6 uppercase md:flex">
          <A href="/work" class="hover:opacity-80">
            Work
          </A>
          <A href="/about" class="hover:opacity-80">
            About
          </A>

          <div class="group inline-block relative ">
            <button class="inline-flex items-center group-hover:opacity-80 ">
              <span class="mr-1 uppercase">Resources</span>
              <svg
                class="fill-current h-4 w-4 transition-all group-hover:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul class="absolute hidden flex-row -ml-56 text-gray-700 pt-1 group-hover:flex">
              <li class="">
                <A
                  href="/about"
                  class="bg-gray-400 hover:bg-gray-400 w-48 py-2 px-4 block whitespace-no-wrap"
                >
                  About
                </A>
              </li>
              <li class="">
                <A
                  href="/blog"
                  class="bg-gray-400 hover:bg-gray-400 w-48 py-2 px-4 block whitespace-no-wrap"
                >
                  Blog
                </A>
              </li>
              <li class="">
                <A
                  href="/packages"
                  class="bg-gray-400 hover:bg-gray-400 w-48 py-2 px-4 block whitespace-no-wrap"
                >
                  Packages
                </A>
              </li>
            </ul>
          </div>
          <A href="/packages" class="hover:opacity-80">
            Packages
          </A>
        </div>

        <A
          href="#"
          class="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:opacity-80 md:block"
        >
          Get Started
        </A>

        <button
          id="menu-btn"
          class="open block hamburger md:hidden focus:outline-none"
          classList={{ open: mobileNavOpen() }}
          onClick={() => setMobileNavOpen(!mobileNavOpen())}
        >
          <span class="hamburger-top" />
          <span class="hamburger-middle" />
          <span class="hamburger-bottom" />
        </button>
      </div>

      <MobileNav />
    </nav>
  );
};

export default Header;
