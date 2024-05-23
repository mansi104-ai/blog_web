import { PreviewProvider} from '../lib/PreviewProvider';

export default function App({ Component, pageProps }) {
  return (
    <PreviewProvider token={pageProps.token}>
      <Component {...pageProps} />
    </PreviewProvider>
  );
}
