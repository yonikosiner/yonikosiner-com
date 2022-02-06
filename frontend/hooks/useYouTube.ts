import { useState, useEffect } from 'react';
import { YouTubeVideo } from "../types";
import fetch from "node-fetch";

export default function YouTube() {
    const [videos, setVideos] = useState<YouTubeVideo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/youtube')
            .then(res => res.json())
            .then(data => setVideos(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        null
    };

    return videos;
};
