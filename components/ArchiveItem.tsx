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
  }[];
}



export default function ArchiveItem(props: prop) {
  return (
    <div className={styles.main}>
      <h3>{props.name}</h3>
      <ul>
        {props.events.map((ele) => (
          <li>
            <p style={{ display: "inline", margin: "1rem" }}>
              <p
                style={{ color: "#FFBD3F", display: "inline", margin: ".5rem" }}
              >
                {ele.date}:
              </p>
              {ele.name} {ele.description}
              <a href={ele.recording} style={{ margin: ".5rem" }}>
                Recording
              </a>
              <a href={ele.slides}>Slides</a>
            </p>
            <div className={styles.tags}>
              {ele.tags.map((e) => (
                <Tag name={e} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
