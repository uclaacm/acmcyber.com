export interface EventType {
  name: string;
  description: string;
  link?: string;
  id: string;
  icon?: any;
  textIcon?: string;
  iconAlt?: string;
}

enum EventKind {
  CyAc = "Cyber Academy",
  PBR = "Psi Beta Rho",
  CyLab = "Cyber Lab",
  LACTF = "LA CTF",
  Misc = "Miscellaneous",
}

export const eventTypes = [
  {
    name: EventKind.CyAc,
    description: 'Cyber Academy is a weekly track designed to introduce you to the world of cybersecurity and help you expand your knowledge, regardless of your current skill level. Each week, we\'ll explore various cybersecurity topics in 15-20 minute talks and provide you with the opportunity to apply your learning through engaging "capture-the-flag"-style challenges. You\'ll also have the chance to collaborate with your peers in smaller groups to do some hands-on hacking! At Cyber Academy, we strive to open the door to all that cybersecurity has to offer, helping you learn and apply the foundational skills essential for success in this dynamic field.',
    id: "cyber-academy",
    icon: "cyber-logo-light-inverted.png"
  },
  {
    name: EventKind.CyLab,
    description: 'ACM Cyber\'s newest offering, Cyber Lab is home to a rotating variety of quarter-long projects, planned to give you the freedom to learn something new and apply what you already know in a practical setting. With help from current officers, alumni mentors, and other members of ACM Cyber, you can create a unique product by the end of the quarter.  From building your own operating system, to video game hacking, to adversarial AI, Cyber Lab has it all!  Be sure to keep a lookout for our future projects and even submit ideas of your own.',
    id: "cyber-lab",
    icon: "test-tube.svg"
  },
  {
    name: EventKind.PBR,
    description: 'Psi Beta Rho (PBR) is UCLA\'s premier competitive cybersecurity team. We are a group of hackers, programmers, and security enthusiasts who love to learn and compete. Whether we are pwning a binary or attacking a site using cross-site scripting, we like to have fun! We mostly compete in Capture the Flag (CTF) competitions which are cybersecurity competitions where you tackle challenges and gain hands-on experience with solving security problems! If you are interested in getting hands-on experience with exploit development, security research, or just enjoy solving challenges then PBR is for you! We are advised by Dr. Yuan Tian.',
    link: "https://pbr.uclaacm.com/",
    id: "pbr",
    textIcon: "ψβρ"
  },
  {
    name: EventKind.LACTF,
    description: 'Our largest event of the year, LA CTF is an annual cybersecurity competition with speakers, career events, challenges, and prizes, hosted right here at UCLA. Whether you are tackling your first exploit or have professional experience, there will be something just right for you!  Participation and planning sessions are open to all.',
    id: "lactf",
    link: 'https://lac.tf',
    icon: "flag.svg"
  },
  {
    name: EventKind.Misc,
    description: 'Alongside our other events, we also offer socials, member talks, speaker events, career panels, and more! Our club not only helps develop peoples\' careers but also grows the community of hacking enthusiasts!',
    id: "misc",
    icon: "boba.svg"
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

const CyLabLoc = "Franz 2258A";
const CyAcLoc = "Boelter 4760";
const time = "6:00 - 8:00 PM (PST)";

const defaultDescription = "We are a group of hackers & developers passionate about cybersecurity. We break things for fun and work to improve our skills in a variety of disciplines, whether it be reverse engineering, binary exploitation, cryptography, or something entirely different. We aim to nurture the love of cybersecurity in the students at UCLA!"

const eventsData: Event[] = [
  {
    name: "Cyber Fall GM",
    description: defaultDescription,
    type: EventKind.Misc,
    date: new Date("10/4/23"),
    time: time,
    location: CyLabLoc,
  },
  {
    name: "Setup and Intro to Linux",
    description: defaultDescription,
    type: EventKind.CyAc,
    date: new Date("10/9/23"),
    time: time,
    location: CyAcLoc,
  },
  {
    name: "Usable Security Talk",
    description: defaultDescription,
    type: EventKind.CyLab,
    date: new Date("10/11/23"),
    time: time,
    location: CyLabLoc,
  },
  {
    name: "File Forensics",
    description: defaultDescription,
    type: EventKind.CyAc,
    date: new Date("10/16/23"),
    time: time,
    location: CyAcLoc,
  },
  {
    name: "Machine Unlearning",
    description: defaultDescription,
    type: EventKind.CyLab,
    date: new Date("10/18/23"),
    time: time,
    location: CyLabLoc,
  },
  {
    name: "CTF #1: Intro to Pwn",
    description: defaultDescription, 
    type: EventKind.PBR, 
    date: new Date("10/21/23"),
    time: "12:00 - 6:00 PM (PST)", 
    location: "TBD",
  },
  {
    name: "OSINT/Social Engineering",
    description: defaultDescription,
    type: EventKind.CyAc,
    date: new Date("10/23/23"),
    time: time,
    location: CyAcLoc,
  },
  {
    name: "Starbleed",
    description: defaultDescription,
    type: EventKind.CyLab,
    date: new Date("10/25/23"),
    time: time,
    location: CyLabLoc,
  },
  {
    name: "Study Social",
    description: defaultDescription,
    type: EventKind.Misc,
    date: new Date("10/30/23"),
    time: "TBD",
    location: "TBD",
  },
  {
    name: "Study Social",
    description: defaultDescription,
    type: EventKind.Misc,
    date: new Date("11/01/23"),
    time: "TBD",
    location: "TBD",
  },
  {
    name: "Robert Chen, OtterSec Guest Speaker",
    description: defaultDescription,
    type: EventKind.CyAc,
    date: new Date("11/06/23"),
    time: time,
    location: CyAcLoc,
  },
  {
    name: "Professor Tian Guest Speaker",
    description: defaultDescription,
    type: EventKind.CyLab,
    date: new Date("11/08/23"),
    time: time,
    location: CyLabLoc,
  },
  {
    name: "CTF #2: Federated Learning Attacks & Defenses",
    description: defaultDescription,
    type: EventKind.PBR,
    date: new Date("11/11/23"),
    time: "TBD",
    location: "TBD",
  },
  {
    name: "Intro to Web Hacking",
    description: defaultDescription,
    type: EventKind.CyAc,
    date: new Date("11/13/23"),
    time: time,
    location: CyAcLoc,
  },
  {
    name: "Cyber CTF Infrastructure",
    description: defaultDescription,
    type: EventKind.CyLab,
    date: new Date("11/15/23"),
    time: time,
    location: CyLabLoc,
  },
  {
    name: "Intro to Ghidra",
    description: defaultDescription,
    type: EventKind.CyAc,
    date: new Date("11/20/23"),
    time: time,
    location: CyAcLoc,
  },
  {
    name: "CTF #3: Garbled Circuits",
    description: defaultDescription,
    type: EventKind.PBR,
    date: new Date("11/25/23"),
    time: "TBD",
    location: "TBD",
  },
  {
    name: "Quines and Polygots",
    description: defaultDescription,
    type: EventKind.CyAc,
    date: new Date("11/27/23"),
    time: time,
    location: CyAcLoc,
  },
  {
    name: "Careers in Cyber",
    description: defaultDescription,
    type: EventKind.CyLab,
    date: new Date("11/29/23"),
    time: time,
    location: CyLabLoc,
  },
  {
    name: "AI x Cyber: Symposium",
    description: defaultDescription,
    type: EventKind.CyAc,
    date: new Date("12/04/23"),
    time: time,
    location: CyAcLoc,
  },
  {
    name: 'ACM Fall General Meeting 2023',
    description: defaultDescription,
    type: EventKind.Misc,
    date: new Date("2023-10-02"),
    time: '6:00 - 8:00 PM (PST)',
    location: "TBD",
  },
  {
    name: 'Cyber Fall General Meeting 2023',
    description: defaultDescription,
    type: EventKind.Misc,
    date: new Date("2023-10-09"),
    time: '6:00 - 8:00 PM (PST)',
    location: "TBD",
  },
];

export default eventsData;
