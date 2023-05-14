import { NextSeo } from "next-seo";

import Hyperlink from "@/components/Hyperlink";

import styles from "@/styles/Archive.module.scss";

import archive from "@/data/archive";

export default function Archive() {
  return (
    <>
      <NextSeo
        title="Archive | ACM Cyber at UCLA"
        description="Some past events run by ACM Cyber at UCLA!"
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
        <h1>Archive</h1>
        <div className={styles.description}>
          {archive.map((ele) => (
            <Hyperlink time={ele["name"]} series={ele["series"]} />
          ))}
        </div>
      </div>
    </>
  );
}
