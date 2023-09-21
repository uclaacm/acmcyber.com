import Image from "next/image";

import members, { PersonInfoProps } from "@/data/members";

import styles from "@/styles/Members.module.scss";
import CyberSeo from "@/components/CyberSeo";

export default function Members() {
  return (
    <>
      <CyberSeo
        title="Members"
        description="Learn more about the members of ACM Cyber at UCLA!"
      />
      <div className="page">
        <div className="content">
          <h1>Members</h1>
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
