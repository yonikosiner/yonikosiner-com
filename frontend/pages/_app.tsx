import '../styles/globals.css'
import Nav from "../components/navbar";
import Footer from "../components/footer";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Nav />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}
export default MyApp
