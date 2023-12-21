import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Krishna - AI Researcher</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Krishna Shah (Template by Skander Blaiti)" />
        <meta name="keywords" content="AI, Neural Networks, Robotics, Research" />
        <meta name="description" content="BOZOI am a talented AI researcher and have done in-depth research in computer vision, natural language processing, and computational neurology." />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content="Krishna - AI Researcher" />
        <meta property="og:locale" content="en_GB" />
        <title data-rh="true">OOOGA BOOGA</title>
        <meta data-rh="true" property="og:type" content="website"/>
        <meta data-rh="true" property="og:title" content="Krishna - AI Researcher"/>
        <meta data-rh="true" property="og:image" content="/images/blaiti.png"/>
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* About */}
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home;
