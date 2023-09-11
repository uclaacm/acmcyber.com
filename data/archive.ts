export interface EventArchive {
  name: string;
  date: Date;
  location?: string;
  description: string;
  recording?: string;
  slides?: string;
  tags: string[];
  graphicPath: string;
}

export interface SeriesArchive {
  name: string;
  events: EventArchive[];
}

export interface QuarterArchive {
  name: string;
  series: SeriesArchive[];
}

const archive: QuarterArchive[] = [
  /*WINTER2023*/
  {
    name: "Winter 2023",
    series: [
      {
        name: "Cyber Academy: Web Hacking",
        events: [
          {
            name: "Week 6: SQL Injection",
            date: new Date("5/9/24"),
            location: "Math Sciences 5200",
            description:
              "Lorem ipsum dolor sit amet, consectetur \
                adipiscing elit, sed do eiusmod tempor \
                incididunt ut labore et dolore magna aliqua. \
                Ut enim ad minim veniam, quis nostrud exercitation \
                ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            recording: "https://youtube.com/<link_here>",
            slides: "https://docs.google.com/",
            tags: ["web", "sql", "hacking"],
            graphicPath: "/images/archive.svg",
          },
          {
            name: "Week 5: XSS",
            date: new Date("5/9/24"),
            location: "Math Sciences 5200",
            description: "Event description",
            tags: ["web", "xss", "hacking"],
            graphicPath: "/images/archive.svg",
          },
          {
            name: "Example 3",
            date: new Date("5/9/24"),
            description: "Event description",
            recording: "https://youtube.com/<link_here>",
            slides: "https://docs.google.com/",
            tags: ["test3"],
            graphicPath: "/images/cyber-symposium.png",
          },
          {
            name: "Example 2",
            date: new Date("5/9/24"),
            location: "Math Sciences 5200",
            description: "Event description",
            recording: "https://youtube.com/<link_here>",
            slides: "https://docs.google.com/",
            tags: ["test2"],
            graphicPath: "/images/cyber-symposium.png",
          },
          {
            name: "Example 1",
            date: new Date("5/9/24"),
            location: "Math Sciences 5200",
            description: "Event description",
            recording: "https://youtube.com/<link_here>",
            slides: "https://docs.google.com/",
            tags: ["test1"],
            graphicPath: "/images/archive.svg",
          },
        ],
      },

      {
        name: "Special Topics",
        events: [],
      },
    ],
  },

  /*FALL2022*/
  {
    name: "Fall 2022",
    series: [
      {
        name: "Cyber Academy: Forensics",
        events: [
          {
            name: "Example 2",
            date: new Date("5/9/24"),
            description: "Event description",
            recording: "https://youtube.com/<link_here>",
            slides: "https://docs.google.com/",
            tags: ["test2"],
            graphicPath: "/images/cyber-symposium.png",
          },
          {
            name: "Example 1",
            date: new Date("5/9/24"),
            location: "Math Sciences 5200",
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

  /*Spring2022*/
  {
    name: "Spring 2022",
    series: [],
  },
];

export default archive;
