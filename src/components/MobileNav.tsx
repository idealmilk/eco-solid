import { Component } from "solid-js";
import { A } from "@solidjs/router";

import { mobileNavOpen, setMobileNavOpen } from "./Header";

const MobileNav: Component = () => {
  return (
    <div class="md:hidden">
      <div
        id="menu"
        class="absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        classList={{ flex: mobileNavOpen(), hidden: !mobileNavOpen() }}
      >
        <A
          href="/work"
          class="hover:opacity-80"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          Work
        </A>
        <A
          href="/about"
          class="hover:opacity-80"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          About
        </A>
        <A
          href="/blog"
          class="hover:opacity-80"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          Blog
        </A>
        <A
          href="/packages"
          class="hover:opacity-80"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          Packages
        </A>
      </div>
    </div>
  );
};

export default MobileNav;
