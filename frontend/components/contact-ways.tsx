//import style from "../styles/contact-others.module.scss";
//import Image from "next/image";

import Link from "next/link";
import React from "react";

export default function ContactOther() {
    return (
        <div>
            <h2>Get In Touch</h2>
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
                    <li>
                        <strong>⌨️</strong>
                        <Link href="/contact"><a>Contact page</a></Link>
                        - Or you can just use my contact page
                    </li>
                </ol>
            </div>
        </div>
    );
};
