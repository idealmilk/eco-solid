import { Component } from "solid-js";

import { Hero, Features, Testimonials, CallToAction } from "./../components";

const Home: Component = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;
