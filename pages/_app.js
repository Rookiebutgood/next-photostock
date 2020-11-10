import '../styles/main.scss'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return <div>
    <Header isOpen={false} />
    <div style={{marginTop: '80px'}}>
      <Component {...pageProps} />
    </div>
  </div>
}

export default MyApp