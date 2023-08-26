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
          <h1>Events</h1>
          <div className={s`this-week`}>
            <h2>This Week</h2>
            <div className={s`events`}>
              {AllEvents.map((event) => (
                <a className={s`event-card`}>
                  <img src="/images/archive.svg" alt="Placeholder Image" />
                  <div className={s`details`}>
                    <h3>{event.name}</h3>
                    <div className={s`date`}>{event.date.toDateString()}</div>
                    <div className={s`time`}>{event.time}</div>
                    <div className={s`location`}>{event.location}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
