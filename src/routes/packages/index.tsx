import { createRouteData, useRouteData } from "solid-start";
import { CardGrid } from "~/components";
import { MetaTypes } from "~/types";
import { sortPosts } from "~/utils/sortPosts";

export const routeData = () => {
  return createRouteData(async () => {
    const files = import.meta.glob("/src/routes/packages/*.mdx");

    const posts = Object.keys(files).map(async (file) => {
      const meta = await files[file]();

      return { ...((await meta) as MetaTypes) };
    });

    return Promise.all(posts);
  });
};

const Packages = () => {
  const Posts = useRouteData<typeof routeData>();

  return <CardGrid posts={sortPosts(Posts)} />;
};

export default Packages;
