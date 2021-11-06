import style from "../styles/footer.module.scss";
import Twitter from "../hooks/twitter";

export default function Footer(): object {
    const tweets = Twitter();

    return (
        <div className={style.footer}>
            {/*Latest tweets */}
            <div className={style.tweets}>
                {tweets.map((tweet) => (
                    <div key={tweet.id} className={style.tweet}>
                        <p>{tweet.text}</p>
                        <p>{tweet.public_metrics.like_count}</p>
                        <p>{tweet.public_metrics.quote_count}</p>
                        <p>{tweet.public_metrics.reply_count}</p>
                        <p>{tweet.public_metrics.retweet_count}</p>
                    </div>
                ))}
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
