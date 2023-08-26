import { useState } from "react";

import styles from "@/styles/Events.module.scss";
import CyberSeo from "@/components/CyberSeo";
import AllEvents from "@/data/events";
import { styler } from "@/utils";

const s = styler(styles);

function displayAll(type: number) {
  return (
    <div className={s`buttonGrid`}>
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
    <>
      <CyberSeo
        title="Events"
        description="Some of the upcoming events for ACM Cyber at UCLA!"
      />
      <div className="page">
        <div className={s`home`}>
          <div className={s`page`}>
            <h1>Events</h1>
            <div className={s`flex`}>{displayAll(5)}</div>
          </div>
        </div>
      </div>
    </>
  );
}
