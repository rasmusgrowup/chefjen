import Meta from './Meta'
import Header from './Header'
import Footer from '../components/Footer'

export default function Layout({children}) {
  return (
    <>
      <Meta />
      <Header />
      {children}
      <Footer />
    </>
  )
}
