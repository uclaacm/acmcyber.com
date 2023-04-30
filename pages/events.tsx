import styles from "@/styles/Events.module.scss";
import AllEvents from "@/data/events";
import Head from "next/head";
import React, { useState } from "react";

function eventSquare(id: number) {
  return (
    <p>
      {AllEvents[id].name}
      <br></br>
      {AllEvents[id].date}
    </p>
  );
}

export default function Events() {
  // when page loads, read from data/events.yml
  // parse all of the events into a list of objects [{event object}, ...]
  // display all of the events in the list (hint: use the map() function)
  const [display, setDisplay] = useState(false);
  return (
    <>
      <Head>
        <title>Events | ACM Cyber at UCLA</title>
      </Head>
      <div className={styles["page"]}>
        <h1>Events</h1>
        <div className={styles["buttonIcon"]}>
          <button onClick={() => setDisplay(!display)}>
            <h1>jan 01</h1>
          </button>
          <button onClick={() => setDisplay(!display)}>
            <h1>jan 02</h1>
          </button>
          <button onClick={() => setDisplay(!display)}>
            <h1>jan 03</h1>
          </button>

          <div className={display ? styles.blurbShow : styles.blurbHide}>
            {eventSquare(0)}
          </div>
          <div className={display ? styles.blurbShow : styles.blurbHide}>
            {eventSquare(1)}
          </div>
        </div>
      </div>
    </>
  );
}
