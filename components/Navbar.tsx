import styles from "@/styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

import CyberLogo from "@/public/images/cyber-logo.svg";
import CyberWordmark from "./CyberWordmark";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <input
        className={styles.hamburgerToggle}
        id="hamburger-toggle"
        type="checkbox"
      ></input>

      {/* LEFT PART OF THE NAVBAR */}
      <Link
        className={`${styles.logo} ${styles.tropicalImageStrikesAgain}`}
        href="/"
      >
        <Image src={CyberLogo} alt="ACM Cyber Logo" />
        <CyberWordmark fontSize="16px" lineHeight="40px" />
      </Link>

      {/* SPACER */}
      <div className={styles.spacer} />

      {/* RIGHT PART OF THE NAVBAR */}
      <label className={styles.hamburgerContainer} htmlFor="hamburger-toggle">
        <div className={styles.hamburgerButton}></div>
      </label>

      <ul className={styles.right}>
        <Link className={styles.hoverable} href="/about">
          <li>About</li>
        </Link>
        <Link className={styles.hoverable} href="/members">
          <li>Members</li>
        </Link>
        <Link className={styles.hoverable} href="/events">
          <li>Events</li>
        </Link>
        <Link className={styles.hoverable} href="/blog">
          <li>Blog</li>
        </Link>
        <Link className={styles.hoverable} href="/archive">
          <li>Archive</li>
        </Link>
        <Link className={styles.join} href="/join">
          <li>Join Us</li>
        </Link>
      </ul>
    </nav>
  );
}
