import { useState, useEffect, useMemo } from "react";

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
  const [searchQuery, setSearchQuery] = useState<string>("");

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
        <div className="content">
          <Archive
            showPopUp={showPopUp}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </div>
    </>
  );
}

const Archive = ({
  showPopUp,
  searchQuery,
  setSearchQuery,
}: {
  showPopUp: ShowPopUpCallback;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}) => {
  // Filter function to check if an event matches the search query
  const eventMatchesSearch = (event: CyaneaEvent, query: string): boolean => {
    // Don't filter on an empty filter
    if (!query.trim()) return true;

    const lowerQuery = query.toLowerCase();

    // Check title
    if (event.title.toLowerCase().includes(lowerQuery)) return true;

    // Check description
    if (event.description?.toLowerCase().includes(lowerQuery)) return true;

    // Check tags/type
    if (typeof event.type === "string") {
      if (event.type.toLowerCase().includes(lowerQuery)) return true;
    } else if (Array.isArray(event.type)) {
      if (event.type.some((tag) => tag.toLowerCase().includes(lowerQuery))) {
        return true;
      }
    }

    return false;
  };

  // Filter quarters to only show those with matching events
  const filteredArchive = useMemo(
    () =>
      archive
        .map((quarter) => ({
          ...quarter,
          series: quarter.series
            .map((series) => ({
              ...series,
              events: series.events.filter((event) =>
                eventMatchesSearch(event, searchQuery)
              ),
            }))
            .filter((series) => series.events.length > 0),
        }))
        .filter((quarter) => quarter.series.length > 0),
    [searchQuery]
  );

  return (
    <>
      <h1>Archive</h1>

      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <label htmlFor="searchInput" className={styles.searchLabel}>
          Search events:
        </label>
        <div className={styles.searchInputContainer}>
          <input
            type="text"
            id="searchInput"
            placeholder="Search events by title, description, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className={styles.clearButton}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </div>

      <div className={styles.archive}>
        {filteredArchive.length === 0 ? (
          searchQuery ? (
            <div className={styles.noResults}>
              No events found matching "{searchQuery}". Try different keywords.
            </div>
          ) : (
            "No archive items available."
          )
        ) : (
          filteredArchive.map((q) => (
            <Quarter quarter={q} showPopUp={showPopUp} key={q.name} />
          ))
        )}
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
}) => {
  return (
    <>
      <h2 id={quarter.id}>
        <a href={`#${quarter.id}`} className={styles.anchorLink}>
          {quarter.name}
        </a>
      </h2>
      <div className={styles.quarter}>
        {quarter.series.length === 0
          ? "No series available."
          : quarter.series.map((s) => (
              <Series
                series={s}
                showPopUp={showPopUp}
                quarterId={quarter.id}
                key={s.name}
              />
            ))}
      </div>
    </>
  );
};

const Series = ({
  series,
  showPopUp,
  quarterId,
}: {
  series: SeriesArchive;
  showPopUp: ShowPopUpCallback;
  quarterId: string;
}) => {
  // Create a unique ID combining quarter and series names
  const seriesId = `${quarterId}-${series.name
    .toLowerCase()
    .replace(/\s+/g, "-")}`;

  return (
    <div className={styles.seriesArchive}>
      <h3 id={seriesId}>
        <a href={`#${seriesId}`} className={styles.anchorLink}>
          {series.name}
        </a>
      </h3>
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
};

const Event = ({
  event,
  showPopUp,
}: {
  event: CyaneaEvent;
  showPopUp: ShowPopUpCallback;
}) => (
  <button
    className={styles.event}
    onClick={() => showPopUp(event)}
    id={`event-${event.id}`}
  >
    <div className={styles.eventContent}>
      <img
        className={styles.graphic}
        src={event.banner ?? "/images/cyber-motif-applied.png"}
        alt="Event Banner Image"
        loading="lazy"
      />

      <div className={styles.title}>{event.title}</div>

      <div className={styles.date}>{formatEventDate(event)}</div>

      <div className={styles.links}>
        <span>
          <img
            className={styles.icon}
            src="/images/utube.svg"
            alt="YouTube icon"
            loading="lazy"
          />
          {event.links?.["youtube"] !== undefined ? (
            <a
              href={event.links["youtube"]}
              className={styles.link}
              onClick={(e) => e.stopPropagation()}
            >
              Recording
            </a>
          ) : (
            <p className={styles.nolink}>No Recording</p>
          )}
        </span>
        <span>
          <img className={styles.icon} src="/images/slides.svg" />
          {event.links?.["slides"] !== undefined ? (
            <a
              href={event.links["slides"]}
              className={styles.link}
              onClick={(e) => e.stopPropagation()}
            >
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
      <div className={popUpStyle["popup"]} onClick={(e) => e.stopPropagation()}>
        <div className={popUpStyle["top-bar"]}>
          <div className={popUpStyle["x-button"]} onClick={close} />
        </div>

        <img
          className={popUpStyle["graphic"]}
          src={event.banner ?? "/images/cyber-motif-applied.png"}
          alt="Event Banner Image"
          loading="lazy"
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
