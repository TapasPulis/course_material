// ! Primitive and Union Types
const userName: string = "Bro";
const highScore: number = 90;
const isLoggedIn: boolean = true;
let countdown: number | null = 10;

// ! Structured Data (Arrays and Objects)
let gameTages: string[] = ["Goofydude123", "Plankton5", "TonySoprano"];

type Score = {
  points: number;
  isFinal: boolean;
};

let currentScore: Score = {
  points: 50,
  isFinal: true,
};

let userSetting: string | undefined;

// ! Functions

const logError = (errorMsg: string): void => {
  console.error(errorMsg);
};

logError("Something went wrong");

const calculatePercentage = (part: number, whole: number): number => {
  return (part / whole) * 100;
};
const percentageResult: number = calculatePercentage(1, 100);
console.log(percentageResult);
