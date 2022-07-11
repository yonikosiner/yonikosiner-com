import '../styles/globals.css'
import Nav from "../components/navbar";
import Footer from "../components/footer";
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
    const HomePage: boolean = useRouter().pathname === "/";

    return (
        <>
            <Nav />
            {HomePage ? <Component {...pageProps} /> : <Component style={{ minHeight: "120vh" }} {...pageProps} />}
            <Footer />
        </>
    )
}
export default MyApp
