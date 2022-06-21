import { useState } from "react";
import style from "../styles/nav.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
import useWindowSize from "../hooks/useWindowSize";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

export default function Nav() {
    const [open, setOpen] = useState<boolean>(false);

    const size = useWindowSize();

    function handleClick(): void {
        setOpen(!open)
    }

    function handleClickLogo(): void {
        if (open === true) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    return (
        <div className={style.nav}>
            <div className={style.logo}>
                <Link href="/">
                    <Image src={logo} alt="logo" />
                </Link>
            </div>
            {/*@ts-ignore*/}
            {size.width > 980 ? (
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
                    {/*<Link href="/book-notes">
                        <a>📒 BOOK NOTES</a>
                    </Link>
                    <Link href="/blog/topics">
                        <a>📝 ARTICLES</a>
                    </Link>*/}
                </div>
            ) : (
                <div className={style.hamburger}>
                    <button style={{ background: "none", border: "none" }} onClick={handleClick}>{open ? <MdClose size="30px" /> : <FiMenu size="30" />}</button>
                </div>
            )}
            {/*@ts-ignore*/}
            {size.width < 980 && open && (
                <div className={style.hamburgerLinks}>
                    <Link href="/contact">
                        <a onClick={handleClick}>📇 CONTACT</a>
                    </Link>
                    <Link href="/about">
                        <a onClick={handleClick}>👨‍💼 ABOUT</a>
                    </Link>
                    <Link href="/portfolio">
                        <a onClick={handleClick}>💼 PORTFOLIO</a>
                    </Link>
                </div>
            )}
        </div>
    );
};
