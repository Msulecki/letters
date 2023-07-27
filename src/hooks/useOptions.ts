import { Letter } from '../types';

interface Props {
  letters: { [key: string]: string };
  chosenLetter: Letter;
  size?: number;
}

export const useOptions = ({ letters, chosenLetter, size = 5 }: Props) => {
  const letterEntries = Object.entries(letters);

  if (size > letterEntries.length) {
    throw Error('Options count is bigger that letters count');
  }

  const badOptions = letterEntries
    .filter((letter) => letter[0] !== chosenLetter.ukLetter)
    .map((letter) => ({ ukLetter: letter[0], plLetter: letter[1] }))
    .sort(() => Math.random() - 0.5)
    .slice(0, size - 1);

  const shuffled = [...badOptions, chosenLetter].sort(
    () => Math.random() - 0.5
  );

  return shuffled;
};
