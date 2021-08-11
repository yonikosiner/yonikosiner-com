import React, { useEffect, useState } from "react";
import fetch from "node-fetch";
import style from "../styles/footer.module.scss";

function Tweets() {
    const [tweets, setTweets] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
            setLoading(true);
            fetch("/api/twitter")
            .then((data) => data.json())
            .then((json) => {
                    setLoading(false);
                    setTweets(json);
            })
            .catch((err: Error) => {
                    err;
                    setLoading(false);
                    setTweets([]);
            });
            }, []);
    return { tweets, loading }
};

export default function Footer(): object {
    const { loading, tweets } = Tweets();
    console.log(tweets)

    return (
        <div className={style.footer}>
            {/*Latest tweets */}
            <div className={style.tweets}>
                {/*{loading && <p>One sec getting tweets...</p>}
                {tweets.length ? <h4>tweets</h4> : null}*/}
                {/*@ts-ignore*/}
                {/*{tweets.data.map((i) => (
                    <p key={i}>{i}</p>
                ))}*/}
            </div>
            {/*Instagram*/}
            <div className={style.instagram}>
            </div>
            {/*YouTube videos*/}
            <div className={style.YouTube}>
            </div>
            {/*Coppy right with year*/}
            <p className={style.coppy}>&copy;{new Date().getFullYear()}</p>
        </div>
    );
};
