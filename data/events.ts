import eventsRaw from "./events.json" assert { type: "json" }

export interface CyaneaEvent {
  id: string
  title: string
  type?: string | string[] | null
  description: string
  location: string
  banner?: string | null
  start: number
  end: number
  links?: Record<string, string> | null
  meta?: Record<string, any> | null
}

let eventsData = eventsRaw as CyaneaEvent[];
eventsData.sort((a,b) => a.start - b.start);
export default eventsData;


export interface EventType {
  name: string;
  description: string;
  link?: string;
  id: string;
  icon?: any;
  textIcon?: string;
  iconAlt?: string;
  active: boolean;
  descLink?: string;
}

enum EventKind {
  CyAc = "Cyber Academy",
  PBR = "Psi Beta Rho",
  CyLab = "Cyber Lab",
  LACTF = "LA CTF",
  E1 = "Engineering 1",
  Misc = "Miscellaneous",
  Special = "Cyber Special Topics",
  ECTF = "ECTF",
}

export const eventTypes = [
  {
    name: EventKind.CyAc,
    description: 'Cyber Academy is a weekly track designed to introduce you to the world of cybersecurity and help you expand your knowledge, regardless of your current skill level. Each week, we\'ll explore various cybersecurity topics in 15-20 minute talks and provide you with the opportunity to apply your learning through engaging "capture-the-flag"-style challenges. You\'ll also have the chance to collaborate with your peers in smaller groups to do some hands-on hacking! At Cyber Academy, we strive to open the door to all that cybersecurity has to offer, helping you learn and apply the foundational skills essential for success in this dynamic field.',
    id: "cyber-academy",
    icon: "cyber-logo-light-inverted.png",
    active: true,
  },
  {
    name: EventKind.CyLab,
    description: 'Cyber Lab is home to a rotating variety of quarter-long projects, planned to give you the freedom to learn something new and apply what you already know in a practical setting. With help from current officers, alumni mentors, and other members of ACM Cyber, you can create a unique product by the end of the quarter.  From building your own operating system, to video game hacking, to adversarial AI, Cyber Lab has it all!  Be sure to keep a lookout for our future projects and even submit ideas of your own.',
    id: "cyber-lab",
    icon: "test-tube.svg",
    active: true,
  },
  {
    name: EventKind.PBR,
    description: 'Psi Beta Rho (PBR) is UCLA\'s premier competitive cybersecurity team. We are a group of hackers, programmers, and security enthusiasts who love to learn and compete. Whether we are pwning a binary or attacking a site using cross-site scripting, we like to have fun! We mostly compete in Capture the Flag (CTF) competitions which are cybersecurity competitions where you tackle challenges and gain hands-on experience with solving security problems! If you are interested in getting hands-on experience with exploit development, security research, or just enjoy solving challenges, then PBR is for you! We are advised by Dr. Yuan Tian.',
    link: "https://pbr.uclaacm.com/",
    id: "pbr",
    textIcon: "ψβρ",
    active: true,
  },
  {
    name: EventKind.LACTF,
    description: 'Our largest event of the year, LA CTF is an annual cybersecurity competition with speakers, career events, challenges, and prizes, hosted right here at UCLA. Whether you are tackling your first exploit or have professional experience, there will be something just right for you!  Participation and planning sessions are open to all.',
    id: "lactf",
    link: 'https://lac.tf',
    icon: "flag.svg",
    active: true,
  },
  {
    name: EventKind.E1,
    description: 'ACM Cyber\'s Engineering 1 class, Malware Defense, teaches fundamental cybersecurity concepts and lets you apply what you\'ve learned through a hands-on project: creating your own modular malware! Topics covered include cybersecurity and ethics, phishing, Python, Git, steps of the cyber kill chain, and more. This course is beginner-friendly, so even if you\'ve never coded before, you are welcome to enroll! For more information, check out this form: ',
    id: "e1",
    icon: "bug.svg",
    active: true,
    descLink: "https://l.acmcyber.com/e1-pte"
  },
  {
    name: EventKind.Misc,
    description: 'Alongside our other events, we also offer socials, member talks, speaker events, career panels, and more! Our club not only helps develop people\'s careers but also grows the community of hacking enthusiasts!',
    id: "misc",
    icon: "boba.svg",
    active: true,
  },
  {
    name: EventKind.Special,
    description: "Cyber Special Topics explores the intersection of cybersecurity with other fields through exciting talks and demos. Each week, you\'ll be able to gain practical experience and insights that can be applied universally in the dynamic landscape of cybersecurity.",
    id: "cyber-special-topics",
    textIcon: "</>",
    active: false,
  },
  {
    name: EventKind.ECTF,
    description: "ACM Cyber and IEEE present ECTF!",
    id: "ectf",
    textIcon: "⚙",
    active: false,
  }
];
