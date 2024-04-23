import styles from "@/styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

import CyberLogo from "@/public/images/cyber-logo.svg";
import CyberWordmark from "./CyberWordmark";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [open, setOpen] = useState(Array(5).fill(false));
  const router = useRouter();

  // Close the navbar when the route changes
  useEffect(() => {
    setOpen(Array(5).fill(false));
  }, [router.pathname, globalThis.location?.hash]);

  return (
    <nav className={styles.navbar}>
      <input
        className={styles.hamburgerToggle}
        id="hamburger-toggle"
        type="checkbox"
        checked={open[0]}
        onChange={() => {
          setOpen([!open[0], ...open.slice(1)]);
        }}
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
        {["about", "events", "blog", "links"].map((x, i) => (
          <input
            className={`${styles.subnavToggle} ${styles[`subnav-${x}-toggle`]}`}
            id={`subnav-${x}-toggle`}
            key={x}
            type="checkbox"
            checked={open[i + 1]}
            onChange={() => {
              setOpen([
                ...open.slice(0, i + 1),
                !open[i + 1],
                ...open.slice(i + 2),
              ]);
            }}
          ></input>
        ))}

        <label htmlFor="subnav-about-toggle">
          <li>
            About
            <ul>
              <Link href="/about#about-top">
                <li>Who We Are</li>
              </Link>
              <Link href="/about#what-we-do">
                <li>What We Do</li>
              </Link>
              <Link href="/members">
                <li>Members</li>
              </Link>
            </ul>
          </li>
        </label>
        <label htmlFor="subnav-events-toggle">
          <li>
            Events
            <ul>
              <Link href="/events">
                <li>Upcoming</li>
              </Link>
              <Link href="/archive">
                <li>Archive</li>
              </Link>
            </ul>
          </li>
        </label>
        <label htmlFor="subnav-blog-toggle">
          <li>
            Blog
            <ul>
              <Link href="/blog">
                <li>The Cyblog</li>
              </Link>
              <Link href="https://pbr.acmcyber.com/blog">
                <li>The PBR Blog</li>
              </Link>
            </ul>
          </li>
        </label>
        <label htmlFor="subnav-links-toggle">
          <li>
            Links
            <ul>
              <Link href="https://discord.com/invite/j9dgf2q">
                <li>Discord</li>
              </Link>
              <Link href="https://platform.acmcyber.com">
                <li>CTF Platform</li>
              </Link>
              <Link href="https://pbr.acmcyber.com">
                <li>PBR</li>
              </Link>
              <Link href="https://lac.tf">
                <li>LA CTF</li>
              </Link>
              <Link href="https://status.acmcyber.com">
                <li>Status</li>
              </Link>
            </ul>
          </li>
        </label>
        <li>
          <button className={styles.join}>
            <Link href="/join">Join Us</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}
