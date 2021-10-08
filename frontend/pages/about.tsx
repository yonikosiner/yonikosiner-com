import style from "../../styles/about.module.scss"
import Head from "next/head";
import ContactOther from "../components/contact-ways"

export default function About() {
    return (
        <div>
            <Head>
                <title>Yoni Kosiner | About Page</title>
                <meta name="About page" content="About Yoni Kosiner" />
            </Head>
            <ContactOther />
        </div>
    )
};
