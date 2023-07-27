import LetterPlaceholder from '../Letter/Letter';
import { letters } from '../../data/letters';
import { useRandomLetter } from '../../hooks/useRandomLetter';
import ChoiceOptions from '../ChoiceOptions/ChoiceOptions';
import { useState } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import MistakesCount from '../MistakesCount/MistakesCount';

const RandomLetter = () => {
  const { randomLetter, pickRandomLetterPair, progress } =
    useRandomLetter(letters);

  const [badChoice, setBadChoice] = useState(0);

  if (!randomLetter) {
    return null;
  }

  const onAfterChoice = (isSuccess: boolean) => {
    if (isSuccess) {
      if (progress.current === progress.all) {
        setBadChoice(0);
      }

      pickRandomLetterPair();
    } else {
      setBadChoice((prev) => prev + 1);
    }
  };

  return (
    <>
      <ProgressBar progress={progress} />
      <LetterPlaceholder letter={randomLetter} />
      <MistakesCount count={badChoice} />
      <ChoiceOptions
        letters={letters}
        chosenLetter={randomLetter}
        onAfterChoice={onAfterChoice}
      />
    </>
  );
};

export default RandomLetter;
