import { DateTime, IANAZone } from "luxon";
import { CyaneaEvent } from "@/data/events";

// see https://discord.com/channels/510986939319713803/512782757064343553/1145225529876824115
export const isSameWeek = (d1: Date, d2: Date): boolean => {
  const dayMs = 1000 * 60 * 60 * 24;
  const t1 = d1.getTime();
  const t2 = d2.getTime();
  // cannot be more than a week apart
  if (Math.abs(t1 - t2) >= dayMs * 7) {
    return false;
  }
  const day1 = d1.getDay();
  const day2 = d2.getDay();
  // same day of week = return true iff same date
  if (day1 == day2) {
    return d1.getDate() == d2.getDate();
  } else if (day1 < day2) {
    return t1 < t2;
  } else {
    return t1 > t2;
  }
};

const ZONE = IANAZone.create("America/Los_Angeles")
const DATE_FORMAT = "ccc LLL dd y"
const TIME_FORMAT = "t"

export const formatEventDate = (event: CyaneaEvent): string => 
  DateTime.fromMillis(event.start, { zone: ZONE }).toFormat(DATE_FORMAT)

export const formatEventDateAndTime = (event: CyaneaEvent): [string, string] => {
  const start = DateTime.fromMillis(event.start, { zone: ZONE })
  const end = DateTime.fromMillis(event.end, { zone: ZONE })
  let date
  if (start.startOf("day").valueOf() == end.startOf("day").valueOf()) {
    date = start.toFormat(DATE_FORMAT)
  } else {
    date = `${start.toFormat(DATE_FORMAT)} - ${end.toFormat(DATE_FORMAT)}`
  }
  const time = `${start.toFormat(TIME_FORMAT)} - ${end.toFormat(TIME_FORMAT)} (PST)`
  return [date, time]
}
