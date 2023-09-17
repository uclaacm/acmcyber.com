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
  /* SPRING 2023 */
  {
    name: "Spring 2023",
    series: [
      {
        name: "About Cyber", 
        description: "Get to know us better!", 
        events: [
          {
            name: "Spring General Meeting", 
            date: new Date("4/12/23"), 
            location: "Math Sciences 5200", 
            description: 
              "Learn about what we have planned for this quarter! \
                Not only will Cyber Academy cover topics with real \
                industry applications like reverse engineering, program \
                analysis, formal verification, and more, ACM Cyber \
                is also launching a brand new Cyber Lab track where you'll \
                have the opportunity to work on hands-on projects like rootkit \
                malware writing and secure OS development. Furthermore, \
                come to learn more about what Psi Beta Rho, UCLA's top-notch \
                cybersecurity and capture-the-flag team, is doing this spring so \
                you can apply your skills in exciting and competitive ways!", 
            slides: "bit.ly/cyber-spring-gm-23", 
            tags: ["gm"], 
            graphicPath: "/images/archive/s23/gm.jpg",
          }, 
          {
            name: "Cyber x Studio: Social", 
            date: new Date("4/21/23"), 
            location: "Kerckhoff 131", 
            description:
              "Confident in your racing ability? Join ACM Cyber and ACM Studio \
                in our competitive Mario Kart tournament! Wager your pride on \
                the tracks, meet new people from both committees, or \
                cheer from the pit stop and play board games!", 
            tags: ["social", "ACM Studio", "colab"], 
            graphicPath: "/images/archive/s23/mariokart.jpeg"
          },
          {
            name: "Cyber x SWE: Career Panel",
            date: new Date("5/24/23"),
            location: "Math Sciences 5200",
            description:
              "Ever thought about a career in cybersecurity? Want to \
                hear directly from professionals in the field? Gain valuable \
                insights into the industry, ask your burning questions, and learn \
                about the exciting opportunities available to you!",
            tags: ["career", "SWE", "colab"],
            graphicPath: "/images/archive/s23/swexcyber.jpg",
          },
          {
            name: "AI x Cyber: Symposium", 
            date: new Date("5/31/23"), 
            location: "Math Sciences 5200", 
            description: 
              "A celebration and social between ACM AI and ACM Cyber! \
                Join us in a highlight of the cool projects that our \
                committees have been working on this quarter!", 
            tags: ["social", "ACM AI", "colab"], 
            slides: "https://tinyurl.com/ai-cyber-symposium-2023",
            graphicPath: "/images/cyber-symposium.png",
          },
        ]
      },
      {
        name: "Guest Speakers", 
        description: "Learn from ACM Cyber alumni and cybersecurity professionals!", 
        events: [
          {
            name: "William Wang", 
            date: new Date("5/9/23"), 
            location: "Ackerman 3517", 
            description: 
              "Looking to sharpen your computer science and cybersecurity skills \
                while engaging in thrilling competitions? Look no further than PBR: \
                UCLA's top-notch cybersecurity team! Join us this week for an exciting \
                talk from ACM Cyber alumni Will Wang who plays CTFs with DiceGang and \
                does blockchain security research at OtterSec! If you're interested \
                in learning about his experience with CTFs and his current work in the \
                security industry, join us!", 
            tags: ["Speaker", "Career", "Industry"], 
            graphicPath: "/images/archive/s23/william.jpg"
          },
          {
            name: "Secure OS Lab: Aaron Yoo", 
            date: new Date("5/11/23"), 
            location: "Boelter 4760", 
            description: 
              "Don't forget to come to Secure OS Lab for an exciting talk \
              from ACM Cyber alumni, Aaron Yoo. Aaron is currently a \
              currently a software engineer at Apple, and if you are interested \
              in learning more about his experience with OS development and what \
              working at Apple is like, be sure to show up!", 
            tags: ["Speaker", "Career", "Industry"], 
            graphicPath: "/images/archive/s23/aaron.jpg",
          },
          {
            name: "LiveOverflow", 
            date: new Date("5/13/23"), 
            location: "https://ucla.zoom.us/j/93047506842", 
            description: 
              "Want to hear directly from a YouTuber with over 800k subscribers? \
                Make sure to tune into our LiveOverflow talk and Q&A where he'll be \
                talking about his experiences with playing CTFs and pursuing a career \
                in cybersecuirty! LiveOverflow is a YouTuber who makes videos about \
                various IT security topics and his experiences competing in hacking competitions.", 
            tags: ["Speaker", "Career", "Industry"], 
            graphicPath: "/images/archive/s23/liveoverflow.png",
          },
          {
            name: "Malware Lab: Sanjana Sarda", 
            date: new Date("5/15/23"), 
            location: "Kerckhoff 131", 
            description: 
              "Don't forget to come to Malware Lab for an exciting talk \
              from ACM Cyber alumni, Sanjana Sarda. Sanjana is currently \
              an Offensive Security Engineer at Anduril Industries. If you \
              are interested in learning more about her experience in the \
              security industry, be sure to show up!", 
            tags: ["Speaker", "Career", "Industry"], 
            graphicPath: "/images/archive/s23/sanjana.png",
          },
        ]
      },
      {
        name: "Cyber Academy",
        description: "Learn how to hack websites!",
        events: [
          {
            name: "Intro to Reverse Engineering",
            date: new Date("4/19/23"),
            location: "Math Sciences 5200",
            description:
              "Solve puzzles and learn how to break apart \
                daunting problems, effectively use a debugger, \
                and more! We'll also be hosting CS 33 office hours \
                after the presentation!",
            recording: "https://tinyurl.com/cyberacademyv1s23", 
            slides: "https://tinyurl.com/cyberacademys1s23",
            tags: ["JavaScript", "Python", "Java", "x86 assembly", "CS 33"],
            graphicPath: "/images/archive/s23/ca1.png",
          },
          {
            name: "Binary Analysis Tools",
            date: new Date("4/26/23"),
            location: "Math Sciences 5200",
            description:
              "Interested in learning how to break down \
                and analyze computer programs? Taking CS 33 and \
                in need of some help with bomb lab? \
                We'll teach you how to take your skills with gdb to \
                next level and introduce you to new techniques and software \
                to make your life easier!",
            slides: "https://tinyurl.com/cyberacademys2s23",
            tags: ["GDB", "x86 assembly", "CS 33"],
            graphicPath: "/images/archive/s23/ca2.png",
          },
          {
            name: "Binary Exploitation Tools",
            date: new Date("5/10/23"),
            location: "Math Sciences 5200",
            description:
              "Ever wonder how hackers write their own exploits? \
                We'll be going over tools for binary exploitation from \
                the basics of how to perform and script traditional attacks such \
                as buffer overflow, stack smashing, and ret2libc - no experience \
                necessary!",
            recording: "https://tinyurl.com/cyberacademyv3s23",
            slides: "https://tinyurl.com/cyberacademys3s23",
            tags: ["Buffer Overflow", "x86 assembly", "CS 33"],
            graphicPath: "/images/archive/s23/ca3.jpg",
          },
          {
            name: "Software Verification",
            date: new Date("5/17/23"),
            location: "Math Sciences 5200",
            description:
              "Ever wonder if you could write 100% bug-free code? We'll \
                be looking at the tools and algorithms behind building \
                provably secure code, from SAT solvers to modern theorem \
                provers like Z3 - no experience necessary!",
            slides: "https://tinyurl.com/cyberacademys4s23",
            tags: ["Software", "x86 assembly"],
            graphicPath: "/images/archive/s23/ca4.png",
          },
        ],
      },
      {
        name: "Cyber Lab: Secure OS Lab", 
        description: "Learn how to develop your own secure operating system!", 
        events: [
          {
            name: "Secure OS Lab", 
            date: new Date("4/20/23"), 
            location: "Boelter 4760", 
            description: 
              "Want to learn how to develop your own bootloader \
              and kernel? We'll start covering the boot process \
              by printing messages from memory and reading data \
              from the disk", 
            slides: "https://tinyurl.com/secureos1s23",
            tags: ["Secure OS"], 
            graphicPath: "/images/archive/s23/os1.jpg",
          },
          {
            name: "Secure OS Lab", 
            date: new Date("4/27/23"), 
            location: "Boelter 4760", 
            description: 
              "Want to learn how to develop your own bootloader \
              and kernel? We'll continue by learning more about \
              32-bit protected mode and loading our own kernel!", 
            slides: "https://tinyurl.com/secureos2s23",
            tags: ["Secure OS"], 
            graphicPath: "/images/archive/s23/os2.jpg",
          },
          {
            name: "Secure OS Lab", 
            date: new Date("5/18/23"), 
            location: "Boelter 4760", 
            description: 
              "We'll continue our work by adding features to \
              make our OS more secure!", 
            tags: ["Secure OS"], 
            graphicPath: "/images/archive/s23/os3.png",
          },
          {
            name: "Secure OS Lab", 
            date: new Date("5/25/23"), 
            location: "Boelter 4760", 
            description: 
              "We'll continue our work by adding features to \
              make our OS more secure!", 
            tags: ["Secure OS"], 
            graphicPath: "/images/archive/s23/os3.png",
          },
        ],
      },
      {
        name: "Cyber Lab: Malware Lab", 
        description: "Learn how to make your own rootkit!", 
        events: [
          {
            name: "Malware Lab", 
            date: new Date("4/17/23"), 
            location: "Kerckhoff 131", 
            description: 
              "Let's develop our own rootkits! We'll start \
              by covering syscalls and shared libraries to \
              set a foundation for our core rootkit.", 
            tags: ["Malware"], 
            slides: "https://tinyurl.com/malwarelab1s23",
            graphicPath: "/images/archive/s23/malware1.jpg",
          },
          {
            name: "Malware Lab", 
            date: new Date("4/24/23"), 
            location: "Kerckhoff 131", 
            description: 
              "Let's develop our own rootkits! We'll continue by \
              learning more about networking and sockets this week.", 
            tags: ["Malware"], 
            slides: "https://tinyurl.com/malwarelab2s23",
            graphicPath: "/images/archive/s23/malware2.jpeg",
          },
          {
            name: "Malware Lab", 
            date: new Date("5/8/23"), 
            location: "Kerckhoff 131", 
            description: 
              "Now that we've covered the basics of a rootkit, \
              are you excited to design your own features? We'll \
              guide you through exploitation, payloads, and get started \
              with expanding our rootkit!", 
            tags: ["Malware"], 
            slides: "https://tinyurl.com/malwarelab3s23",
            graphicPath: "/images/archive/s23/malware3.jpeg",
          },
          {
            name: "Malware Lab", 
            date: new Date("5/22/23"), 
            location: "Kerckhoff 131", 
            description: 
              "We'll continue our work in expanding our rootkit!", 
            tags: ["Malware"], 
            graphicPath: "/images/archive/s23/malware4.jpeg",
          },
        ]
      },
    ],
  },
];

export default archive;
