import Head from 'next/head'
import MainPage from '../components/MainPage'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Web Development</title>
        <meta name="description" content="Web Development" />
      </Head>
      <main>
        <MainPage />
      </main>
    </div >
  )
}
