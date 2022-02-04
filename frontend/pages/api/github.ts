import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from "node-fetch";
import { Repositories } from "../../types";

require('dotenv').config();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Repositories[]>
) {
    fetch(`https://api.github.com/users/yonikosiner/repos`).then(response => {
        const repos: Repositories[] = [];
        response.json().then((json: Repositories[]) => {
            json.map((repo: Repositories) => {
                //Removes the repo if it is a fork
                if (repo.fork) return;
                //Remove if name if is the chat app, twitch bot, or my portfolio
                if (repo.name === "Twitch_bot" || repo.name.includes("chat") || repo.name === "yonikosiner-com") return;

                //The object of the repo then push it to the array and once it
                //has been through all the items the array is returned as json
                const returnToReturn: Repositories = {
                    name: repo.name,
                    description: repo.description,
                    html_url: repo.html_url
                };

                repos.push(returnToReturn);
            });
            res.status(200).json(repos);
        });
    });
};
