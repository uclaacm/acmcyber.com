import styles from '@/styles/Events.module.scss';
import Navbar from '@/components/Navbar';
import Footer from "../components/Footer";
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
            <div className={styles["fixed"]}>
            <Navbar/>
            </div>
            <div className={styles["page"]}>
                <h1>EVENTS</h1>
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

                    
                    <div className={display ? styles.blurbShow : styles.blurbHide}>{eventSquare(0)}</div>
                    <div className={display ? styles.blurbShow : styles.blurbHide}>{eventSquare(1)}</div>
                </div>
                
            </div>
            <div className={styles["fixed"]}>
            <Footer/>
            </div>
        </>
    )
}