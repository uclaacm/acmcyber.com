import eventData, { CyaneaEvent, eventTypes } from "./events"

export interface SeriesArchive {
  name: string;
  description: string;
  events: CyaneaEvent[];
}

export interface QuarterArchive {
  id: `${"w" | "s" | "u" | "f"}${number}`;
  name: string;
  season: "w" | "s" | "u" | "f";
  year: number;
  series: SeriesArchive[];
}

// splits events into their source quarter/year and cyber series type
// assuming ids are written as <quarter><year>-<id> (ie f23-haxoring)
// and every event is tagged with at least one EventKind
const quarters = new Map<string, Map<string, CyaneaEvent[]>>()
for (const event of eventData) {
  if (!event.type) continue;

  const idComponents = event.id.split("-");
  if (idComponents.length >= 2 && /^[wsuf]\d\d$/.test(idComponents[0])) {
    if (!quarters.has(idComponents[0])) {
      quarters.set(idComponents[0], new Map());
    }
    const quarterMap = quarters.get(idComponents[0])!;

    for (const series of eventTypes) {
      if (event.type.includes(series.name)) {
        if (!quarterMap.has(series.name)) {
          quarterMap.set(series.name, []);
        }
        quarterMap.get(series.name)!.push(event);
      }
    }
  }
}

const SEASONS = { "w": 0, "s": 1, "u": 2, "f": 3 };

const archive: QuarterArchive[] = [...quarters.entries()].map(([quarterId, quarterMap]) => {
  const seasonChar = quarterId.charAt(0);
  let season;
  switch (seasonChar) {
    case "f": season = "Fall"; break;
    case "w": season = "Winter"; break;
    case "s": season = "Spring"; break;
    case "u": season = "Summer"; break;
    default: throw `invalid season char '${quarterId.charAt(0)}' (this should never happen)`
  }
  const year = parseInt(quarterId.length === 3 ? `20${quarterId.slice(1)}` : quarterId.slice(1));
  return {
    id: `${seasonChar}${year}` as const,
    name: `${season} ${year}`,
    season: seasonChar,
    year: year,
    series: [...quarterMap.entries()].map(([seriesId, events]) => ({
      name: seriesId,
      description: eventTypes.find(x => x.name === seriesId)!.description,
      events,
    }))
  }
}).sort((a, b) => {
  if (b.year == a.year) return SEASONS[b.season] - SEASONS[a.season];
  return b.year - a.year;
});

export default archive;
