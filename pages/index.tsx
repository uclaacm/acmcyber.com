import Image from "next/image";

import { NextSeo } from "next-seo";

import { CSSProperties } from "react";

import fs from "node:fs";

import { Carousel } from "@/components/Carousel";

import HomeBanner from "@/public/images/HomeBanner.svg";

import styles from "styles/Home.module.scss";

const bannerStyle: CSSProperties = {
  position: "relative",
  width: "100%",
  height: "auto",
  objectFit: "contain",
};

type DataProps = {
  images: string[];
};

export function getStaticProps() {
  const images = [...fs.readdirSync("./public/images/carousel")].map(
    (p) => `images/carousel/${p}`
  );

  return { props: { images } };
}

export default function HomePage({ images }: DataProps) {
  return (
    <>
      <NextSeo
        title="Home | ACM Cyber at UCLA"
        description="ACM Cyber at UCLA is a group of students dedicated to creating a community in which both experts and beginners alike can grow in the field of cybersecurity skills and knowledge. We want to make cybersecurity simple and accessible for everyone!"
        openGraph={{
          images: [
            {
              url: "https://cyber.uclaacm.com/images/cyber-motif-applied.png",
              width: 990,
              height: 555,
              alt: "ACM Cyber logo",
            },
          ],
          site_name: "ACM Cyber at UCLA",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="page">
        <Image src={HomeBanner} style={bannerStyle} alt="ACM Cyber" />

        <div className={styles["home-boxes"]}>
          <div className={styles["home-box"]}>
            <h1>WELCOME TO ACM CYBER!</h1>
            <p>
              Our mission is to create a community in which both experts and
              beginners alike can grow in the field of cybersecurity skills and
              knowledge. We want to make cybersecurity simple and accessible for
              everyone.
            </p>
            <p>
              Cybersecurity sounds hard. <b>We get it.</b> Throughout each
              quarter, we hold workshops geared towards both novices and
              hobbyists curious about the world of cybersecurity, covering
              topics such as forensics, web hacking, cryptography, and reverse
              engineering. We also hold Capture The Flag (CTF) competitions in
              which teams participate collaboratively to solve cybersecurity
              challenges. Our events are <b>open to anyone and everyone</b>,
              even if you have no experience whatsoever!
            </p>
          </div>
          <div className={styles["home-box"]}>
            <h1>JOIN US!</h1>
            <p>
              Want to know what we&apos;re doing? Join our{" "}
              <a href="https://discord.com/invite/j9dgf2q">Discord</a> to stay
              updated on our latest activities!
            </p>
            <p>
              Want to learn or practice more? Check out our archive for video
              recordings of past workshops as well as our workshops and
              challenges site for practice challenges!
            </p>
            <p>
              Curious about cybersecurity? Sign up for our{" "}
              <a href="https://tinyurl.com/acmcybernewsletter">newsletter</a>{" "}
              where we send out a newsletter every week about upcoming ACM Cyber
              events, interesting cybersecurity news, breakdown the steps to
              past security exploits, and write-ups about CTFs!
            </p>
          </div>
        </div>

        <Carousel images={images} />
      </div>
    </>
  );
}
