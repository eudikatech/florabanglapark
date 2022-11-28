import styles from '../styles/Layout.module.css';
import Nav from '../components/Nav';
import Head from 'next/head';
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div className={styles.container}>
        <Head>
        <link href='https://api.mapbox.com/mapbox.js/v3.2.1/mapbox.css' rel='stylesheet' />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossorigin="anonymous"
        />
        <link rel="font-awesome-css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
        <link rel="font-awesome-solid-css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/solid.min.css" />
        <link rel="font-awesome-svg-css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/svg-with-js.min.css" />
        </Head>
        <main className={styles.main}>
          {children}
        </main>
      </div>
      
      <script src='https://api.mapbox.com/mapbox.js/v3.2.1/mapbox.js'></script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></Script>
      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>
      <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
      crossorigin="anonymous"></Script>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/js/all.min.js'></script>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/js/solid.min.js'></script>
      <script src='https://api.mapbox.com/mapbox.js/v3.2.1/mapbox.js'></script>
    </div>
  )
}

export default Layout