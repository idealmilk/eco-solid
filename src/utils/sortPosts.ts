export const sortPosts = (posts) => {
  const postsCopy = posts() || [];

  return postsCopy.slice().sort((a, b) => {
    return Date.parse(b.meta.publishedDate) - Date.parse(a.meta.publishedDate);
  });
};
