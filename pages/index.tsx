import Image from "next/image";

import styles from "styles/Home.module.scss";
import CyberSeo from "@/components/CyberSeo";
import CyberWordmark from "@/components/CyberWordmark";
import Flag from "@/public/images/flag.svg";
import TestTube from "@/public/images/test-tube.svg";

export default function HomePage() {
  return (
    <>
      <CyberSeo title="Home" />
      <div className="page">
        <div className={styles.welcomeHero}>
          <div className={styles.cyberDiamondRelativeContainer}>
            <div className={styles.cyberDiamond} />
          </div>
          <div className={styles.cyberDiamondInner}>
            <p className={styles.welcomeTo}>Welcome to</p>
            <CyberWordmark className={styles.acmCyber1} />
            <div className={styles.elevatorPitchWrap}>
              <p className={styles.elevatorPitch}>
                We’re a student-run organization on a mission to{" "}
                <b>make cybersecurity simple and accessible to everyone</b>.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.comeToTheDarkSide}>
          <p className={styles.motto}>
            Whether you’re a complete beginner or a cybersecurity expert,
          </p>
          <h1 className={styles.motto}>ACM Cyber has something for you.</h1>
          <div className={styles.cyberThings}>
            <CyberThing
              textIcon="ψβρ"
              title="Psi Beta Rho (PBR)"
              description="is our competitive Capture the Flag (CTF) team!"
              link="https://pbr.uclaacm.com/"
            />
            <CyberThing
              icon={TestTube}
              title="Cyber Labs"
              description="is where we research cyber and build cool things!"
              link="/events"
            />
            <CyberThing
              icon={Flag}
              title="LA CTF"
              description="is our annual CTF competition!"
              link="https://lactf.uclaacm.com/"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function CyberThing({
  icon,
  textIcon,
  iconAlt,
  title,
  description,
  link,
}: {
  icon?: any;
  textIcon?: string;
  iconAlt?: string;
  title: string;
  description: string;
  link: string;
}) {
  iconAlt = iconAlt ?? title + " Logo";
  return (
    <a href={link} draggable="false">
      <div className={styles.cyberThing}>
        <div className={styles.cyberThingIcon} draggable="true">
          {textIcon ? (
            <p role="img" aria-label={iconAlt}>
              {textIcon}
            </p>
          ) : (
            <img src={icon.src} alt={iconAlt} />
          )}
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
}
