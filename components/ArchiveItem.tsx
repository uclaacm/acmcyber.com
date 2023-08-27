import styles from "../styles/Archiveitem.module.scss";

import Image from "next/image";

import Tag from "./Tag";

import tn from "../public/images/archive.svg";

interface prop {
  name: string;
  events: {
    name: string;
    date: Date;
    description: string;
    recording: string;
    slides: string;
    tags: string[];
    graphicPath: string;
  }[];
}

export default function ArchiveItem(props: prop) {
  return (
    <div className={styles.main}>
      <h3>{props.name}</h3>
      <div>
        {props.events.map((ele) => (
          <button className={styles.listItem}>
            <div className={styles.section}>
              <img
                className={styles.graphic}
                src={ele.graphicPath}
                alt="Placeholder Image"
              />

              <div className={styles.title}>{ele.name}</div>

              <div className={styles.date}>{ele.date.toDateString()}</div>

              <div className={styles.links}>
                <a href={ele.recording} className={styles.link}>
                  <img className={styles.icon} src="/images/utube.svg"></img>
                </a>
                <a href={ele.slides} className={styles.link}>
                  <img className={styles.icon} src="/images/slides.svg"></img>
                </a>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
