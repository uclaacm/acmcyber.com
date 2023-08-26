export interface Event {
  name: string;
  date: number;
}

const matsci = 'Math Sciences 5200';

const eventsData: Event[] = [
  {
    name: 'Cyber Talk: Binary Exploitation',
    date: new Date('5/9/23'),
    time: '6:00 - 8:00 PM (PST)',
    location: matsci,
  },
  {
    name: 'Cyber Talk: Binary Exploitation',
    date: new Date('5/9/23'),
    time: '6:00 - 8:00 PM (PST)',
    location: matsci,
  },
  {
    name: 'Cyber Talk: Binary Exploitation',
    date: new Date('5/9/23'),
    time: '6:00 - 8:00 PM (PST)',
    location: matsci,
  },
];

export default eventsData;
