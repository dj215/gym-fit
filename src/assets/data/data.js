import Screen1 from "../images/slider/Screen1.png";
import Screen2 from "../images/slider/Screen2.png";
import Screen3 from "../images/slider/Screen3.png";
import Screen4 from "../images/slider/Screen4.png";
import Screen5 from "../images/slider/Screen5.png";
import challenge from "../images/challenge.jpeg";

export const menuLink = [
  {
    name: "Login",
    id: "login",
    link: "/login",
  },
  {
    name: "Register",
    id: "register",
    link: "/register",
  },
  {
    name: "Help",
    id: "help",
    link: "/help",
  },
  {
    name: "About Us",
    id: "about",
    link: "/about",
  },
  {
    name: "Challenge List",
    id: "challenge",
    link: "/",
  },
];
export const afterLoginMenuLinks = [
  {
    name: "My Challenges",
    id: "user/myChallenges",
    link: "/user/myChallenges",
  },
  {
    name: "Help",
    id: "help",
    link: "/help",
  },
  {
    name: "About Us",
    id: "about",
    link: "/about",
  },
  {
    name: "Challenge List",
    id: "challenge",
    link: "/",
  },
];
export const sliderData = [
  {
    image: Screen1,
    content2: "Motivation to Hit the Gym!",
  },
  {
    image: Screen2,
    content1: "Join a challenge or create your own and make a cash pledge",
  },
  {
    image: Screen3,
    content1:
      "The Goal is to stay consistent,which will lead to great results!",
    content2:
      "To complete you just have to check in your local gym for the required time frames of the challenge",
  },
  {
    image: Screen4,
    content2: "Complete the challenge requirenments or lose your cash!",
  },
  {
    image: Screen5,
    content1: "Win back your pledge and more!",
    content2: "Proceeds are equally split between the winners.",
  },
];

export const challenges = [
  {
    image: challenge,
    name: "molly Private",
    startDate: "September 25 2021",
    endDate: "October 29 2021",
    pledge: "$100",
    maxPlayers: "100",
    maxPostSize: "$10000",
    isPrivate: true,
  },
  {
    image: challenge,
    name: "test Private",
    startDate: "September 25 2021",
    endDate: "October 29 2021",
    pledge: "$100",
    maxPlayers: "100",
    maxPostSize: "$10000",
    isPrivate: true,
  },
  {
    image: challenge,
    name: "test Public",
    startDate: "September 25 2021",
    endDate: "October 29 2021",
    pledge: "$100",
    maxPlayers: "100",
    maxPostSize: "$10000",
    isPrivate: false,
  },
  {
    image: challenge,
    name: "Fit Public",
    startDate: "September 25 2021",
    endDate: "October 29 2021",
    pledge: "$100",
    maxPlayers: "100",
    maxPostSize: "$10000",
    isPrivate: false,
  },
  {
    image: challenge,
    name: "Fit Private",
    startDate: "September 25 2021",
    endDate: "October 29 2021",
    pledge: "$100",
    maxPlayers: "100",
    maxPostSize: "$10000",
    isPrivate: true,
  },
];

export const runningChallenges = [
  {
    image: challenge,
    name: "molly Private",
    startDate: "September 25 2021",
    endDate: "October 29 2021",
    pledge: "$100",
    maxPlayers: "100",
    maxPostSize: "$10000",
    isPrivate: true,
    isRunning: true,
  },
  {
    image: challenge,
    name: "test Private",
    startDate: "September 25 2021",
    endDate: "October 29 2021",
    pledge: "$100",
    maxPlayers: "100",
    maxPostSize: "$10000",
    isPrivate: true,
    isRunning: true,
  },
];
