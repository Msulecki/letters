import { useEffect, useState } from 'react';
import { Letter } from '../types';

export const useRandomLetter = (data: { [key: string]: string }) => {
  const [randomLetter, setRandomLetter] = useState<Letter>();

  const dataEntries = Object.entries(data);

  const dataSize = dataEntries.length;

  const pickRandomLetterPair = () => {
    const randomNumber = Math.floor(Math.random() * dataSize);

    const result = {
      ukLetter: dataEntries[randomNumber][0],
      plLetter: dataEntries[randomNumber][1],
    };

    setRandomLetter(result);
  };

  useEffect(() => {
    if (!dataEntries.length) {
      return;
    }
    pickRandomLetterPair();
  }, [dataEntries.length]);

  return { randomLetter, pickRandomLetterPair };
};
