import React from "react";
import Image from "next/image";
import styles from "@/styles/Sponsors.module.scss";

const laCtfLogos = [
  { src: "/images/crowdstrike.png", alt: "CrowdStrike" },
  { src: "/images/google_cloud.png", alt: "Google Cloud" },
  { src: "/images/latticework.png", alt: "Latticework" },
  { src: "/images/lockheed_martin.svg", alt: "Lockheed Martin" },
  { src: "/images/microsoft.jpg", alt: "Microsoft" },
  { src: "/images/ottersec.png", alt: "OtterSec" },
  {
    src: "/images/sandia_national_laboratories.svg",
    alt: "Sandia National Laboratories",
  },
  { src: "/images/spacex.png", alt: "SpaceX" },
  { src: "/images/trail-of-bits.png", alt: "Trail of Bits" },
  { src: "/images/tryhackme.png", alt: "TryHackMe" },
];

export default function Sponsors() {
  return (
    <main className={styles.sponsorsPage}>
      <h1>Our Sponsors</h1>
      <p>Thank you to everyone who helps make our events possible!</p>

      {/* ───── Gold Sponsors ───── */}
      <section className={styles.tierSection}>
        <h2 className={styles.tierTitle}>Gold Sponsors</h2>
        <div className={styles.logosGrid}>
          {/* TODO: Add Gold-tier logos here */}
        </div>
      </section>

      {/* ───── Silver Sponsors ───── */}
      <section className={styles.tierSection}>
        <h2 className={styles.tierTitle}>Silver Sponsors</h2>
        <div className={styles.logosGrid}>
          {/* TODO: Add Silver-tier logos here */}
        </div>
      </section>

      {/* ───── Bronze Sponsors ───── */}
      <section className={styles.tierSection}>
        <h2 className={styles.tierTitle}>Bronze Sponsors</h2>
        <div className={styles.logosGrid}>
          {/* TODO: Add Bronze-tier logos here */}
        </div>
      </section>

      {/* ───── LA CTF Sponsors ───── */}
      <section className={styles.tierSection}>
        <h2 className={styles.tierTitle}>LA CTF Sponsors</h2>
        <div className={styles.logosGrid}>
          {laCtfLogos.map(({ src, alt }) => (
            <div className={styles.logoItem} key={alt}>
              <Image
                src={src}
                alt={alt}
                width={160}
                height={80}
                objectFit="contain"
              />
            </div>
          ))}
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
