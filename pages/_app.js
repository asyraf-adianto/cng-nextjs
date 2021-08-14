import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/tailwindNotus.css";
import "../styles/tailwindInternal.css";
import 'tailwindcss/tailwind.css'



import IndexNavbar from '../components/Navbar/IndexNavbar.js'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <IndexNavbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
