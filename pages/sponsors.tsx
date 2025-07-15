// pages/sponsors.tsx

import React from "react";
import Image from "next/image";
import styles from "@/styles/Sponsors.module.scss";

export default function Sponsors() {
  return (
    <main className={styles.sponsorsPage}>
      <h1>Our Sponsors</h1>
      <p>Thank you to everyone who helps make our events possible!</p>

      {/* ───── Gold Sponsors ───── */}
      <section className={styles.tierSection}>
        <h2 className={styles.tierTitle}>Gold Sponsors</h2>
        <div className={styles.logosGrid}>
          {/*
            TODO: Add your <Image> logos here, wrapped in a <div className={styles.logoItem}>
            Example:
            <div className={styles.logoItem}>
              <Image src={YourGoldLogo} alt="Gold Sponsor Name" width={160} height={80} />
            </div>
          */}
        </div>
      </section>

      {/* ───── Silver Sponsors ───── */}
      <section className={styles.tierSection}>
        <h2 className={styles.tierTitle}>Silver Sponsors</h2>
        <div className={styles.logosGrid}>
          {/*
            TODO: Silver-tier logos go here
          */}
        </div>
      </section>

      {/* ───── Bronze Sponsors ───── */}
      <section className={styles.tierSection}>
        <h2 className={styles.tierTitle}>Bronze Sponsors</h2>
        <div className={styles.logosGrid}>
          {/*
            TODO: Bronze-tier logos go here
          */}
        </div>
      </section>

      {/* ───── LA CTF Sponsors ───── */}
      <section className={styles.tierSection}>
        <h2 className={styles.tierTitle}>LA CTF Sponsors</h2>
        <div className={styles.logosGrid}>
          {/*
            TODO: LA CTF sponsor logos go here
          */}
        </div>
      </section>

      {/* ─── Call-out: Interested in sponsoring? ─── */}
      <section className={styles.calloutSection}>
        <h2>Interested in sponsoring?</h2>
        <p>
          Please contact us at{" "}
          <a href="mailto:uclacyber@gmail.com">uclacyber@gmail.com</a>! Sponsors
          can receive a variety of benefits, from resume books to recruiting
          workshops. We are happy to discuss what works best for you!
        </p>
      </section>
    </main>
  );
}
