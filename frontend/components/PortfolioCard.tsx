import React, { useState } from "react";
import style from "../styles/portfolio.module.scss";

export interface portfolioCardProps {
    title: string;
    body: string;
    link: string;
};

export default function PortfolioCard(props: portfolioCardProps) {
    const [readMoreOopen, setReadMoreOpen] = useState<boolean>(false);

    return (
        <div>
            <div className={style.project}>
                <div className={style.text}>
                    <h2>{props.title}</h2>
                    {readMoreOopen && (
                        <p>{props.body}</p>
                    )}
                    <button className={style.readMore} onClick={() => setReadMoreOpen(!readMoreOopen)}>Read More</button>
                    <a href={props.link} target=" _blank">View code</a>
                </div>
            </div>
        </div>
    )
};
