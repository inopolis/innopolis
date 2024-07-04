import '../styles/globals.css';
import { AppProps } from 'next/app';

function Innopolis({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default Innopolis
