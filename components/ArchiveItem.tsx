import Tag from "./Tag";

import styles from "../styles/Archiveitem.module.scss";

interface prop {
  title: string;
  tags: string[];
  link: string;
}

export default function ArchiveItem(props: prop) {
  return (
    <div className={styles.main}>
      <h3>{props.title}</h3>
      <div className={styles.tags}>
        <Tag name={props.tags[0]} />
        <Tag name={props.tags[1]} />
      </div>

      <div className={styles.texts}>test test teset</div>
    </div>
  );
}
