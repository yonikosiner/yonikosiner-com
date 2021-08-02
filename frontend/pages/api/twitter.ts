// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetch from "node-fetch";
import dotenv from "dotenv";
import type { NextApiRequest, NextApiResponse } from 'next';

type tweets = object;

dotenv.config();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<tweets>
) {
    req;
    fetch("https://api.twitter.com/2/users/1249844874955948034/tweets?tweet.fields=public_metrics&user.fields=username&max_results=5", {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${process.env.BEARER_TOKEN}`
        },
    })
    .then((res) => res.json())
    .then((json) => res.send(json));
};
