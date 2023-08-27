export interface ArchivedEvent {
  name: string;
  type: string;
  date: Date;
  time: string;
  location?: string;
  description: string;
  recording: string;
  slides: string;
  tags: string[];
  graphicPath: string;
}

export interface SeriesArchive {
  seriesName: string;
  events: ArchivedEvent[];
}

export interface QuarterArchive {
  name: string;
  series: SeriesArchive[];
}

const archive = [
  {
    name: "Winter 2023",
    series: [
      {
        seriesName: "Cyber Academy: Web Hacking",
        events: [
          {
            name: "Week 6: SQL Injection",
            date: new Date('5/9/24'),
            description:
              "Event description Event descriptionEvent description Event description",
            recording: "https://youtube.com/<link_here>",
            slides: "https://docs.google.com/",
            tags: ["web", "sql", "hacking"],
            graphicPath: "/images/archive.svg",
          },
          {
            name: "XSS",
            date: new Date('5/9/24'),
            description: "Event description",
            recording: "https://youtube.com/<link_here>",
            slides: "https://docs.google.com/",
            tags: ["web", "xss", "hacking"],
            graphicPath: "/images/archive.svg",
          },
          {
            name: "XSS",
            date: new Date('5/9/24'),
            description: "Event description",
            recording: "https://youtube.com/<link_here>",
            slides: "https://docs.google.com/",
            tags: ["web", "xss", "hacking"],
            graphicPath: "/images/archive.svg",
          },
          {
            name: "XSS",
            date: new Date('5/9/24'),
            description: "Event description",
            recording: "https://youtube.com/<link_here>",
            slides: "https://docs.google.com/",
            tags: ["web", "xss", "hacking"],
            graphicPath: "/images/archive.svg",
          },
          {
            name: "XSS",
            date: new Date('5/9/24'),
            description: "Event description",
            recording: "https://youtube.com/<link_here>",
            slides: "https://docs.google.com/",
            tags: ["web", "xss", "hacking"],
            graphicPath: "/images/archive.svg",
          },
        ],
      },
    ],
  },
  {
    name: "Fall 2023",
    series: [
      {
        seriesName: "Cyber Academy: Forensics",
        events: [
          {
            name: "Binwalk",
            date: new Date('5/9/24'),
            description: "Event description",
            recording: "https://youtube.com/<link_here>",
            slides: "https://docs.google.com/",
            tags: ["web", "binwalk", "hacking"],
            graphicPath: "/images/cyber-symposium.png",
          },
          {
            name: "IDK",
            date: new Date('5/9/24'),
            description: "Event description",
            recording: "https://youtube.com/<link_here>",
            slides: "https://docs.google.com/",
            tags: ["test1"],
            graphicPath: "/images/cyber-symposium.png",
          },
        ],
      },
    ],
  },
];

/* 
    quarter {

    }
*/

export default archive;
