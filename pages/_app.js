import HeadMeta from '../components/HeadMeta'
import Layout from '../components/Layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <HeadMeta  />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
