import Header from '../components/Header/Header'
import GlobalStyle from '../styles/GlobalStyles'
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  console.log(router);

  return (
    <>
      <GlobalStyle />
      {router.asPath !== '/' && <Header />}
      <Component {...pageProps} />
    </>
  )
}

