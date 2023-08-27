import { useEffect, useState } from "react";

import styles from "@/styles/Events.module.scss";
import CyberSeo from "@/components/CyberSeo";
import AllEvents, { Event } from "@/data/events";

type TEvent = (typeof AllEvents)[0];
type EventCB = (event: Event) => void;

/**
 * Sets the time-of-day of the given date to midnight in the date's current timezone.
 */
function dropTimeOfDay(date: Date): Date {
  let clone = new Date(date);
  clone.setHours(0);
  clone.setMinutes(0);
  clone.setSeconds(0);
  clone.setMilliseconds(0);
  return clone;
}

/**
 * Sets the day-of-week of the given date to Sunday in the date's current timezone.
 */
function dropDay(date: Date): Date {
  let clone = new Date(date);
  clone.setDate(clone.getDate() - clone.getDay());
  return clone;
}

/**
 * @returns true if this event has happened within the current week or will happen in the future
 */
function isEventStillRelevant(event: Event, startOfWeek: Date) {
  return event.date >= startOfWeek;
}

function isEventThisWeek(event: Event, startOfWeek: Date) {
  let normalizedDate = dropTimeOfDay(event.date);
  return normalizedDate.getTime() - startOfWeek.getTime() <= 604_800_000;
}

const Event = (showPopup: EventCB) => (event: TEvent, i: number) =>
  (
    <div
      className={styles["event-card"]}
      key={i}
      onClick={() => showPopup(event)}
    >
      <span className={styles["type"]}>{event.type}</span>
      <img src="/images/archive.svg" alt="Placeholder Image" />
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
        <img src="/images/archive.svg" alt="Placeholder Image" />
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

  // const [popup, setPopup] = useState(AllEvents[0]);
  const [popup, setPopup] = useState(null as TEvent | null);
  const [today, setToday] = useState(new Date());

  // reload "today" because page may be accessed at a date later than
  // the date nextjs pre-renders this page
  useEffect(() => setToday(new Date()), []);

  const startOfWeek = dropTimeOfDay(dropDay(today));
  const thisWeek = AllEvents.filter((e) => isEventThisWeek(e, startOfWeek));
  const upcomingEvents = AllEvents.filter(
    (e) =>
      isEventStillRelevant(e, startOfWeek) && !isEventThisWeek(e, startOfWeek)
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
          {/* <div className="content">
            {eventTypes.map((type, i) => (
              <div key={i} className={styles.eventTypeDescription}>
                <h2>{type.name}</h2>
                <p>{type.description}</p>
                {type.link === undefined ? null : (
                  <button
                    onClick={() => {
                      window.location.href = type.link;
                    }}
                  >
                    Link
                  </button>
                )}
              </div>
            ))}
          </div> */}

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
