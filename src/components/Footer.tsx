import { Component } from "solid-js";
import { A } from "@solidjs/router";

import Logo from "./../assets/img/logo-white.svg";
import Facebook from "./../assets/img/icon-facebook.svg";
import Youtube from "./../assets/img/icon-youtube.svg";
import Twitter from "./../assets/img/icon-twitter.svg";
import Pinterest from "./../assets/img/icon-pinterest.svg";
import Instagram from "./../assets/img/icon-instagram.svg";

const Footer: Component = () => {
  return (
    <footer class="bg-veryDarkBlue">
      <div class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div class="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>

          <div>
            <A href="/">
              <img src={Logo} class="h-8" />
            </A>
          </div>

          <div class="flex justify-center space-x-4">
            <a href="#">
              <img src={Facebook} alt="" class="h-8" />
            </a>

            <a href="#">
              <img src={Youtube} alt="" class="h-8" />
            </a>

            <a href="#">
              <img src={Twitter} alt="" class="h-8" />
            </a>

            <a href="#">
              <img src={Pinterest} alt="" class="h-8" />
            </a>

            <a href="#">
              <img src={Instagram} alt="" class="h-8" />
            </a>
          </div>
        </div>

        <div class="flex justify-around space-x-32">
          <div class="flex flex-col space-y-3 text-white">
            <A href="work" class="hover:opacity-80">
              Work
            </A>
            <A href="about" class="hover:opacity-80">
              About
            </A>
            <A href="blog" class="hover:opacity-80">
              Blog
            </A>
            <A href="packages" class="hover:opacity-80">
              Packages
            </A>
          </div>

          <div class="flex flex-col space-y-3 text-white">
            <A href="work" class="hover:opacity-80">
              Work
            </A>
            <A href="about" class="hover:opacity-80">
              About
            </A>
            <A href="blog" class="hover:opacity-80">
              Blog
            </A>
            <A href="packages" class="hover:opacity-80">
              Packages
            </A>
          </div>
        </div>

        <div class="flex flex-col justify-between">
          <form>
            <div class="flex space-x-3">
              <input
                type="text"
                placeholder="Updated in your inbox"
                class="flex-1 px-4 rounded-full focus:outline-none"
              />
              <button class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div class="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
