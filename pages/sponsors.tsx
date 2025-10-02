import React from "react";
import Image from "next/image";
import styles from "@/styles/Sponsors.module.scss";
import { clubSponsors, lactfSponsors, Sponsor } from "@/data/sponsors";
import CyberSeo from "@/components/CyberSeo";

function SponsorsTierSection({
  tier,
  sponsors,
}: {
  tier: string;
  sponsors: Sponsor[];
}) {
  return (
    <section className={styles.tierSection}>
      <h2 className={styles.tierTitle}>
        {tier} Sponsor{sponsors.length != 1 && "s"}
      </h2>
      <div className={styles.sponsorsGrid}>
        {sponsors.map(({ src, alt, link }) => (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className={styles.sponsorCard} key={alt}>
              <Image
                src={src}
                alt={alt}
                width={160}
                height={80}
                style={{ objectFit: "contain" }}
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function Sponsors() {
  return (
    <>
      <CyberSeo
        title="Sponsors"
        description="Thank you to everyone who helps makes our events possible!"
      />
      <div className="page">
        <div className="content">
          <h1>Sponsors</h1>
          <p>Thank you to everyone who helps make our events possible!</p>
          <SponsorsTierSection tier="Club" sponsors={clubSponsors} />
          <SponsorsTierSection tier="LA CTF" sponsors={lactfSponsors} />
        </div>
        <section className={styles.calloutSection}>
          <h2>Interested in sponsoring?</h2>
          <p>
            Please contact us at{" "}
            <a href="mailto:uclacyber+sponsor@gmail.com">
              uclacyber+sponsor@gmail.com
            </a>
            ! Sponsors receive a variety of benefits, from resume books to
            recruiting workshops. We are happy to discuss what works best for
            you!
          </p>
        </section>
      </div>
    </>
  );
}
