import ArchiveSection from "@/components/ArchiveSection";

import styles from "@/styles/Archive.module.scss";

import CyberSeo from "@/components/CyberSeo";
import archive from "@/data/archive";

export const config = {
  unstable_runtimeJS: false,
};

export default function Archive() {
  return (
    <>
      <CyberSeo
        title="Archive"
        description="Some past events run by ACM Cyber at UCLA!"
      />
      <div className="page">
        <h1>Archive</h1>
        <div className={"content"}>
          <div className={styles.description}>
            {archive.map((ele) => (
              <ArchiveSection time={ele["name"]} series={ele["series"]} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
