import Image from "next/image";

import { NextSeo } from "next-seo";

import officers, { PersonInfoProps } from "@/data/officers";

import styles from "@/styles/About.module.scss";

type DataProps = {
  data: Record<string, any>;
};

export default function Team({ data }: DataProps) {
  return (
    <>
      <NextSeo
        title="Team | ACM Cyber at UCLA"
        description="Meet the members of ACM Cyber at UCLA!"
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
        <h1>Team</h1>

        <h2>Who Are We</h2>
        <p>
          We are a group of hackers, CTFers and developers passionate about
          cybersecurity. We break things for fun and work to improve our skills
          in a variety of disciplines, whether it be rev, pwn, crypto, or
          something entirely different. We aim to nurture the love of
          cybersecurity in the students at UCLA.
        </p>

        <h2>Team</h2>

        <div className={styles.officersContainer}>
          {officers.map((officer: PersonInfoProps, index: number) => (
            <PersonInfo
              key={index}
              name={officer.name}
              role={officer.role}
              major={officer.major}
              pronouns={officer.pronouns}
              photo={officer.photo}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function PersonInfo({ name, role, major, pronouns, photo }: PersonInfoProps) {
  return (
    <div className={styles.personInfo}>
      <Image
        className={styles.personImage}
        src={"/images/officers/" + photo}
        alt={`Profile picture of ${name}`}
        width={300}
        height={300}
      />
      <h3>{name}</h3>
      <p>
        <i>{role}</i>
      </p>
      <p>{pronouns}</p>
      <p>{major}</p>
    </div>
  );
}
