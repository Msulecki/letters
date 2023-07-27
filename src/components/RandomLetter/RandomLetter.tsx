import LetterPlaceholder from '../Letter/Letter';
import { letters } from '../../data/letters';
import { useRandomLetter } from '../../hooks/useRandomLetter';
import ChoiceOptions from '../ChoiceOptions/ChoiceOptions';

const RandomLetter = () => {
  const { randomLetter, pickRandomLetterPair } = useRandomLetter(letters);

  if (!randomLetter) {
    return null;
  }

  return (
    <>
      <LetterPlaceholder letter={randomLetter} />
      <ChoiceOptions
        letters={letters}
        chosenLetter={randomLetter}
        onAfterChoice={pickRandomLetterPair}
      />
    </>
  );
};

export default RandomLetter;
