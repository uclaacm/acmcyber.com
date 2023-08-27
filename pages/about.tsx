import Image from "next/image";

import officers, { PersonInfoProps } from "@/data/officers";
import members from "@/data/members";

import styles from "@/styles/About.module.scss";
import CyberSeo from "@/components/CyberSeo";

export default function About() {
  return (
    <>
      <CyberSeo
        title="About"
        description="Learn more about ACM Cyber at UCLA!"
      />
      <div className="page">
        <div className="content">
          <h1>About</h1>
          <img
            src="/images/cyber-symposium.png"
            alt="ACM Cyber x ACM AI Spring 2023 projects symposium."
            className={styles.aboutImage}
          />

          <h2>Who We Are</h2>
          <p>
            We are a group of hackers & developers passionate about
            cybersecurity. We break things for fun and work to improve our
            skills in a variety of disciplines, whether it be reverse
            engineering, binary exploitation, cryptography, or something
            entirely different. We aim to nurture the love of cybersecurity in
            the students at UCLA!
          </p>

          <h2>Officers</h2>

          <div className={styles.officersContainer}>
            {officers.map((officer: PersonInfoProps, index: number) => (
              <PersonInfo
                key={index}
                name={officer.name}
                role={officer.role}
                bio={officer.bio}
                pronouns={officer.pronouns}
                photo={officer.photo}
              />
            ))}
          </div>

          <h2>Members</h2>

          <div className={styles.officersContainer}>
            {members.map((officer: PersonInfoProps, index: number) => (
              <PersonInfo
                key={index}
                name={officer.name}
                role={officer.role}
                bio={officer.bio}
                pronouns={officer.pronouns}
                photo={officer.photo}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function PersonInfo({ name, role, bio, pronouns, photo }: PersonInfoProps) {
  return (
    <div className={styles.personInfo}>
      <Image
        className={styles.personImage}
        src={
          photo !== ""
            ? "/images/members/" + photo
            : "/images/cyber-logo-light.png"
        }
        alt={`Profile picture of ${name}`}
        width={300}
        height={300}
      />
      <h3>{name}</h3>
      <p>{pronouns}</p>
      <p>
        <i>{role}</i>
      </p>
      <p>{bio}</p>
    </div>
  );
}
