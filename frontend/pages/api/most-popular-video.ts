import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from "node-fetch";
import { YouTubeVideo } from '../../types';

require('dotenv').config();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    fetch(`https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=${process.env.YOUTUBE_API_KEY}&part=snippet&maxResults=1`, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "User-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.87 Safari/537.36"
        },
    }).then((data) => {
        data.json().then((json: YouTubeVideo[]) => {
            const videos: YouTubeVideo[] = [];
            //@ts-ignore
            json.items.map((video: YouTubeVideo) => {
                const videoToReturn = {
                    id: {
                        videoId: video.id.videoId
                    },
                    snippet: {
                        title: video.snippet.title,
                        description: video.snippet.description,
                        thumbnails: {
                            medium: {
                                url: video.snippet.thumbnails.medium.url
                            }
                        }
                    }
                };
                videos.push(videoToReturn);
            });
            res.status(200).json(videos);
        });
    })
};
