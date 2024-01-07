import { useState, useEffect } from "react";

import styles from "@/styles/Archive.module.scss";
import popUpStyle from "@/styles/Events.module.scss";
import CyberSeo from "@/components/CyberSeo";
import { CyaneaEvent } from "@/data/events";
import archive, { QuarterArchive, SeriesArchive } from "@/data/archive";
import Tag from "@/components/Tag";
import { formatEventDate } from "@/utils/time";

type ShowPopUpCallback = (event: CyaneaEvent) => void;

export default function () {
  const [popUp, setPopUp] = useState<null | CyaneaEvent>(null);
  function showPopUp(disp: CyaneaEvent) {
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
        <div className="content">{<Archive showPopUp={showPopUp} />}</div>
      </div>
    </>
  );
}

const Archive = ({ showPopUp }: { showPopUp: ShowPopUpCallback }) => {
  return (
    <>
      <h1>Archive</h1>
      <div className={styles.archive}>
        {archive.length === 0
          ? "No archive items available."
          : archive.map((q) => (
              <Quarter quarter={q} showPopUp={showPopUp} key={q.name} />
            ))}
      </div>
    </>
  );
};

const Quarter = ({
  quarter,
  showPopUp,
}: {
  quarter: QuarterArchive;
  showPopUp: ShowPopUpCallback;
}) => (
  <>
    <h2>{quarter.name} </h2>
    <div className={styles.quarter}>
      {quarter.series.length === 0
        ? "No series available."
        : quarter.series.map((s) => (
            <Series series={s} showPopUp={showPopUp} key={s.name} />
          ))}
    </div>
  </>
);

const Series = ({
  series,
  showPopUp,
}: {
  series: SeriesArchive;
  showPopUp: ShowPopUpCallback;
}) => (
  <div className={styles.seriesArchive}>
    <h3>{series.name}</h3>
    <p className={styles.seriesDescription}>{series.description}</p>
    <div className={styles.series}>
      {series.events.length === 0
        ? "No events available."
        : series.events.map((e) => (
            <Event event={e} showPopUp={showPopUp} key={e.id} />
          ))}
    </div>
  </div>
);

const Event = ({
  event,
  showPopUp,
}: {
  event: CyaneaEvent;
  showPopUp: ShowPopUpCallback;
}) => (
  <button className={styles.event} onClick={() => showPopUp(event)}>
    <div className={styles.eventContent}>
      <img
        className={styles.graphic}
        src={event.banner ?? "/images/cyber-motif-applied.png"}
        alt="Event Banner Image"
      />

      <div className={styles.title}>{event.title}</div>

      <div className={styles.date}>{formatEventDate(event)}</div>

      <div className={styles.links}>
        <span>
          <img className={styles.icon} src="/images/utube.svg" />
          {event.links?.["youtube"] !== undefined ? (
            <a href={event.links["youtube"]} className={styles.link}>
              Recording
            </a>
          ) : (
            <p className={styles.nolink}>No Recording</p>
          )}
        </span>
        <span>
          <img className={styles.icon} src="/images/slides.svg" />
          {event.links?.["slides"] !== undefined ? (
            <a href={event.links["slides"]} className={styles.link}>
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

const PopUp = ({ event, close }: { event: CyaneaEvent; close: () => void }) => {
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
          src={event.banner ?? "/images/cyber-motif-applied.png"}
          alt="Event Banner Image"
        />

        <div className={popUpStyle["content"]}>
          <h3>{event.title}</h3>
          <div className={popUpStyle["date"]}>{formatEventDate(event)}</div>
          <div className={popUpStyle["location"]}>{event.location}</div>
          <div className={styles.tags}>
            <span>Tags: </span>
            {typeof event.type === "string" ? (
              <Tag name={event.type} />
            ) : (
              event.type?.map((e) => <Tag name={e} key={e} />)
            )}
          </div>
          <div className={popUpStyle["description"]}>{event.description}</div>

          <div className={styles.section}>
            {event.links?.["youtube"] !== undefined ? (
              <div>
                <img className={styles.icon} src="/images/utube.svg" />
                <span>Recording: </span>
                <a href={event.links["youtube"]} className={styles.hyperlink}>
                  {event.links["youtube"]}
                </a>
              </div>
            ) : null}
            {event.links?.["slides"] !== undefined ? (
              <div>
                <img className={styles.icon} src="/images/slides.svg" />
                <span>Slides: </span>
                <a href={event.links["slides"]} className={styles.hyperlink}>
                  {event.links["slides"]}
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
