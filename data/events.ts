export interface Event {
  name: string;
  type: string;
  date: Date;
  time: string;
  location: string;
}

const matsci = 'Math Sciences 5200';
const cylab = 'Cyber Lab';
const pbr = 'Psi Beta Rho';
const defaultDescription = 'Come join us to learn about exploiting binaries and pwn!';

const eventsData: Event[] = [
  {
    name: 'Cyber Talk: Binary Exploitation',
    description: defaultDescription,
    type: cylab,
    date: new Date(),
    time: '6:00 - 8:00 PM (PST)',
    location: matsci,
  },
  {
    name: 'Cyber Talk: Binary Exploitation OWO UWU',
    description: defaultDescription,
    type: pbr,
    date: new Date(),
    time: '6:00 - 8:00 PM (PST)',
    location: matsci,
  },
  {
    name: 'Cyber Talk: Binary Exploitation',
    description: defaultDescription,
    type: cylab,
    date: new Date('5/9/23'),
    time: '6:00 - 8:00 PM (PST)',
    location: matsci,
  },
  {
    name: 'Cyber Talk: Binary Exploitation',
    description: defaultDescription,
    type: cylab,
    date: new Date('5/9/24'),
    time: '6:00 - 8:00 PM (PST)',
    location: matsci,
  },
  {
    name: 'Cyber Talk: Binary Exploitation',
    description: defaultDescription,
    type: pbr,
    date: new Date('5/9/24'),
    time: '6:00 - 8:00 PM (PST)',
    location: matsci,
  },
  {
    name: 'Cyber Talk: Binary Exploitation',
    description: defaultDescription,
    type: cylab,
    date: new Date('5/9/24'),
    time: '6:00 - 8:00 PM (PST)',
    location: matsci,
  },
  {
    name: 'Cyber Talk: Binary Exploitation',
    description: defaultDescription,
    type: cylab,
    date: new Date('5/9/24'),
    time: '6:00 - 8:00 PM (PST)',
    location: matsci,
  },
  {
    name: 'Cyber Talk: Binary Exploitation',
    description: defaultDescription,
    type: pbr,
    date: new Date('5/9/24'),
    time: '6:00 - 8:00 PM (PST)',
    location: matsci,
  },
  {
    name: 'Cyber Talk: Binary Exploitation',
    description: defaultDescription,
    type: cylab,
    date: new Date('5/9/24'),
    time: '6:00 - 8:00 PM (PST)',
    location: matsci,
  },
];

export default eventsData;
