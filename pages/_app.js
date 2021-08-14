import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/tailwindNotus.css";
import "../styles/tailwindInternal.css";
import 'tailwindcss/tailwind.css'



import IndexNavbar from '../components/Navbar/IndexNavbar.js'

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = React.useState(false);
  const activateDarkMode = () => {
    setDarkMode(true);
  };
  const deactivateDarkMode = () => {
    setDarkMode(false);
  };
  return (
    <div>
      <IndexNavbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
