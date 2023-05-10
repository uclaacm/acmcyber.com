import Tag from "./Tag";

import styles from "../styles/Archiveitem.module.scss"

interface prop {
  title: string;
  tags: string[];
  link: string;
}

export default function ArchiveItem(props: prop) {
<<<<<<< HEAD
  return (
    <div>
      <h3>{props.title}</h3>
      <Tag name={props.tags[0]} />
      <p>test test teset</p>
    </div>
  );
}
=======
    return (
        <div className={styles.main}>
            <h3>{props.title}</h3>
            <div className={styles.tags}>
                <Tag name={props.tags[0]}/>
                <Tag name={props.tags[1]}/>
            </div>
            
            <div className={styles.texts}>
                test test teset
            </div>
        </div>
    )
}
>>>>>>> ac7dca8 (woops)
