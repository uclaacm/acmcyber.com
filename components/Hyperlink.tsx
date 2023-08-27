import styles from "@/styles/Hyperlink.module.scss";

import ArchiveItem from "./ArchiveItem";

interface prop {
  series: {
    seriesName: string;
    events: {
      name: string;
      date: Date;
      description: string;
      recording: string;
      slides: string;
      tags: string[];
    }[];
  }[];
  time: string;
}

export default function Hyperlink(props: prop) {
  return (
    <div className={styles.main}>
      <h2>{props.time} </h2>
      <div className={styles.series}>
        {props.series.map((ele) => (
          <ArchiveItem name={ele.seriesName} events={ele.events} />
        ))}
      </div>
    </div>
  );
}
