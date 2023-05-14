import { useState } from "react";

import { NextSeo } from "next-seo";

import styles from "@/styles/Events.module.scss";
import { default as ALL_EVENTS, Event } from "@/data/events";
import { dayOfWeek, dropTimeOfDay } from "@/utils/Eggert";

/**
 * @returns true if this event has happened within the current week or will happen in the future
 */
function isEventStillRelevant(event: Event, now: Date) {
  let startOfWeek = dropTimeOfDay(now);
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

function displayAll(predicate?: Parameters<Array<Event>["filter"]>[0]) {
  return (
    <div className={styles["eventsGrid"]}>
      {ALL_EVENTS.filter(predicate ?? (() => true)).map((event) => (
        <div className={styles["eventCard"]} key={event.id}>
          {event.image ? (
            <img src={event.image} className={styles["eventCardImg"]} />
          ) : (
            <div className={styles["eventCardImg"]} />
          )}
          <div className={styles["eventCardDesc"]}>
            <h2>{event.name}</h2>
            <p>{`${dayOfWeek(
              event.date
            )} ${event.date.toLocaleDateString()}`}</p>
            <p>{`${event.date.toLocaleTimeString()}${
              event.endDate ? ` - ${event.endDate.toLocaleTimeString()}` : ""
            }`}</p>
            {event.location ? (
              <p>{event.location}</p>
            ) : (
              <p className={styles["locationSpacer"]} role="none">
                _
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Events() {
  const [isDisplay, switchDisplay] = useState(false);
  const now = new Date();
  return (
    <div className={`page ${styles["events"]}`}>
      <NextSeo
        title="Events | ACM Cyber at UCLA"
        description="Some of the upcoming events for ACM Cyber at UCLA!"
        openGraph={{
          images: [
            {
              url: "https://cyber.uclaacm.com/images/cyber-motif-applied.png",
              width: 990,
              height: 555,
              alt: "ACM Cyber logo",
            },
          ],
          site_name: "ACM Cyber at UCLA",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <h1>This Week</h1>
      {displayAll(
        (e) => isEventStillRelevant(e, now) && isEventThisWeek(e, now)
      )}
      <h1>Upcoming</h1>
      {displayAll(
        (e) => isEventStillRelevant(e, now) && !isEventThisWeek(e, now)
      )}
    </div>
  );
}
