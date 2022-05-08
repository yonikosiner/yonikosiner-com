import Head from "next/head";
import style from "../styles/portfolio.module.scss";
import Github from "../hooks/useGithub";
import portfolioCards from "../data/latest_projects";
import PortfolioCard, { portfolioCardProps } from "../components/PortfolioCard";
import { Repositories } from "../types";


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
                {portfolioCards.map((card: portfolioCardProps) => (
                    <PortfolioCard title={card.title} body={card.body} link={card.link} key={card.title} />
                ))}
            </div>
            {/*Github repos*/}
            <div className={style.center}>
                <div className={style.otherProjects}>
                    <h1>Check out more of my projects from my <a href="https://github.com/yonikosiner" target=" _blank">github</a></h1>
                    {!github.length && <p>Loading...</p>}
                    {github.map((repo: Repositories) => (
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
