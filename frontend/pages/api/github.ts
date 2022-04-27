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

                //Remove if it is apart of the cards on the top of my portfolio page
                if (repo.name === "todo-me-daddy" || repo.name.includes("track-pumps-a-day") || repo.name === "yonikosiner-com") return;

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
