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
          <h1>Membership</h1>

          <h2>Membership Requirements</h2>
          <p>
            ACM Cyber is an entirely student-run organization and would not
            exist without the contributions from all of our officers and
            members! If you'd like to become an active member of ACM Cyber (and
            get your photo on this website), complete one of the following
            requirements.
            <br />
            <br />
            <b>Cyber Lab:</b>
            <br />
            Participate in a project with Cyber Lab. At the end of the quarter,
            create a blog post with your project group about your work and
            present your creation to the club!
            <br />
            <b>Cyber Academy:</b>
            <br /> Submit one writeup for a challenge you've solved by the end
            of the quarter.
            <br />
            <b>PBR:</b>
            <br /> Submit one writeup for a challenge you've solved by the end
            of the quarter and attend at least one CTF on the weekend
          </p>

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
