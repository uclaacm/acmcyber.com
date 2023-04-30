import styles from "@/styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

import CyberLogoLight from "@/public/images/cyber-logo-light.svg";
import CyberWordmarkLight from "@/public/images/cyber-wordmark-light.svg";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      {/* LEFT PART OF THE NAVBAR */}
      <div className="Left">
        <Link href="/" className={styles.homebutton}>
          <Image src={CyberLogoLight} alt="ACM CYBER" />
          <Image src={CyberWordmarkLight} alt="" />
        </Link>
      </div>

      {/* SPACER */}
      <div className={styles.spacer} />

      {/* RIGHT PART OF THE NAVBAR */}
      <div className="Right">
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/events">Events</Link>
        <Link href="/archive">Archive</Link>
      </div>
    </div>
  );
}
