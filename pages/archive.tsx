import styles from "@/styles/Archive.module.scss";
import Navbar from "@/components/Navbar";
import Hyperlink from "@/components/Hyperlink";

export default function Archive() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1>Archive</h1>
        <div className={styles.description}>
          <ul>
            <li>
              <Hyperlink time="January 1st 2023" title="Google" />
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
