import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';
import { post } from "../../types";

const url = `https://www.instagram.com/graphql/query/?query_hash=e769aa130647d2354c40ea6a439bfc08&variables={%22id%22:%225910880527%22,%22first%22:8}`;

const cache: post = {
  lastFetch: 0,
  posts: [],
};

function slimUpPosts(response: any) {
  return response.data.user.edge_owner_to_timeline_media.edges.map((edge: any) => ({
    biggie: edge.node.thumbnail_src,
    thumbnail: edge.node.thumbnail_resources[2].src,
    url: `https://instagram.com/p/${edge.node.shortcode}`,
    caption:
      edge.node.edge_media_to_caption.edges.length > 0
        ? edge.node.edge_media_to_caption.edges[0].node.text
        : null,
    id: edge.node.id,
  }));
};

async function getPosts() {
  // first see if we have a cache in 30 mins
  const timeSinceLastFetch = Date.now() - cache.lastFetch;
  if (timeSinceLastFetch <= 1800000) {
    return cache.posts;
  }
  const data = await fetch(url, {
        headers: {
            //Need to take get your instagram cookies from your browser and put them into a env variable
            cookie: `sessionid=${process.env.INSTAGRAM_COOKIE}`,
        },
  }).then((res) => res.json());
  const posts = slimUpPosts(data);
  // const posts = data;
  cache.lastFetch = Date.now();
  cache.posts = posts;
  return posts;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    req;
    const posts = await getPosts();
    res.send(posts);
};
