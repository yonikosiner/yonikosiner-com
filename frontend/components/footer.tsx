import style from "../styles/footer.module.scss";
import Twitter from "../hooks/twitter";
import { tweet } from "../types";
import Instagram from "./instagram";

export default function Footer(): object {
    const tweets = Twitter();

    return (
        <div className={style.footer}>
            {/*Latest tweets */}
            <div className={style.tweets}>
                {!tweets.length  && <p>No tweets</p> }
                {tweets.slice(0,3).map(function(tweet: tweet): JSX.Element {
                    const url: string = `https://twitter.com/KosinerYoni/status/${tweet.id}`;
                        return (
                            <a href={url} target="_blank">
                                <div key={tweet.id} className={style.tweet}>
                                    <p>{tweet.text}</p>
                                    <p>Likes: {tweet.public_metrics.like_count}</p>
                                    <p>Retweet Quote Count: {tweet.public_metrics.quote_count}</p>
                                    <p>Retweet Count:{tweet.public_metrics.retweet_count}</p>
                                    <p>Reply Count: {tweet.public_metrics.reply_count}</p>
                                </div>
                            </a>
                           );
                    })
                }
            </div>
            {/*Instagram*/}
            <div className={style.instagram}>
                <Instagram />
            </div>
            {/*YouTube videos*/}
            <div className={style.YouTube}>
            </div>
            {/*Coppy right with year*/}
            <p className={style.coppy}>&copy;{new Date().getFullYear()}</p>
        </div>
    );
};
