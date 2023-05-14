/**
 * @returns An English string representing the day-of-week for the given date. 
 */
export function dayOfWeek(date: Date) {
    let day = date.getDay();
    if (day < 0 || day > 6) throw `Invalid day of week ${day}`;
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][day];
}

/**
 * Sets the time-of-day of the given date to midnight in the date's current timezone.
 */
export function dropTimeOfDay(date: Date) {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
}
