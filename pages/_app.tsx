import Head from "next/head";

import type { AppProps } from "next/app";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  const css = [
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap",
    "https://fonts.googleapis.com/css2?family=Nova+Mono&display=swap",
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap",
  ];

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
        <meta name="theme-color" content="#ffba44" />
        {css.map((href) => (
          <link rel="stylesheet" href={href} />
        ))}
      </Head>

      <Navbar />

      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
}
