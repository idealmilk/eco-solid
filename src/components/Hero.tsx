import { A } from "@solidjs/router";
import { Component } from "solid-js";

import HeroImage from "./../assets/img/illustration-intro.svg";

const Hero: Component = () => {
  return (
    <section id="hero">
      <div class="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        <div class="flex flex-col mb-32 space-y-12 md: w-1/2">
          <h1 class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Take care of the world that you want to reach
          </h1>
          <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
            X helps you reduce your online footprint by offering low-impact web
            solutions.
          </p>
          <div class="flex justify-center md:justify-start">
            <A
              href="#"
              class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:opacity-80"
            >
              Get Started
            </A>
          </div>
        </div>

        <div class="md:w-1/2">
          <img src={HeroImage} alt="Hero image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
