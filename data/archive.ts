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
  description: string;
  events: EventArchive[];
}

export interface QuarterArchive {
  name: string;
  series: SeriesArchive[];
}

const archive: QuarterArchive[] = [
  /* WINTER 2023 */
  {
    name: "Winter 2023",
    series: [
      {
        name: "Example Cyber Series",
        description: "Learn how to hack websites!",
        events: [
          {
            name: "Example Archived Event",
            date: new Date("5/9/24"),
            location: "Math Sciences 5200",
            description:
              "Lorem ipsum dolor sit amet, consectetur \
                adipiscing elit, sed do eiusmod tempor \
                incididunt ut labore et dolore magna aliqua. \
                Ut enim ad minim veniam, quis nostrud exercitation \
                ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            tags: ["web", "sql", "hacking"],
            graphicPath: "/images/archive.svg",
          },
        ],
      },
    ],
  },
];

export default archive;
