import Head from "next/head";
import style from "../styles/portfolio.module.scss";
import Github from "../hooks/useGithub";

export default function Portfolio() {
    const github = Github();

    return (
        <div className={style.test}>
            <Head>
                <title>Yoni Kosiner | Portfolio Page</title>
                <meta name="Portfolio page" content="Portfolio page Yoni Kosiner" />
            </Head>
            {/*Main projects*/}
            <div className={style.projects}>
                <div className={style.project}>
                    <div className={style.text}>
                        <h2>Chat app</h2>
                        <p>This is a chat app built with React.js and typescript on
                        the frontend, and it uses websockets with Rust in the
                        backend</p>
                        <a>View code</a>
                    </div>
                </div>
                <div className={style.projcet}>
                    <div className={style.text}>
                        <h2>Twitch bot</h2>
                        <p>This is a bot that listens to my twitch chat and allows
                        chat to, Turn of my screen, change my keyboard to qwerty (I
                        use dvorak btw), insert text into neovim, perofrm vim
                        commands, change my i3 workspace, and change my
                        background. Along with doing that this bot can also log my
                        chat into file and then I can see that in tmux, and if
                        anyone spams commands or does something they should not I
                        can band them from the app. Oh and yes it does log what
                        happens in my status bar in vim.</p>
                        <a>View code</a>
                    </div>
                </div>
                <div className={style.projcet}>
                    <div className={style.text}>
                        <h2>Personal website</h2>
                        <p>This website it self is a next.js website bulit with
                        typescript (how do people use regular js?). The way my blog
                        pages work is by using a ghost backend stored on digital
                        ocean.</p>
                        <a>View code</a>
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
