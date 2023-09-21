import { useEffect, useState } from "react";

import styles from "@/styles/Events.module.scss";
import CyberSeo from "@/components/CyberSeo";
import AllEvents, { Event } from "@/data/events";

type TEvent = (typeof AllEvents)[0];
type EventCB = (event: Event) => void;

// see https://discord.com/channels/510986939319713803/512782757064343553/1145225529876824115
const isSameWeek = (d1: Date, d2: Date): boolean => {
  const dayMs = 1000 * 60 * 60 * 24;
  const t1 = d1.getTime();
  const t2 = d2.getTime();
  // cannot be more than a week apart
  if (Math.abs(t1 - t2) >= dayMs * 7) {
    return false;
  }
  const day1 = d1.getDay();
  const day2 = d2.getDay();
  // same day of week = return true iff same date
  if (day1 == day2) {
    return d1.getDate() == d2.getDate();
  } else if (day1 < day2) {
    return t1 < t2;
  } else {
    return t1 > t2;
  }
};

const Event = (showPopup: EventCB) => (event: TEvent, i: number) =>
  (
    <div
      className={styles["event-card"]}
      key={i}
      onClick={() => showPopup(event)}
    >
      <span className={styles["type"]}>{event.type}</span>
      <img src="/images/cyber-motif-applied.png" alt="Placeholder Image" />
      <div className={styles["details"]}>
        <h3>{event.name}</h3>
        <div className={styles["date"]}>{event.date.toDateString()}</div>
        <div className={styles["time"]}>{event.time}</div>
        <div className={styles["location"]}>{event.location}</div>
      </div>
    </div>
  );

type EventPopupProps = {
  event: TEvent;
  close: () => void;
};

const EventPopup = ({ close, event }: EventPopupProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div
      className={`${styles["popup-container"]} ${
        mounted ? styles["mounted"] : null
      }`}
      onClick={close}
    >
      <div className={styles["popup"]}>
        <div className={styles["top-bar"]}>
          <div className={styles["x-button"]} onClick={close} />
        </div>
        <img
          src="/images/cyber-motif-applied.png"
          alt="Placeholder Image"
          className={styles["graphic"]}
        />
        <div className={styles["content"]}>
          <h3>{event.name}</h3>
          <div className={styles["date"]}>{event.date.toDateString()}</div>
          <div className={styles["time"]}>{event.time}</div>
          <div className={styles["location"]}>{event.location}</div>
          <div className={styles["description"]}>{event.description}</div>
        </div>
      </div>
    </div>
  );
};

export default function Events() {
  // when page loads, read from data/events.yml
  // parse all of the events into a list of objects [{event object}, ...]
  // display all of the events in the list (hint: use the map() function)

  const [popup, setPopup] = useState(null as TEvent | null);
  const [today, setToday] = useState(new Date());

  // reload "today" because page may be accessed at a date later than
  // the date nextjs pre-renders this page
  useEffect(() => setToday(new Date()), []);

  const thisWeek = AllEvents.filter((e) => isSameWeek(e.date, today));
  const upcomingEvents = AllEvents.filter(
    (e) => e.date > today && !isSameWeek(e.date, today)
  );

  return (
    <>
      <CyberSeo
        title="Events"
        description="Some of the upcoming events for ACM Cyber at UCLA!"
      />
      <div className="page">
        {popup !== null && (
          <EventPopup event={popup} close={() => setPopup(null)} />
        )}
        <div className={styles["home"]}>
          <h1>Events</h1>

          {/* This Week section */}
          <div className={styles["this-week"]}>
            <h2>This Week</h2>
            <div className={styles["events"]}>
              {thisWeek.length === 0
                ? "No events this week. Come back later!"
                : thisWeek.map(Event(setPopup))}
            </div>
          </div>

          {/* Upcoming section */}
          <div className={styles["upcoming"]}>
            <h2>Upcoming</h2>
            <div className={styles["events"]}>
              {upcomingEvents.length === 0
                ? "No upcoming events currently scheduled. Come back later!"
                : upcomingEvents.map(Event(setPopup))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
