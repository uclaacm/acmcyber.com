import styles from "@/styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

import CyberLogo from "@/public/images/cyber-logo.svg";
import CyberWordmark from "./CyberWordmark";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <input
        className={styles["hamburger-toggle"]}
        id="hamburger-toggle"
        type="checkbox"
      ></input>

      {/* LEFT PART OF THE NAVBAR */}
      <Link
        className={`${styles.logo} ${styles["tropical-image-strikes-again"]}`}
        href="/"
      >
        <Image src={CyberLogo} alt="ACM Cyber Logo" />
        <CyberWordmark fontSize="16px" lineHeight="40px" />
      </Link>

      {/* SPACER */}
      <div className={styles.spacer} />

      {/* RIGHT PART OF THE NAVBAR */}
      <label
        className={styles["hamburger-container"]}
        htmlFor="hamburger-toggle"
      >
        <div className={styles["hamburger-button"]}></div>
      </label>

      <ul className={styles.right}>
        <Link className={styles.hoverable} href="/about">
          <li>About</li>
        </Link>
        <Link className={styles.hoverable} href="/events">
          <li>Events</li>
        </Link>
        <Link className={styles.hoverable} href="/pbr">
          <li>PBR</li>
        </Link>
        <Link className={styles.hoverable} href="/labs">
          <li>Labs</li>
        </Link>
        <Link className={styles.hoverable} href="/blog">
          <li>Blog</li>
        </Link>
      </ul>
    </nav>
  );
}
