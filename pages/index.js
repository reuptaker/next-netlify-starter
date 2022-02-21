import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
        <head>
    <meta charset="utf-8"></meta>
    <title>ɹǝʞɐʇdnǝɹ</title>
  </head>
  <main>
    <img src="https://github.com/reuptaker/next-netlify-starter/blob/47929318ab4753e31ab7323c71025faadc572694/pages/images/header-compressed.jpg" alt="Header"></img>
  </main>

      <Footer />
    </div>
  )
}
