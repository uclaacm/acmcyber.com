import { useEffect, useState } from "react";

import styles from "@/styles/Events.module.scss";
import CyberSeo from "@/components/CyberSeo";
import AllEvents from "@/data/events";
import { styler } from "@/utils";

const s = styler(styles);

// from chatgpt
const isThisWeek = (today: Date, date: Date): bool => {
  // Calculate day of the week (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
  const dayOfWeek1 = (today.getDay() + 6) % 7;
  const dayOfWeek2 = (date.getDay() + 6) % 7;

  // Calculate the difference in days between the two dates
  const dayDifference = Math.abs(today - date) / (1000 * 60 * 60 * 24);

  // Check if the dates are within 6 days of each other and share the same day of the week
  return dayDifference <= 6 && dayOfWeek1 === dayOfWeek2;
};

const isFuture = (today: Date, date: Date): bool =>
  !isThisWeek(today, date) && date > today;

const Event = (event: (typeof AllEvents)[0], i: number) => (
  <a className={s`event-card`} key={i}>
    <span className={s`type`}>{event.type}</span>
    <img src="/images/archive.svg" alt="Placeholder Image" />
    <div className={s`details`}>
      <h3>{event.name}</h3>
      <div className={s`date`}>{event.date.toDateString()}</div>
      <div className={s`time`}>{event.time}</div>
      <div className={s`location`}>{event.location}</div>
    </div>
  </a>
);

export default function Events() {
  // when page loads, read from data/events.yml
  // parse all of the events into a list of objects [{event object}, ...]
  // display all of the events in the list (hint: use the map() function)

  const [today, setToday] = useState(new Date());

  // reload `today` because page may be accessed at a date later than
  // the date nextjs pre-renders this page
  useEffect(() => setToday(new Date()), []);

  const thisWeek = AllEvents.filter((e) => isThisWeek(today, e.date));
  const upcomingEvents = AllEvents.filter((e) => isFuture(today, e.date));

  return (
    <>
      <CyberSeo
        title="Events"
        description="Some of the upcoming events for ACM Cyber at UCLA!"
      />
      <div className="page">
        <div className={s`home`}>
          <h1>Events</h1>
          {/* This Week section */}
          <div className={s`this-week`}>
            <h2>This Week</h2>
            <div className={s`events`}>{thisWeek.map(Event)}</div>
          </div>
          {/* Upcoming section */}
          <div className={s`upcoming`}>
            <h2>Upcoming</h2>
            <div className={s`events`}>{upcomingEvents.map(Event)}</div>
          </div>
        </div>
      </div>
    </>
  );
}
