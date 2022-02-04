import Head from "next/head";
import style from "../styles/portfolio.module.scss";

export default function Portfolio() {
    return (
        <div>
            <Head>
                <title>Yoni Kosiner | Portfolio Page</title>
                <meta name="Portfolio page" content="Portfolio page Yoni Kosiner" />
            </Head>
            {/*Main projects*/}
            <div className={style.porjects}>
                <div>
                    <h2>Chat app</h2>
                    <p>This is a chat app built with React.js and typescript on
                    the frontend, and it uses websockets with Rust in the
                    backend</p>
                    <a>View code</a>
                </div>
                <div>
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
                <div>
                    <h2>Personal website</h2>
                    <p>This website it self is a next.js website bulit with
                    typescript (how do people use regular js?). The way my blog
                    pages work is by using a ghost backend stored on digital
                    ocean.</p>
                    <a>View code</a>
                </div>
            </div>
            {/*Other projects github repos*/}
            <div className={style.otherProjects}>
            </div>
        </div>
    )
};
