import { useState, useEffect } from 'react';
import { tweet } from "../types";
import fetch from "node-fetch";

export default function Twitter() {
    const [tweets, setTweets] = useState<tweet[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/twitter')
            .then(res => res.json())
            .then(data => setTweets(data.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        null
    };

    return tweets;
};
