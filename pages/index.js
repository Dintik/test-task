import Head from 'next/head'
import Download_btn from '../components/download_btn'

export default function Home() {
  return (
    <>
      <Head>
        <title>main</title>
      </Head>
      <Download_btn label="Download Now" href="#">
      </Download_btn>
    </>
  )
}