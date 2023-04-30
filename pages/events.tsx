import Head from "next/head";
import { useState } from "react";

import styles from "@/styles/Events.module.scss";

import AllEvents from "@/data/events";

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
    <div className="page">
      <Head>
        <title>Events | ACM Cyber at UCLA</title>
      </Head>
      <h1>EVENTS</h1>
      <div className={styles["buttonGrid"]}>
        <button onClick={() => setDisplay(!display)}>
          <span>jan 01</span>
        </button>
        <button onClick={() => setDisplay(!display)}>
          <span>jan 02</span>
        </button>
        <button onClick={() => setDisplay(!display)}>
          <span>jan 03</span>
        </button>
        <button onClick={() => setDisplay(!display)}>
          <span>jan 04</span>
        </button>
        <button onClick={() => setDisplay(!display)}>
          <span>jan 05</span>
        </button>
        <button onClick={() => setDisplay(!display)}>
          <span>jan 06</span>
        </button>

        <div className={display ? styles.blurbShow : styles.blurbHide}>
          {eventSquare(0)}
        </div>
        <div className={display ? styles.blurbShow : styles.blurbHide}>
          {eventSquare(1)}
        </div>
      </div>
    </div>
  );
}
