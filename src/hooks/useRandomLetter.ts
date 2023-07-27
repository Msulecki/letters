import { useEffect, useRef, useState } from 'react';
import { Letter } from '../types';

export const useRandomLetter = (data: { [key: string]: string }) => {
  const [randomLetter, setRandomLetter] = useState<Letter>();

  const originalData = Object.entries(data);
  const dataEntries = useRef(Object.entries(data));

  const pickRandomLetterPair = () => {
    if (!dataEntries.current.length) {
      dataEntries.current = originalData;
    }

    const dataSize = dataEntries.current.length;

    const randomNumber = Math.floor(Math.random() * dataSize);

    const result = {
      ukLetter: dataEntries.current[randomNumber][0],
      plLetter: dataEntries.current[randomNumber][1],
    };

    dataEntries.current.splice(randomNumber, 1);

    setRandomLetter(result);
  };

  useEffect(() => {
    if (!dataEntries.current.length || !!randomLetter) {
      return;
    }

    pickRandomLetterPair();
  }, []);

  return {
    randomLetter,
    pickRandomLetterPair,
    progress: {
      current: originalData.length - dataEntries.current.length,
      all: originalData.length,
    },
  };
};
