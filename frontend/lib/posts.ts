import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://kosiner.codes",
  //@ts-ignore
  key: process.env.GHOST_API_KEY,
  version: "v3"
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all',
    })
    .catch((err) => {
      console.error(err)
    })
}

export async function getPostBySlug(slug: string) {
  return await api.posts
    .read({
      slug,
    })
    .catch((err) => {
      console.error(err)
    })
}
