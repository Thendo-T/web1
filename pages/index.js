import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>First Pilgrim</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the <a href="https://nextjs.org">Gateway!</a>
        </h1>

        <p className={styles.description}>
          Checkout{' '}
          <code className={styles.code}>Gateway Links</code>
        </p>

        <div className={styles.grid}>
          <a href="https://aboutthendo.netlify.app/" className={styles.card}>
            <h2>Portfolio &rarr;</h2>
            <p>Find out about me in depth</p>
          </a>

          <a href="https://github.com/Thendo-T" className={styles.card}>
            <h2>Github &rarr;</h2>
            <p>Find and review my source codes on my github!</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Linkedin &rarr;</h2>
            <p>This here is my linkedin link to view my presence on the internet in a professional manner.</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Thendo-T"
          target="_blank"
          rel="noopener noreferrer"
        >
           by Thendo Thovhakale{' '}
          
        </a>
      </footer>
    </div>
  )
}
