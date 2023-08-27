import { useEffect, useState } from "react";

import styles from "@/styles/Events.module.scss";
import CyberSeo from "@/components/CyberSeo";
import AllEvents, { Event } from "@/data/events";
import { styler } from "@/utils";

const s = styler(styles);
type TEvent = (typeof AllEvents)[0];
type EventCB = (event: Event) => void;

/**
 * Sets the time-of-day of the given date to midnight in the date's current timezone.
 */
function dropTimeOfDay(date: Date) {
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}

/**
 * @returns true if this event has happened within the current week or will happen in the future
 */
function isEventStillRelevant(event: Event, now: Date) {
  let startOfWeek = dropTimeOfDay(new Date(now));
  startOfWeek.setMilliseconds(
    startOfWeek.getMilliseconds() - startOfWeek.getDay() * 604_800_000
  );
  return event.date >= startOfWeek;
}

function isEventThisWeek(event: Event, now: Date) {
  let normalizedDate = dropTimeOfDay(new Date(event.date));
  let normalizedNow = dropTimeOfDay(new Date(now));
  return normalizedDate.getTime() - normalizedNow.getTime() <= 604_800_000;
}

const Event = (showPopup: EventCB) => (event: TEvent, i: number) =>
  (
    <div className={s`event-card`} key={i} onClick={() => showPopup(event)}>
      <span className={s`type`}>{event.type}</span>
      <img src="/images/archive.svg" alt="Placeholder Image" />
      <div className={s`details`}>
        <h3>{event.name}</h3>
        <div className={s`date`}>{event.date.toDateString()}</div>
        <div className={s`time`}>{event.time}</div>
        <div className={s`location`}>{event.location}</div>
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
    <div className={s`popup-container ${mounted && "mounted"}`} onClick={close}>
      <div className={s`popup`}>
        <div className={s`top-bar`}>
          <div className={s`x-button`} onClick={close} />
        </div>
        <img src="/images/archive.svg" alt="Placeholder Image" />
        <div className={s`content`}>
          <h3>{event.name}</h3>
          <div className={s`date`}>{event.date.toDateString()}</div>
          <div className={s`time`}>{event.time}</div>
          <div className={s`location`}>{event.location}</div>
          <div className={s`description`}>{event.description}</div>
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

  // reload `today` because page may be accessed at a date later than
  // the date nextjs pre-renders this page
  useEffect(() => setToday(new Date()), []);

  const thisWeek = AllEvents.filter((e) => isEventThisWeek(e, today));
  const upcomingEvents = AllEvents.filter(
    (e) => isEventStillRelevant(e, today) && !isEventThisWeek(e, today)
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
        <div className={s`home`}>
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
          <div className={s`this-week`}>
            <h2>This Week</h2>
            <div className={s`events`}>
              {thisWeek.length === 0
                ? "No events this week. Come back later!"
                : thisWeek.map(Event(setPopup))}
            </div>
          </div>
          {/* Upcoming section */}
          <div className={s`upcoming`}>
            <h2>Upcoming</h2>
            <div className={s`events`}>
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
