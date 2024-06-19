import Link from "next/link";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";

import styles from "../styles/Discord.module.scss";

import Script from "next/script";

export default function Discord() {
  return (
    <div>
      <Navbar />
      <main className={styles.redirect}>
        <h1>Redirecting you now...</h1>
        <p className={styles.home}>
          <Link href="https://discord.gg/H9enFH7g">
            Click here if you are not redirected automatically
          </Link>
        </p>
      </main>
      <Script id="discord-redirect">
        {`window.location.href = "https://discord.gg/H9enFH7g"`}
      </Script>
      <Footer />
    </div>
  );
}
