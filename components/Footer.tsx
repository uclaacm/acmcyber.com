import styles from "@/styles/Footer.module.scss";
import Link from "next/link";
import Image from "next/image";

import DiscordLogo from "@/public/images/discord.svg";
import InstagramLogo from "@/public/images/instagram.svg";
import FacebookLogo from "@/public/images/facebook.svg";
import MailLogo from "@/public/images/newsletter.svg";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.vertCenter}>
          <div className={styles.top}>
            {/* Socials */}
            <Link href="https://discord.com/invite/j9dgf2q" target="_blank">
              <Image src={DiscordLogo} alt="Discord Redirect" />
            </Link>
            <Link href="https://www.instagram.com/uclacyber" target="_blank">
              <Image src={InstagramLogo} alt="Instagram Redirect" />
            </Link>
            <Link
              href="https://www.facebook.com/groups/uclacyber"
              target="blank"
            >
              <Image src={FacebookLogo} alt="Facebook Redirect" />
            </Link>
            <Link href="mailto:uclacyber@gmail.com" target="blank">
              <Image src={MailLogo} alt="Mail Redirect" />
            </Link>
          </div>

          <div className={styles.bottom}>
            {/* Copyright */}
            <p className={styles.footerText}>© ACM Cyber 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
