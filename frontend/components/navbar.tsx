import style from "../styles/nav.module.scss";
import Image from "next/image";
import logo from "../public/logo.svg";

export default function Nav() {
    return (
        <div>
            <div className={style.logo}>
                <Image src={logo} alt="logo"/>
            </div>
        </div>
    );
};
