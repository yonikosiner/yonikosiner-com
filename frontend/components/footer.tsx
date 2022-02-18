import style from "../styles/footer.module.scss";
import Twitter from "../hooks/twitter";
import { tweet } from "../types";
import Instagram, { Stories } from "./instagram";
import YouTube from "./YouTube";

export default function Footer(): object {
    const tweets = Twitter();

    return (
        <div className={style.footer}>
            <div className={style.items}>
                {/*Latest tweets */}
                <div className={style.twitter}>
                    <h3><a href="https://twitter.com/Kosiner/yoni" target=" _blank">@KosinerYoni</a> <br /> Tweets</h3>
                    <div className={style.tweets}>
                        {!tweets.length  && <p>No tweets</p> }
                        {tweets.slice(0,3).map(function(tweet: tweet): JSX.Element {
                            const url: string = `https://twitter.com/KosinerYoni/status/${tweet.id}`;
                                return (
                                    <a key={tweet.id} href={url} target="_blank">
                                        <div key={tweet.id} className={style.tweet}>
                                            <p>{tweet.text}</p>
                                            <p>Likes: {tweet.public_metrics.like_count}</p>
                                            <p>Reply Count: {tweet.public_metrics.reply_count}</p>
                                            <p>Retweet Count:{tweet.public_metrics.retweet_count}</p>
                                            <p>Retweet Quote Count: {tweet.public_metrics.quote_count}</p>
                                        </div>
                                    </a>
                                   );
                            })
                        }
                    </div>
                </div>
                {/*Instagram*/}
                <div className={style.gram}>
                    <h3><a href="https://instagram.com/kosiner.codes" target=" _blank">@kosiner.codes</a><br /> Instant Grams</h3>
                    <div className={style.instagram}>
                        <h4 style={{ textAlign: "left", fontWeight: "bolder", letterSpacing: "2px", marginLeft: "2rem", fontSize: "25px" }}>Stories</h4>
                        <div style={{ display: "flex", justifyContent: "left", alignItems: "left", marginLeft: "2rem" }}>
                            <Stories />
                        </div>
                        <Instagram />
                    </div>
                </div>
                {/*YouTube videos*/}
                <div className={style.YouTube}>
                    <h3><a href="https://www.youtube.com/channel/UCceuqcaS7oAGBYMBEhTyDEQ" target=" _blank">Yoni Kosiner</a><br /> YouTube</h3>
                    <div className={style.tube}>
                        <YouTube />
                    </div>
                </div>
            </div>
            {/*Coppy right with year*/}
            <p style={{ textAlign: "center", letterSpacing: "2px", fontWeight: "bolder" }} className={style.coppy}><a href="https://linktr.ee/yonikosiner" target=" _blank">Yoni Kosiner</a> &copy;{new Date().getFullYear()}</p>
        </div>
    );
};
