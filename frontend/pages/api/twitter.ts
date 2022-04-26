// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetch from "node-fetch";
import type { NextApiRequest, NextApiResponse } from 'next';

type tweets = object;

require('dotenv').config();

const cache = {
    lastFetch: 0,
    tweets: [],
};

//@ts-ignore
async function getTweets(): Promise<tweets> {
    // first see if we have a cache in 30 mins
    const timeSinceLastFetch = Date.now() - cache.lastFetch;
    if (timeSinceLastFetch <= 1800000) return cache.tweets;
    const data = await fetch("https://api.twitter.com/2/users/1249844874955948034/tweets?tweet.fields=public_metrics&user.fields=username&max_results=5", {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
        },
    })
    .then((res) => res.json())

    cache.lastFetch = Date.now();
    cache.tweets = data;

    return data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<tweets>
) {
    req;
    const tweets = await getTweets();
    res.send(tweets);
};
