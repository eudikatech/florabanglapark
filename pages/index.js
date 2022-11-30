import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Activities from '../components/Activities'
import Footer from '../components/Footer'
import Facilities from '../components/Facilities'
import Atractions from '../components/Atractions'
import Mappage from "../components/Mappage"


export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <Hero />
        <Atractions/>
        <Activities />
        <Mappage/>
        <Facilities />
      </main>

      <footer className={styles.footer}>
        <Footer/> 
      </footer>
    </div>
  )
}
