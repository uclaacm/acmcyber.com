import styles from "@/styles/Footer.module.scss";
import Link from "next/link";
import Image from "next/image";

import DiscordLogo from "@/public/images/discord.svg";
import InstagramLogo from "@/public/images/instagram.svg";
import FacebookLogo from "@/public/images/fblogo.svg";
import Line from "@/public/images/Line 1.svg";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        {/* LEFT SIDE */}
        {/* Socials */}
        <div className={styles.left}>
          <div>
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
            <Image src={Line} alt="Line" />
          </div>

          {/* Copyright */}
          <div>
            <p>© acm.cyber 2023</p>
          </div>
        </div>

        {/* Email */}
        <div>
          <Link href="mailto:uclacyber@gmail.com" target="_blank">
            <p>uclacyber@gmail.com</p>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        {/* Mailing List */}
        <div>
          <button>JOIN OUR MAILING LIST</button>
        </div>
      </div>
    </footer>
  );
}
