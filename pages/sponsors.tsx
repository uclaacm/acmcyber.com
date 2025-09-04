import React from "react";
import Image from "next/image";
import styles from "@/styles/Sponsors.module.scss";
import { laCtfLogos } from "@/data/sponsors";

export default function Sponsors() {
  return (
    <main className={styles.sponsorsPage}>
      <h1>Our Sponsors</h1>
      <p>Thank you to everyone who helps make our events possible!</p>

      <section className={styles.tierSection}>
        <h2 className={styles.tierTitle}>Club Sponsors</h2>
        <div className={styles.logosGrid}>
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
                style={{ objectFit: "contain" }}  
              />
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.calloutSection} ${styles.darkTheme}`}>
        <h2>Interested in sponsoring?</h2>
        <p>
          Please contact us at{" "}
          <a href="mailto:uclacyber+sponsor@gmail.com">uclacyber+sponsor@gmail.com</a>! Sponsors
           receive a variety of benefits, from resume books to recruiting
          workshops. We are happy to discuss what works best for you!
        </p>
      </section>
    </main>
  );
}
