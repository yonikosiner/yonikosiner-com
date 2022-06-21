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

            <div className={style.center}>
                <div className={style.desc}>
                    <div className={style.left}>
                        <p>Hello my name is Yoni. <br /> <br /> For the past few years I have
                            been creating content to do with coding on <a
                                href="https://instagram.com/kosiner.codes"
                                target="_blank">insatgram</a>, and on <a
                                    href="https://www.youtube.com/c/yonikosiner"
                                    target="_blank">YouTube</a>.</p>

                        <p>I'm a self-taught full stack developer (with a strong preference towards the backend, in the lords progarming laungage go).</p>

                        <p>I also sometimes stream on <a href="https://twitch.tv/yonikosiner"
                            target=" _blank">twitch</a> me coding.</p>

                        <h2>Other Stuff</h2>
                        <ul>
                            <li>I use <a href="https://github.com/neovim/neovim"
                                target="_blank">neovim</a> to code as the mouse
                                sucks</li>
                            <li>I started to learn to code when I was 11 with
                                python then when I was 12 I started to learn html &
                                css then from there I learnt javascript and found
                                out I like backend more and now I do all sorts of
                                things from React frontend to a backend in go (You
                                can find all my projects on <a
                                    href="https://gtihub.com/yonikosiner" target="_blank">github)</a></li>
                            <li>I use Neovim, Arch Linux, and Dvorak btw <a
                                href="https://github.com/yonikosiner/.dotfiles"
                                target=" _blank">(my .dotfiles)</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <ContactOther />
        </div>
    )
};
