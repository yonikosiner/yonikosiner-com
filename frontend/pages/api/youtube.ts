import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from "node-fetch";
import { YouTubeVideo } from '../../types';

require('dotenv').config();

const cache = {
    lastFetch: 0,
    videos: [],
};

class GetVideos {
    private videos: YouTubeVideo[] = [];

    public getVideos() {
        //First see if we have a cache in 24 hours
        const timeSinceLastFetch = Date.now() - cache.lastFetch;
        if (timeSinceLastFetch <= 86400000) return cache.videos;
        fetch(`https://www.googleapis.com/youtube/v3/search\?key\=${process.env.YOUTUBE_API_KEY}\&channelId\=UCceuqcaS7oAGBYMBEhTyDEQ\&part\=snippet,id\&order\=date\&maxResults\=3`, {
            method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "User-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.87 Safari/537.36"
        },
        }).then((data) => {
            data.json().then((json: YouTubeVideo[]) => {
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
                    this.videos.push(videoToReturn);
                });
            });
        });

        cache.lastFetch = Date.now();
        //@ts-ignore
        cache.videos = this.videos;

        console.log(cache.videos);
        console.log(this.videos);

        return this.videos;
    }
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const videos = new GetVideos().getVideos();
    res.status(200).json(videos);
};
