import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import { story } from "../../types";

const url = `https://www.instagram.com/graphql/query/?query_hash=04334405dbdef91f2c4e207b84c204d7&variables={"only_stories":true,"stories_prefetch":true,"stories_video_dash_manifest":false}`;

const cache = {
    lastFetch: 0,
    posts: [],
};

async function getPosts() {
    // first see if we have a cache in 5 mins
    const timeSinceLastFetch = Date.now() - cache.lastFetch;
    if (timeSinceLastFetch <= 300000) {
        return cache.posts;
    }
    const res = await fetch(url, {
        headers: {
            //Need to take get your instagram cookies from your browser and put them into a env variable
            cookie: `sessionid=${process.env.INSTAGRAM_COOKIE}`,
        },
    })
    .then((x) => x.json())
    .catch((err) => console.log(err));

    // Filter out stories that aren't mine. This only happens when I don't post a story, then it returns the stories of people I follow
    const wesEdge = res.data.user.feed_reels_tray.edge_reels_tray_to_reel.edges
    .map((edge: any) => edge.node)
    .find((edge: any) => edge.user.username === 'kosiner.codes');

    // no Stories
    if (!wesEdge) return {};

    // Otherwise return the Stories
    const posts = wesEdge.items.map((item: any) => ({
        media_preview: item.media_preview,
        display_url: item.display_url,
    }));

    cache.lastFetch = Date.now();
    cache.posts = posts;
    return cache.posts;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    req;
    const posts = await getPosts();
    res.send(posts);
}
