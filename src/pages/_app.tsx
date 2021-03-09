import Header from '../components/Header/Header'
import GlobalStyle from '../styles/GlobalStyles'
import { useRouter } from 'next/router';
import { AuthProvider } from '../context/Authentication';
import { PopUpProvider } from '../context/PopUp';
import Head from 'next/head';


export default function MyApp({ Component, pageProps }) {
  const router = useRouter();


  return (
    <>
      <Head>
        <title>Navedex</title>
      </Head>
      <GlobalStyle />
      <AuthProvider>
        <PopUpProvider>
          {router.asPath !== '/' && <Header />}
          <Component {...pageProps} />
        </PopUpProvider>
      </AuthProvider>
    </>
  )
}

