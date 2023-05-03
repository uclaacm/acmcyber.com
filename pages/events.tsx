import Head from "next/head";
import { useState } from "react";

import styles from "@/styles/Events.module.scss";
import AllEvents from "@/data/events";

function displayAll(type: number) {
  return (
    <div className={styles["buttonGrid"]}>
      {AllEvents.map((event, index) => (
        <button className={styles["child"]}>
          <span>{event.name}</span>
        </button>
      ))}
    </div>
  );
}
export default function Events() {
  // when page loads, read from data/events.yml
  // parse all of the events into a list of objects [{event object}, ...]
  // display all of the events in the list (hint: use the map() function)
  const [isDisplay, switchDisplay] = useState(false);
  return (
    <div className="page">
      <Head>
        <title>Events | ACM Cyber at UCLA</title>
      </Head>
      <div className={styles["home"]}>
        <div className={styles["page"]}>
          <h1>Events</h1>
          <div className={styles["flex"]}>{displayAll(5)}</div>
        </div>
      </div>
    </div>
  );
}
