import React, { useState, useEffect } from 'react';
import fetch from "node-fetch";

export default function Twitter() {
    interface tweet {
        id: number;
        text: string;
        public_metrics: {
            retweet_count: number;
            reply_count: number;
            like_count: number;
            quote_count: number;
        };
    };

    const [tweets, setTweets] = useState<tweet[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/api/twitter')
            .then(res => res.json())
            .then(data => setTweets(data.data))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {tweets.map((i: tweet ) => (
                <div key={i.id}>
                    <p>{i.text}</p>
                    <p>{i.public_metrics.like_count}</p>
                    <p>{i.public_metrics.quote_count}</p>
                    <p>{i.public_metrics.reply_count}</p>
                    <p>{i.public_metrics.retweet_count}</p>
                </div>
            ))}
        </div>
    );
};
