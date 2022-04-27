import Head from "next/head";
import style from "../styles/portfolio.module.scss";
import Github from "../hooks/useGithub";

export default function Portfolio() {
    const github = Github();

    return (
        <div>
            <Head>
                <title>Yoni Kosiner | Portfolio Page</title>
                <meta name="Portfolio page" content="Portfolio page Yoni Kosiner" />
            </Head>
            {/*Main projects*/}
            <div className={style.projects}>
                <div className={style.project}>
                    <div className={style.text}>
                        <h2>Todo me daddy</h2>
                        <p>This is a neovim plugin I built to easily keep track
                            of to do comments in your code using telescope.
                            Writen in lua btw.</p>
                        <a href="https://github.com/yonikosiner/todo-me-daddy" target=" _blank">View code</a>
                    </div>
                </div>
                <div className={style.projcet}>
                    <div className={style.text}>
                        <h2>Track Pumps a Day</h2>
                        <p>This is a little rest api written in go. Long story
                            short I'm asthmatic, and I wanted a way to keep
                            track of how many times a day I have taken my
                            inhaler. So this little api allows me to track how
                            many times a day I have taken my inhaler, between
                            any device that can access the internet</p>
                        <a href="https://github.com/yonikosiner/track-pumps-a-day" target=" _blank">View code</a>
                    </div>
                </div>
                <div className={style.projcet}>
                    <div className={style.text}>
                        <h2>Personal website</h2>
                        <p>This website it self is a next.js website bulit with
                            typescript (how do people use regular js?). The way my blog
                            pages work is by using a ghost backend stored on digital
                            ocean.</p>
                        <a href="https://github.com/yonikosiner/yonikosiner-com" target=" _blank">View code</a>
                    </div>
                </div>
            </div>
            {/*Github repos*/}
            <div className={style.center}>
                <div className={style.otherProjects}>
                    <h1>Check out more of my projects from my <a href="https://github.com/yonikosiner" target=" _blank">github</a></h1>
                    {!github.length && <p>Loading...</p>}
                    {github.map((repo) => (
                        <div key={repo.name}>
                            <h2>{repo.name}</h2>
                            {repo.description ? <p>{repo.description}</p> : <p>No description</p>}
                            <a href={repo.html_url} target="_blank">View code</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};
