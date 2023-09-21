import { eventTypes, EventType } from "@/data/events";

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
            src="/images/ctf-experts.png"
            alt="A talk from two CTF experts."
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

          <h2>What We Do</h2>
          <p>
            ACM Cyber is home to a wide variety of events and projects hosted
            throughout the year. Check out our main initiatives below!
          </p>
          <div className={styles.cyberThings}>
            {eventTypes.map((event: EventType, index: number) => (
              <EventInfo
                key={index}
                name={event.name}
                description={event.description}
                link={event.link}
                icon={event.icon}
                iconAlt={event.iconAlt}
                textIcon={event.textIcon}
              />
            ))}
          </div>
          <h2 />
        </div>
      </div>
    </>
  );
}

function EventInfo({
  name,
  description,
  link,
  icon,
  iconAlt,
  textIcon,
}: EventType) {
  return (
    <span>
      <div className={styles.cyberThing}>
        <div className={styles.cyberThingIcon} draggable="true">
          {textIcon ? (
            <p role="img" aria-label={iconAlt}>
              {textIcon}
            </p>
          ) : (
            <img src={"/images/" + icon} alt={iconAlt} />
          )}
        </div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </span>
  );
}
