import React, { useEffect, useState } from "react";
import fetch from "node-fetch";
import style from "../styles/footer.module.scss";

function tweets() {
    const [tweets, setTweets] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetch("/api/twitter")
        .then((data) => data.json())
        .then((json) => {
            setLoading(false);
            setTweets(json);
        });
    }, []);

    return { tweets, loading }
};
export default function Footer(): object {
    const { loading, tweets: tweet} = tweets();
    return (
        <div className={style.footer}>
            {/*Latest tweets */}
            <div className={style.tweets}>
            {loading && <p>One sec getting tweets...</p>}
            {tweet.length ? <h4>tweets</h4> : null}
            {Array.isArray(tweet) &&
                tweet.map((t) => {
                    //@ts-ignore
                    console.log(t)
                    return (
                        //@ts-ignore
                        <p key={t}>{t.text}</p>
                    );
                })
            }
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
