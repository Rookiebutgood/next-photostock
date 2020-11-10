import '../styles/main.scss'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return <div>
    <Header isOpen={false} />
      <Component {...pageProps} />
  </div>
}

export default MyApp