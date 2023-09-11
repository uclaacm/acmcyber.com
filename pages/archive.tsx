import styles from "@/styles/Archive.module.scss";
import popUpStyle from "@/styles/Events.module.scss";
import CyberSeo from "@/components/CyberSeo";
import archive, {
  QuarterArchive,
  SeriesArchive,
  EventArchive,
} from "@/data/archive";
import { useState, useEffect } from "react";
import Tag from "@/components/Tag";

export default function () {
  const [popUp, setPopUp] = useState(null as EventArchive | null);
  function showPopUp(disp: EventArchive) {
    popUp === null ? setPopUp(disp) : setPopUp(null);
  }

  return (
    <>
      <CyberSeo
        title="Archive"
        description="Some past events run by ACM Cyber at UCLA!"
      />

      <div className="page">
        {popUp !== null && <PopUp event={popUp} close={() => setPopUp(null)} />}
        <div className="content">{Archive(showPopUp)}</div>
      </div>
    </>
  );
}
const Archive = (showPopUp: any) => {
  return (
    <>
      <h1>Archive</h1>
      <div className={styles.archive}>
        {archive.length === 0
          ? "No archive items available."
          : archive.map(Quarter(showPopUp))}
      </div>
    </>
  );
};

const Quarter = (showPopUp: any) => (props: QuarterArchive) => {
  return (
    <>
      <h2>{props.name} </h2>
      <div className={styles.quarter}>
        {props.series.length === 0
          ? "No series available."
          : props.series.map(Series(showPopUp))}
      </div>
    </>
  );
};

const Series = (showPopUp: any) => (props: SeriesArchive) => {
  return (
    <>
      <h3>{props.name}</h3>
      <div className={styles.series}>
        {props.events.length === 0
          ? "No events available."
          : props.events.map(Event(showPopUp))}
      </div>
    </>
  );
};

const Event = (showPopUp: any) => (props: EventArchive) => {
  return (
    <button className={styles.event} onClick={() => showPopUp(props)}>
      <div className={styles.eventContent}>
        <img
          className={styles.graphic}
          src={props.graphicPath}
          alt="Placeholder Image"
        />

        <div className={styles.title}>{props.name}</div>

        <div className={styles.date}>{props.date.toDateString()}</div>

        <div className={styles.links}>
          <span>
            <img className={styles.icon} src="/images/utube.svg" />
            {props.slides !== undefined ? (
              <a href={props.recording} className={styles.link}>
                Recording
              </a>
            ) : (
              <p className={styles.nolink}>No Recording</p>
            )}
          </span>
          <span>
            <img className={styles.icon} src="/images/slides.svg" />
            {props.slides !== undefined ? (
              <a href={props.slides} className={styles.link}>
                Slides
              </a>
            ) : (
              <p className={styles.nolink}>No Slides</p>
            )}
          </span>
        </div>
      </div>
    </button>
  );
};

type PopupProps = {
  event: EventArchive;
  close: () => void;
};

const PopUp = ({ event, close }: PopupProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div
      className={`${popUpStyle["popup-container"]} ${
        mounted ? popUpStyle["mounted"] : null
      }`}
      onClick={close}
    >
      <div className={popUpStyle["popup"]}>
        <div className={popUpStyle["top-bar"]}>
          <div className={popUpStyle["x-button"]} onClick={close} />
        </div>

        <img
          className={popUpStyle["graphic"]}
          src={event.graphicPath}
          alt="Placeholder Image"
        />

        <div className={popUpStyle["content"]}>
          <h3>{event.name}</h3>
          <div className={popUpStyle["date"]}>{event.date.toDateString()}</div>
          <div className={popUpStyle["location"]}>{event.location}</div>
          <div className={styles.tags}>
            <span>Tags: </span>
            {event.tags.map((e) => (
              <Tag name={e} />
            ))}
          </div>
          <div className={popUpStyle["description"]}>{event.description}</div>

          <div className={styles.section}>
            <div>
              <img className={styles.icon} src="/images/utube.svg" />
              <span>Recording: </span>
              <a href={event.recording} className={styles.hyperlink}>
                {event.recording}
              </a>
            </div>
            <div>
              <img className={styles.icon} src="/images/slides.svg" />
              <span>Slides: </span>
              <a href={event.slides} className={styles.hyperlink}>
                {event.slides}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
