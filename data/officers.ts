export type PersonInfoProps = {
  name: string;
  role: string;
  major: string;
  pronouns: string;
  photo: string;
};

const officers: PersonInfoProps[] = [
  {
    name: "Benson Liu",
    role: "Co-President",
    major: "Computer Science",
    pronouns: "he/him",
    photo: "bliu.png",
  },
  {
    name: "Salma Alandary",
    role: "Co-President",
    major: "Computer Science",
    pronouns: "she/her",
    photo: "salma.jpg",
  },
  {
    name: "Daniel Yang",
    role: "Officer",
    major: "Computer Science",
    pronouns: "he/him",
    photo: "daniel.jpg",
  },
];

export default officers;
