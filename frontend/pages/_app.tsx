import '../styles/globals.css'
import Nav from "../components/navbar";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Component {...pageProps} />
        <Nav />
    </>
  )
}
export default MyApp
