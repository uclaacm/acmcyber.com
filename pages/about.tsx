import { NextSeo } from "next-seo";

import fs from "node:fs";

import { Carousel } from "@/components/Carousel";

type DataProps = {
  images: string[];
};

export function getStaticProps() {
  const images = [...fs.readdirSync("./public/images/carousel")].map(
    (p) => `images/carousel/${p}`
  );

  return { props: { images } };
}

export default function About({ images }: DataProps) {
  return (
    <>
      <NextSeo
        title="About | ACM Cyber at UCLA"
        description="Learn more about ACM Cyber at UCLA!"
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
        <h1>About</h1>

        <h2>Who Are We</h2>
        <p>
          We are a group of hackers, CTFers and developers passionate about
          cybersecurity. We break things for fun and work to improve our skills
          in a variety of disciplines, whether it be rev, pwn, crypto, or
          something entirely different. We aim to nurture the love of
          cybersecurity in the students at UCLA.
        </p>
        <Carousel images={images} />
      </div>
    </>
  );
}
