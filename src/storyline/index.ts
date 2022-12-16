import type { Story } from "./types";

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
    imageQuery: "dark bed",
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
    imageQuery: "door",
  },
  {
    id: "3",
    title: "Bad ending",
    description: "The killer was in your house all along.",
    ending: true,
    imageQuery: "killer",
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
    imageQuery: "",
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
    imageQuery: "bed",
  },
  {
    id: "6",
    title: "You see a masked man!",
    description: "He's holding a weapon!",
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
    imageQuery: "killer",
  },
  {
    id: "7",
    title: "Dumb ending",
    description: "What were you thinking?",
    ending: true,
    imageQuery: "killed",
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
    imageQuery: "street",
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
    imageQuery: "roof",
  },
  {
    id: "10",
    title: "You ran into a mythical forest",
    description: "Wow, this is so cool!",
    choices: [
      {
        text: "Keep going",
        target: "14",
      },
    ],
    imageQuery: "mythical forest",
  },
  {
    id: "11",
    title: "Car ending",
    description: "You got hit by a car",
    ending: true,
    imageQuery: "car accident",
  },
  {
    id: "12",
    title: "Worrying ending",
    description: "Your parents never came home",
    ending: true,
    imageQuery: "worrying",
  },
  {
    id: "13",
    title: "Good ending",
    description: "The police found you",
    ending: true,
    imageQuery: "police",
  },
  {
    id: "14",
    title: "You found a treasure chest",
    description: "Open it?",
    choices: [
      {
        text: "Open it",
        target: "15",
      },
      {
        text: "Leave it",
        target: "16",
      },
    ],
    imageQuery: "treasure chest",
  },
  {
    id: "15",
    title: "You found a sword",
    description: "You are now a knight",
    choices: [
      {
        text: "Keep exploring",
        target: "17",
      },
    ],
    imageQuery: "sword",
  },
  {
    id: "16",
    title: "You missed the treasure",
    description: "Where to now?",
    choices: [
      {
        text: "Go back",
        target: "14",
      },
      {
        text: "Keep going",
        target: "17",
      },
    ],
    imageQuery: "forest",
  },
  {
    id: "17",
    title: "Look, a dragon!",
    description: "What do you do?",
    choices: [
      {
        text: "Fight it",
        target: "18",
      },
      {
        text: "Run away",
        target: "20",
      },
    ],
    imageQuery: "dragon",
  },
  {
    id: "18",
    title: "You killed the dragon",
    description: "You are now a hero",
    ending: true,
    imageQuery: "hero",
  },
  {
    id: "19",
    title: "You died",
    description: "Why didn't you get the sword?",
    ending: true,
    imageQuery: "dead",
  },
  {
    id: "20",
    title: "You ran away",
    description: "You are now lost",
    choices: [
      {
        text: "Keep running",
        target: "21",
      },
      {
        text: "Go back",
        target: "17",
      },
    ],
    imageQuery: "lost",
  },
];

export const getStory = (id: string): Story | undefined => {
  return stories.find((story) => story.id === id);
};
