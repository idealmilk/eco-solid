import { createRouteData, useRouteData } from "solid-start";
import { BlogGrid } from "~/components";
import { MetaTypes } from "~/types";

export const routeData = () => {
  return createRouteData(async () => {
    const files = import.meta.glob("./*.mdx");

    const posts = Object.keys(files).map(async (file) => {
      const meta = await files[file]();

      return { ...((await meta) as MetaTypes) };
    });

    return Promise.all(posts);
  });
};

const Blog = () => {
  const Posts = useRouteData<typeof routeData>();

  console.log(Posts());

  const sortedPosts = () => {
    const posts = Posts() || [];
    return posts.slice().sort((a, b) => {
      return (
        Date.parse(b.meta.publishedDate) - Date.parse(a.meta.publishedDate)
      );
    });
  };

  return <BlogGrid posts={sortedPosts} />;
};

export default Blog;
