import styles from "@/styles/Footer.module.scss";
import Link from "next/link";

import DiscordLogo from "@/public/images/discord.svg";
import InstagramLogo from "@/public/images/instagram.svg";
import FacebookLogo from "@/public/images/facebook.svg";
import MailLogo from "@/public/images/newsletter.svg";
import TropicalImage from "./TropicalImage";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        {/* Socials */}
        <p>Find us on Social Media</p>
        <div className={styles.socialsList}>
          <Link href="https://discord.com/invite/j9dgf2q" target="_blank">
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
          <Link href="mailto:uclacyber@gmail.com" target="_blank">
            <TropicalImage img={MailLogo} alt="Mail Redirect" />
          </Link>
        </div>
      </div>

      <div className={styles.legal}>
        {/* Email & Copyright */}
        <a href="mailto:uclacyber@gmail.com">uclacyber@gmail.com</a>
        <p>© ACM Cyber 2024</p>
      </div>

      <div className={styles.joinUsOrElse}>
        {/* Join Us! */}
        <a href="https://tinyurl.com/acmcybernewsletter">
          Join our Mailing List!
        </a>
      </div>
    </footer>
  );
}
