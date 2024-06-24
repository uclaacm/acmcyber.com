import Link from "next/link";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";

import styles from "../styles/Discord.module.scss";

import Script from "next/script";

export default function Discord() {
  return (
    <div>
      <meta http-equiv="refresh" content="0; URL='https://discord.com/invite/j9dgf2q'" />
      <Navbar />
      <main className={styles.redirect}>
        <h1>Redirecting you now...</h1>
        <p className={styles.home}>
          <Link href="https://discord.com/invite/j9dgf2q">
            Click here if you are not redirected automatically
          </Link>
        </p>
      </main>
      <Script id="discord-redirect">
        {`window.location.href = "https://discord.com/invite/j9dgf2q"`}
      </Script>
      <Footer />
    </div>
  );
}
