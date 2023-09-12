export interface EventType {
  name: string;
  description: string;
  link?: string;
}

enum EventKind {
  PBR = "Psi Beta Rho",
  CyLab = "Cyber Lab",
  LACTF = "LA CTF",
  CyTalks = "Cyber Talks",
  Misc = "Miscellaneous",
}

export const eventTypes = [
  {
    name: EventKind.PBR,
    description: "add description here",
    link: "https://pbr.uclaacm.com/",
  },
  {
    name: EventKind.CyLab,
    description: "add description here",
  },
  {
    name: EventKind.LACTF,
    description: "add description here",
    link: "https://lac.tf",
  },
  {
    name: EventKind.CyTalks,
    description: "add description here",
  },
  {
    name: EventKind.Misc,
    description: "add description here",
  },
];

export interface Event {
  name: string;
  type: EventKind;
  date: Date;
  time: string;
  location: string;
  description: string;
}

const matsci = "Math Sciences 5200";
const defaultDescription =
  "Lorem ipsum dolor sit amet, consectetur \
  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore \
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
  ullamco laboris nisi ut aliquip ex ea commodo consequat. ";

const eventsData: Event[] = [
  {
    name: "Example Cyber Event",
    description: defaultDescription,
    type: EventKind.CyLab,
    date: new Date(),
    time: "6:00 - 8:00 PM (PST)",
    location: matsci,
  },
];

export default eventsData;
