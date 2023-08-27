import styles from "../styles/Archiveitem.module.scss";

import Image from "next/image";

import Tag from "./Tag";

import tn from "../public/images/archive.svg";

interface prop {
  name: string;
  events: {
    name: string;
    date: string;
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

              <h4 className={styles.title}>
                {ele.date}: {ele.name}
              </h4>

              <p>
                <a href={ele.recording} className={styles.link}>
                  Recording
                </a>
                <a href={ele.slides} className={styles.link}>
                  Slides
                </a>
              </p>

              {/*<p style={{ fontSize: "1rem" }}>{ele.description}</p>*/}
            </div>

            {/*
            <div className={styles.section}>
              {ele.tags.map((e) => (
                <Tag name={e} />
              ))}
            </div>
            */}
          </button>
        ))}
      </div>
    </div>
  );
}
