import style from "../styles/contact-others.module.scss";
//import Image from "next/image";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function ContactOther() {
    //Check if user is on contact page
    const router = useRouter();

    function ContactPage(): boolean {
        let contactPage: boolean = false;

        if (router.pathname === "/contact") {
            contactPage = true;
        };

        return contactPage;
    };

    return (
        <div className={style.center}>
            <div className={style.main}>
            {/*Only show if you user is on any page other then contact because grammer would not make senes on contact page*/}
                {ContactPage() ? <h2>Other Places To Get In Touch</h2> : <h2>Contact me</h2>}
                <div>
                    <ol>
                        <li>
                            <strong>🐦</strong>
                            <a href="https://twitter.com/KosinerYoni" target=" _blank" style={{ textDecoration: "underLine" }}>Twitter{" "}</a>
                            - If you have got a quick quesiton or message pleases
                            Tweet {" "}
                            <a href="https://twitter.com/KosinerYoni" target=" _blank" style={{ textDecoration: "underLine" }}>@KosinerYoni{" "}</a>
                            and I'll get back to you as soon as I can.
                        </li>
                        <li>
                            <strong>📸</strong>
                            <a href="https://instagram.com/kosiner.codes" target=" _blank" style={{ textDecoration: "underLine" }}>Instagram Dm's{" "}</a>
                            - I also reply to all my Instagram Dm's if you have a
                            quick queston and don't want it to be public on twitter
                            feel free to drop me a instagram dm.
                        </li>
                        <li>
                            <strong>📨</strong>
                            <a href="mailto:yoni@kosiner.co.uk" target=" _blank" style={{ textDecoration: "underLine" }}>Email{" "}</a>
                            - If it's a longer thing, or you don't want it to be a
                            public tweet, please email me yoni@kosiner.co.uk.
                        </li>
                        {/*Only show if you user is on any page other then contact because this page takes you back to contact*/}
                        {ContactPage() ? null :
                            <li>
                                <strong>⌨️</strong>
                                <Link href="/contact"><a style={{ textDecoration: "underline" }}>Contact page {" "}</a></Link>
                                - Or you can just use my contact page
                            </li>
                        }
                    </ol>
                </div>
            </div>
        </div>
    );
};
