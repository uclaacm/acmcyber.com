import styles from "@/styles/Archive.module.scss";
import Navbar from "@/components/Navbar";
import Hyperlink from "@/components/Hyperlink";

import archive from "@/data/archive";

export default function Archive() {
  return (
    <div className="page">
      <h1>Archive</h1>
      <div className={styles.description}>
        {archive.map((ele) => (
          <Hyperlink time={ele["name"]} series={ele["series"]} />
        ))}
      </div>
    </div>
  );
}
