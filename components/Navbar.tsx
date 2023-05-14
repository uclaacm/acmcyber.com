import styles from "@/styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

import CyberLogoLight from "@/public/images/cyber-logo-light.svg";
import CyberWordmarkLight from "@/public/images/cyber-wordmark-light.svg";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      {/* LEFT PART OF THE NAVBAR */}
      <Link className={[styles.left, styles.homebutton].join(" ")} href="/">
        <Image src={CyberLogoLight} alt="ACM CYBER" />
        <Image src={CyberWordmarkLight} alt="" />
      </Link>

      {/* SPACER */}
      <div className={styles.spacer} />

      {/* RIGHT PART OF THE NAVBAR */}
      <div className={styles.right}>
        <Link className={styles.hoverable} href="/about">
          About
        </Link>
        <Link className={styles.hoverable} href="/team">
          Team
        </Link>
        <Link className={styles.hoverable} href="/blog">
          Blog
        </Link>
        <Link className={styles.hoverable} href="/events">
          Events
        </Link>
        <Link className={styles.hoverable} href="/archive">
          Archive
        </Link>
      </div>
    </div>
  );
}
