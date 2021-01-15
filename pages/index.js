import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UBQUB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          layout="fill"
          src="/assets/images/site.jpeg"
          alt="Picture of the author"
        />
      </main>
    </div>
  )
}
