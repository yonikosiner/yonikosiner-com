import style from "../styles/about.module.scss"

export default function AboutHero() {
    return (
        <div className={style.hero}>
            <h1 className={style.title}>👋 Hello Welcome to my About me Page</h1>

            <p className={style.workingOn}>This is my about me page where you
            can find out more abut who I am and what I'm working on</p>
        </div>
    )
};
