export interface Event {
  id: string;
  name: string;
  date: Date;
  endDate?: Date;
  location?: string;
  image?: string;
  links?: string[];
  description?: string;
}

const eventsData: Omit<Event, "id">[] = [
  {
    name: "Smart Contracts",
    date: new Date("Jan 01 2024 00:00:00 GMT-0800"),
    location: "MS 5200",
   },
  {
    name: "Python Pickles & Java Beans",
    date: new Date("Feb 02 2024 00:00:00 GMT-0800"),
    // location: "Ackerman 4519",
  },
  {
    name: "GPT-Orientated Programming",
    date: new Date("Mar 03 2024 00:00:00 GMT-0800"),
    location: "Gene Block's Mansion",
    image: "https://media.discordapp.net/attachments/512782757064343553/1105537049416712222/PXL_20230509_1649001422.jpg",
  },
  {
    name: "Advanced Printer Tinkering",
    date: new Date("Apr 04 2024 00:00:00 GMT-0800"),
    location: "Morristown, New Jersey",
    image: "https://media.discordapp.net/attachments/744341022435180544/946575060007800832/IMG_20220224_171059022.jpg",
  },
  {
    name: "CTF IRL®: The Movie: The Sequel",
    date: new Date("May 16 2023 00:00:00 GMT-0800"),
    endDate: new Date("May 16 2023 00:02:00 GMT-0800"),
    location: "Intramural Field",
    image: "https://media.discordapp.net/attachments/754767330247966841/1107449485774303335/ctfirlthemoviethesequel.png?width=823&height=658",
  },
];

const eventsWithIds: Event[] = eventsData.map((event) => ({
  ...event,
  id:
    event.name.toLowerCase().replaceAll(/[^a-z0-9_]/g, "_") +
    "_" +
    event.date.getTime().toString(),
}));

export default eventsWithIds;
