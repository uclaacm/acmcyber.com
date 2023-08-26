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
            name: "SQL Injection",
            date: "Week 6",
            description:
              "Event description Event descriptionEvent description Event description",
            recording: "https://youtube.com/<link_here>",
            slides: "https://docs.google.com/",
            tags: ["web", "sql", "hacking"],
          },
          {
            name: "XSS",
            date: "Week 4",
            description: "Event description",
            recording: "https://youtube.com/<link_here>",
            slides: "https://docs.google.com/",
            tags: ["web", "xss", "hacking"],
          },
          {
            name: "XSS",
            date: "Week 3",
            description: "Event description",
            recording: "https://youtube.com/<link_here>",
            slides: "https://docs.google.com/",
            tags: ["web", "xss", "hacking"],
          },
          {
            name: "XSS",
            date: "Week 2",
            description: "Event description",
            recording: "https://youtube.com/<link_here>",
            slides: "https://docs.google.com/",
            tags: ["web", "xss", "hacking"],
          },
          {
            name: "XSS",
            date: "Week 1",
            description: "Event description",
            recording: "https://youtube.com/<link_here>",
            slides: "https://docs.google.com/",
            tags: ["web", "xss", "hacking"],
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
            date: "Week 6",
            description: "Event description",
            recording: "https://youtube.com/<link_here>",
            slides: "https://docs.google.com/",
            tags: ["web", "binwalk", "hacking"],
          },
          {
            name: "IDK",
            date: "Week 6",
            description: "Event description",
            recording: "https://youtube.com/<link_here>",
            slides: "https://docs.google.com/",
            tags: ["test1"],
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
