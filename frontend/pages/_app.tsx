import '../styles/globals.css'
import Nav from "../components/navbar";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Nav />
        <Component {...pageProps} />
    </>
  )
}
export default MyApp
