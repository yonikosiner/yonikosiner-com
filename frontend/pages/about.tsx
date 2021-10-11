import style from "../styles/about.module.scss"
import Head from "next/head";
import ContactOther from "../components/contact-ways"
import AboutHero from "../components/about-hero"

export default function About() {
    return (
        <div>
            <Head>
                <title>Yoni Kosiner | About Page</title>
                <meta name="About page" content="About Yoni Kosiner" />
            </Head>

            <AboutHero />

            <div className={style.desc}>
                <p>Hello my name is Yoni. For the past year and a half I have
                been creating content to do with coding on <a
                href="https://instagram.com/kosiner.codes"
                target="_blank">insatgram</a> and <br/ > and over the past 8
                months I have been creating <a
                href="https://www.youtube.com/channel/UCceuqcaS7oAGBYMBEhTyDEQ"
                target="_blank">YouTube</a> videos</p>

                <p>I'm also a self-taught full stack web developer. I use <a
                href="https://github.com/neovim/neovim" target="
                _blank">neovim</a> to code as the mouse sucks.</p>

                <p>I also occasionally stream on <a href="https://twitch.tv/yonikosiner" target=" _blank">twitch</a> me coding.</p>

                <h2>Other Stuff</h2>
                <ul>
                    <li>I use Linux and Dvorak btw <a href="https://github.com/yonikosiner/.dotfiles" target=" _blank">(dotfiles)</a></li>
                </ul>
            </div>
            <ContactOther />
        </div>
    )
};
