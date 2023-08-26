import Image from "next/image";

import styles from "styles/Home.module.scss";
import CyberSeo from "@/components/CyberSeo";
import CyberWordmark from "@/components/CyberWordmark";

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
      </div>
    </>
  );
}
