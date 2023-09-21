export interface EventType {
  name: string;
  description: string;
  link?: string;
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
    icon: "cyber-logo-light.png"
  },
  {
    name: EventKind.CyLab,
    description: 'ACM Cyber\'s newest offering, Cyber Lab is home to a rotating variety of quarter-long projects, planned to give you the freedom to learn something new and apply what you already know in a practical setting. With help from current officers, alumni mentors, and other members of ACM Cyber, you can create a unique product by the end of the quarter.  From building your own operating system, to video game hacking, to adversarial AI, Cyber Lab has it all!  Be sure to keep a lookout for our future projects and even submit ideas of your own.',
    icon: "test-tube.svg"
  },
  {
    name: EventKind.PBR,
    description: 'Psi Beta Rho (PBR) is UCLA\'s premier competitive cybersecurity team. We are a group of hackers, programmers, and security enthusiasts who love to learn and compete. Whether we are pwning a binary or attacking a site using cross-site scripting, we like to have fun! We mostly compete in Capture the Flag (CTF) competitions which are cybersecurity competitions where you tackle challenges and gain hands-on experience with solving security problems! If you are interested in getting hands-on experience with exploit development, security research, or just enjoy solving challenges then PBR is for you! We are advised by Dr. Yuan Tian.',
    link: "https://pbr.uclaacm.com/",
    textIcon: "ψβρ"
  },
  {
    name: EventKind.LACTF,
    description: 'Our largest event of the year, LA CTF is an annual cybersecurity competition with speakers, career events, challenges, and prizes, hosted right here at UCLA. Whether you are tackling your first exploit or have professional experience, there will be something just right for you!  Participation and planning sessions are open to all.',
    link: 'https://lac.tf',
    icon: "flag.svg"
  },
  {
    name: EventKind.Misc,
    description: 'Alongside our other events, we also offer socials, member talks, speaker events, career panels, and more! Our club not only helps develop peoples\' careers but also grows the community of hacking enthusiasts!',
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
