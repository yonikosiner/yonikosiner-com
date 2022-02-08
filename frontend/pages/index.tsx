import style from "../styles/home.module.scss";
import Head from "next/head";
import YouTube from "../hooks/useYouTube";

export default function Home() {
    //Get the latest video id so the embed is always up to date
    const youtube = YouTube();
    let latestVideoID;
    !youtube.length ? null : latestVideoID = youtube[0].id.videoId;

    return (
        <div>
            <Head>
                <title>Yoni Kosiner | Homp Page</title>
                <meta name="Home page" content="Hey Guys, I'm Yoni." />
            </Head>
        {/* Hero */}
            <div className={style.hero}>
                <div style={{ "fontSize": "2.324rem" }} className={style.text}>
                    Hey Guys,
                    <br />I’m Yoni. I’m a <span><a href="https://linktr.ee/YoniKosiner" target=" _blank">Content creator</a></span> <br />and a self taught web developer
                </div>
                <div style={{ "position": "absolute", "right": "5rem" }} className={style.video}>
                    <iframe width="700" height="400" src={`https://www.youtube.com/embed/${latestVideoID}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>
         {/* Latest section */}
         <div className={style.latest}>
             {/* Latest work*/}
             <div className={style.latestWork}>
                 <h1><span className={style.underline}>Latest Work</span></h1>
             </div>
             {/* Latest articles*/}
             <div className={style.latestArticles}>
                <h1><span className={style.underline}>Latest Articles</span></h1>
             </div>
         </div>
        </div>
    );
};
