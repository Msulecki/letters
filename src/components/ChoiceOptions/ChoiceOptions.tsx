import React, { FC } from 'react';
import { Letter } from '../../types';
import { useOptions } from '../../hooks/useOptions';
import './ChoiceOptions.scss';

interface Props {
  letters: { [key: string]: string };
  chosenLetter: Letter;
  onAfterChoice?: (isSuccess: boolean) => void;
}

const ChoiceOptions: FC<Props> = ({
  letters,
  chosenLetter,
  onAfterChoice = () => {},
}) => {
  const options = useOptions({ letters, chosenLetter });

  const onOptionSelect = (
    option: Letter,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const isSuccess = option.plLetter === chosenLetter.plLetter;

    if (!isSuccess) {
      e.currentTarget.classList.add('bad-choice');
      e.currentTarget.disabled = true;
    }

    onAfterChoice(isSuccess);
  };

  return (
    <div className='options'>
      {options.map((option) => (
        <button
          key={option.ukLetter + new Date().getTime()}
          onClick={(e) => onOptionSelect(option, e)}
        >
          {option.plLetter}
        </button>
      ))}
    </div>
  );
};

export default React.memo(
  ChoiceOptions,
  (prev, next) => prev.chosenLetter === next.chosenLetter
);
