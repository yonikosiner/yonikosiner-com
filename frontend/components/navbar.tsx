import style from "../styles/nav.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";

export default function Nav() {
    return (
        <div className={style.nav}>
            <div className={style.logo}>
                <Link href="/">
                    <a>
                        <Image src={logo} alt="logo"/>
                    </a>
                </Link>
            </div>
            <div className={style.links}>
                <Link href="/contact">
                    <a>📇 CONTACT</a>
                </Link>
                <Link href="/about">
                    <a>👨‍💼 ABOUT</a>
                </Link>
                <Link href="/portfolio">
                    <a>💼 PORTFOLIO</a>
                </Link>
                <Link href="/book-notes">
                    <a>📒 BOOK NOTES</a>
                </Link>
                <Link href="/topics">
                    <a>📝 ARTICLES</a>
                </Link>
            </div>
        </div>
    );
};
