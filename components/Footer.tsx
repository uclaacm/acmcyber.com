import styles from "@/styles/Footer.module.scss";
import Link from "next/link";

import DiscordLogo from "@/public/images/discord.svg";
import InstagramLogo from "@/public/images/instagram.svg";
import FacebookLogo from "@/public/images/facebook.svg";
import LinkedinLogo from "@/public/images/linkedin.svg";
import TropicalImage from "./TropicalImage";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        {/* Socials */}
        <p>Find us on Social Media</p>
        <div className={styles.socialsList}>
          <Link href="/discord" target="_blank">
            <TropicalImage img={DiscordLogo} alt="Discord Redirect" />
          </Link>
          <Link href="https://www.instagram.com/uclacyber" target="_blank">
            <TropicalImage img={InstagramLogo} alt="Instagram Redirect" />
          </Link>
          <Link
            href="https://www.facebook.com/groups/uclacyber"
            target="_blank"
          >
            <TropicalImage img={FacebookLogo} alt="Facebook Redirect" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/uclacyber"
            target="_blank"
          >
            <TropicalImage img={LinkedinLogo} alt="LinkedIn Redirect" />
          </Link>
        </div>
      </div>

      <div className={styles.legal}>
        {/* Email & Copyright */}
        <a href="mailto:uclacyber@gmail.com">uclacyber@gmail.com</a>
        <p>© ACM Cyber 2024</p>
      </div>

      <div className={styles.githubPages}>
        {/* Join Us! */}
        <a href="https://github.com/uclaacm/acmcyber.com">
          Powered by Github Pages
        </a>
      </div>
    </footer>
  );
}
