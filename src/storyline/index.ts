export interface Choice {
  text: string;
  target: string;
}

export interface Story {
  id: string;
  title?: string;
  description?: string;
  choices?: Choice[];
  image?: string;
  ending?: boolean;
}

export const stories: Story[] = [
  {
    id: "1",
    title: "The Beginning",
    description: "You wake up in a dark room.",
    choices: [
      {
        text: "Stay in bed",
        target: "2",
      },
    ],
    image: "https://picsum.photos/200/300",
  },
  {
    id: "2",
    description: "You hear footsteps outside the door.",
    choices: [
      {
        text: "Investigate",
        target: "3",
      },
      {
        text: "Hide",
        target: "4",
      },
    ],
  },
  {
    id: "3",
    title: "Bad ending",
    description: "The killer was in your house all along.",
    ending: true,
  },
  {
    id: "4",
    description: "After a few minutes, you don't hear anything.",
    choices: [
      {
        text: "Go back to bed",
        target: "5",
      },
    ],
  },
  {
    id: "5",
    description: "What do you do now?",
    choices: [
      {
        text: "Go out the door and explore",
        target: "6",
      },
      {
        text: "Climb out the window",
        target: "9",
      },
    ],
  },
  {
    id: "6",
    title: "You see a masked man!",
    description: "He's holding a knife!",
    choices: [
      {
        text: "Fight him",
        target: "7",
      },
      {
        text: "Run away",
        target: "8",
      },
    ],
  },
  {
    id: "7",
    title: "Dumb ending",
    description: "What were you thinking?",
    ending: true,
  },
  {
    id: "8",
    title: "You are on the street now",
    description: "What do you do?",
    choices: [
      {
        text: "Go to the forest",
        target: "10",
      },
      {
        text: "Keep running",
        target: "11",
      },
    ],
  },
  {
    id: "9",
    title: "You are out",
    description: "You are on the roof now",
    choices: [
      {
        text: "Wait for your parents to come home",
        target: "12",
      },
      {
        text: "Call the police",
        target: "13",
      },
    ],
  },
  {
    id: "10",
    title: "You ran into a mystical forest",
    description: "Wow, this is so cool!",
    choices: [
      {
        text: "Keep going",
        target: "14",
      },
    ],
  },
  {
    id: "11",
    title: "Car ending",
    description: "You got hit by a car",
    ending: true,
  },
  {
    id: "12",
    title: "Worrying ending",
    description: "Your parents never came home",
    ending: true,
  },
  {
    id: "13",
    title: "Good ending",
    description: "The police found you",
    ending: true,
  },
];

export const getStory = (id: string): Story | undefined => {
  return stories.find((story) => story.id === id);
};
