import styles from "styles/Home.module.scss";
import Image from "next/image";
import HomeBanner from "@/public/images/HomeBanner.svg";
import Discord from "@/public/images/home-discord.svg";
import Newsletter from "@/public/images/home-newsletter.png";
import { CSSProperties, useEffect, useState } from "react";
import Head from "next/head";

import ButtonLink from "@/components/ButtonLink";
import { PathSlug, getBlogPostPaths } from "@/components/BlogUtils";

const bannerStyle: CSSProperties = {
  position: "relative",
  width: "100%",
  height: "auto",
  objectFit: "contain",
};

export default function HomePage() {
  //Blog Links START
  // const [blogPaths, setBlogPaths] = useState<string[]>([]);
  // useEffect(() => {
  //   const fetchPaths = async () => {
  //     const data: PathSlug[] = await getBlogPostPaths();
  //     setBlogPaths(data.map(json => json.params.slug));
  //   };
  //   fetchPaths();
  // }, []);
  // console.log(blogPaths)
  //Blog Links END
  return (
    <>
      <div className={styles["home"]}>
        <Head>
          <title>Home | ACM Cyber at UCLA</title>
        </Head>

        <Image src={HomeBanner} style={bannerStyle} alt="ACM CYBER" />

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
            <div className={styles["image-left"]}>
              <Image src={Discord} alt="Discord icon" width={50} height={50} />
              <p>
                Want to know what we&apos;re doing? Join our{" "}
                <a href="https://discord.com/invite/j9dgf2q">Discord</a> to stay
                updated on our latest activities!
              </p>
            </div>
            <p>
              Want to learn or practice more? Check out our archive for video
              recordings of past workshops as well as our workshops and
              challenges site for practice challenges!
            </p>
            <div className={styles["image-right"]}>
              <p>
                Curious about cybersecurity? Sign up for our{" "}
                <a href="https://tinyurl.com/acmcybernewsletter">newsletter</a>{" "}
                where we send out a newsletter every week about upcoming ACM
                Cyber events, interesting cybersecurity news, breakdown the
                steps to past security exploits, and write-ups about CTFs!
              </p>
              <Image
                src={Newsletter}
                alt="Newsletter icon"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
        {/* <div>
          {blogPaths.map((path, index) => <ButtonLink key={index} href={path}>"article"</ButtonLink>)}
        </div> */}
      </div>
    </>
  );
}
