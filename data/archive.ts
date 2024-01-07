import eventData, { CyaneaEvent, eventTypes } from "./events"

export interface SeriesArchive {
  name: string;
  description: string;
  events: CyaneaEvent[];
}

export interface QuarterArchive {
  name: string;
  series: SeriesArchive[];
}

// splits events into their source quarter/year and cyber series type
// assuming ids are written as <quarter><year>-<id> (ie f23-haxoring)
// and every event is tagged with at least one EventKind
const quarters = new Map<string, Map<string, CyaneaEvent[]>>()
for (const event of eventData) {
  if (!event.type) continue;

  const idComponents = event.id.split("-");
  if (idComponents.length >= 2 && /^[fws]\d\d$/.test(idComponents[0])) {
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

const archive: QuarterArchive[] = [...quarters.entries()].map(([quarterId, quarterMap]) => {
  let season;
  switch (quarterId.charAt(0)) {
    case "f": season = "Fall"; break;
    case "w": season = "Winter"; break;
    case "s": season = "Spring"; break;
    default: throw `invalid season char '${quarterId.charAt(0)}' (this should never happen)`
  }
  return {
    name: `${season} ${quarterId.length === 3 ? `20${quarterId.slice(1)}` : quarterId}`,
    series: [...quarterMap.entries()].map(([seriesId, events]) => ({
      name: seriesId,
      description: eventTypes.find(x => x.name === seriesId)!.description,
      events,
    }))
  }
})
export default archive;
