import Link from "next/link";
import styles from "styles/Home.module.scss";
import joinStyles from "@/styles/Join.module.scss";
import CyberSeo from "@/components/CyberSeo";
import CyberWordmark from "@/components/CyberWordmark";
import Flag from "@/public/images/flag.svg";
import Boba from "@/public/images/boba.svg";
import TestTube from "@/public/images/test-tube.svg";
import CyberLogoInverted from "@/public/images/cyber-logo-light-inverted.png";

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
              icon={CyberLogoInverted}
              title="Cyber Academy"
              description="Learn cybersecurity skills from beginner to advanced topics!"
              link="/about#cyber-academy"
            />
            <CyberThing
              textIcon="ψβρ"
              title="Psi Beta Rho (PBR)"
              description="UCLA's competitive Capture the Flag (CTF) team!"
              link="https://pbr.acmcyber.com/"
            />
            <CyberThing
              icon={TestTube}
              title="Cyber Lab"
              description="Hands-on security projects!"
              link="/about#cyber-lab"
            />
            <CyberThing
              icon={Flag}
              title="LA CTF"
              description="Our annual CTF competition & security conference!"
              link="https://lac.tf"
            />
            <CyberThing
              icon={Boba}
              title="And More!"
              description="Career panels, talks, socials, and much more!"
              link="/about#misc"
            />
          </div>
        </div>
        <div className={styles.weHaveCookies}>
          <h1 className={styles.motto}>
            Ready to start <em>your</em> cybersecurity journey?
          </h1>
          <div className={styles.socials}>
            <button className={joinStyles.membershipForm}>
              <Link href="https://discord.com/invite/j9dgf2q">
                Join our Discord!
              </Link>
            </button>
            <button className={joinStyles.membershipForm}>
              <Link href="/join">Fill out the Membership Form!</Link>
            </button>
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
    <Link href={link} draggable="false">
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
    </Link>
  );
}
