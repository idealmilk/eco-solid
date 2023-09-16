import { Component, For } from "solid-js";

import { A } from "@solidjs/router";
import { MetaTypes } from "~/types";

type BlogGridTypes = {
  posts: MetaTypes[];
};

const BlogGrid: Component<BlogGridTypes> = (props) => {
  function formatDate(inputDate: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date(inputDate);
    const formattedDate = date.toLocaleDateString("en-us", options);

    return formattedDate;
  }

  return (
    <section id="blog-grid">
      <ul class="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
        <For each={props.posts}>
          {(post) => {
            const formattedDate = formatDate(post.meta.publishedDate);

            return (
              <li>
                <A
                  href={`/blog/${post.meta.slug}`}
                  class="relative flex flex-col sm:flex-row lg:flex-col items-start"
                >
                  <div class="order-1 sm:ml-6 lg:ml-0">
                    <h3 class="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                      <span class="mb-1 block text-sm leading-6 text-indigo-500">
                        {formattedDate}
                      </span>
                      {post.meta.title}
                    </h3>
                    <div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                      <p>{post.meta.description}</p>
                    </div>
                  </div>
                  <img
                    src="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg"
                    alt=""
                    class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 lg:mb-6 lg:w-full"
                    width="1216"
                    height="640"
                  />
                </A>
              </li>
            );
          }}
        </For>
      </ul>
    </section>
  );
};

export default BlogGrid;
