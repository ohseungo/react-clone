import { WORDS } from "constants/wordList";

const GAME_SETUP_KEY = "gameSetup";

export type GameSetupType = {
  answer: string;
  gameDate: string;
  guesses: string[];
};

const getAnswerByRandom = () => {
  const min = 0;
  const max = WORDS.length;

  const randomIndex = Math.floor(Math.random() * (max - min)) + min;

  return WORDS[randomIndex];
};

const saveGameSetupofDay = (gameSetup: GameSetupType) => {
  localStorage.setItem(GAME_SETUP_KEY, JSON.stringify(gameSetup));
};

const loadGameSetupOfDay = (): GameSetupType => {
  const setup = localStorage.getItem(GAME_SETUP_KEY);
  const todayString = new Date().toDateString();

  if (setup) {
    const setupObj = JSON.parse(setup) as GameSetupType;
    if (setupObj.gameDate === todayString) return JSON.parse(setup);
  }

  const answer = getAnswerByRandom();

  const gameSetup = { answer, gameDate: todayString, guesses: [] };
  saveGameSetupofDay(gameSetup);
  return gameSetup;
};

export const { answer, gameDate, guesses } = loadGameSetupOfDay();

export const updateGameSetupByCurrentGuess = (currentGuess: string) => {
  const newGuesses = [...guesses, currentGuess];
  const newGameSetup = { guesses: newGuesses, gameDate, answer };
  localStorage.setItem(GAME_SETUP_KEY, JSON.stringify(newGameSetup));
};
