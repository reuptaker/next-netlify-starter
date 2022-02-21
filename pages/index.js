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
    <img src="images/header-compressed.jpg" alt="Header">
  </main>

      <Footer />
    </div>
  )
}
