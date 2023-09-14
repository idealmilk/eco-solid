import { ParentComponent } from "solid-js";

import Anisha from "./../assets/img/avatar-anisha.png";
import Ali from "./../assets/img/avatar-ali.png";
import Richard from "./../assets/img/avatar-richard.png";
import { A } from "@solidjs/router";

const Testimonials: ParentComponent = () => {
  return (
    <section id="testimonials">
      <div class="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 class="text-4xl font-bold text-center">
          What's different about manage?
        </h2>

        <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
          <div class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={Anisha} alt="Anisha testimonial" class="w-16 -mt-14" />
            <h5 class="text-lg font-bold">Anisha Li</h5>
            <p class="text-sm text-darkGrayishBlue">
              "Manage has supercharged our team's workflow. The Ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated".
            </p>
          </div>

          <div class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img src={Ali} alt="Ali testimonial" class="w-16 -mt-14" />
            <h5 class="text-lg font-bold">Ali Bravo</h5>
            <p class="text-sm text-darkGrayishBlue">
              "Manage has supercharged our team's workflow. The Ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated".
            </p>
          </div>

          <div class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img src={Richard} alt="Richard testimonial" class="w-16 -mt-14" />
            <h5 class="text-lg font-bold">Richard Watts</h5>
            <p class="text-sm text-darkGrayishBlue">
              "Manage has supercharged our team's workflow. The Ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated".
            </p>
          </div>
        </div>

        <div class="my-16">
          <A
            href="#"
            class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:opacity-80"
          >
            Get Started
          </A>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
