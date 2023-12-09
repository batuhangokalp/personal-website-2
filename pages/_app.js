import Layout from '@/components/GlobalComponents/Layout'
import '@/styles/globals.css'
// Örneğin _app.js veya başka bir global dosyada
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
