import styles from '@/styles/Events.module.scss';
import Navbar from '@/components/Navbar';
import AllEvents from '@/data/events';
import React, { useState } from 'react';

function eventSquare(id: number)
{
   return <p>
    {AllEvents[id].name}<br></br>
    {AllEvents[id].date}</p> ;
}

export default function Events() {
    // when page loads, read from data/events.yml
    // parse all of the events into a list of objects [{event object}, ...]
    // display all of the events in the list (hint: use the map() function)
    const [display, setDisplay] = useState(false);
    return (
        <>   
            <Navbar/>
            <h1>Events</h1>
            <button onClick={() => setDisplay(!display)}>EVENT</button>
            <div className={display ? styles.blurbShow : styles.blurbHide}>{eventSquare(0)}</div>
            <div className={display ? styles.blurbShow : styles.blurbHide}>{eventSquare(1)}</div>
        </>
    )
}