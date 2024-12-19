import { AppProps } from 'next/app';
import '../styles/global.css';

function App({ Component, pageProps }: AppProps): React.ReactElement {
    return <Component {...pageProps} />;
}

export default App;
