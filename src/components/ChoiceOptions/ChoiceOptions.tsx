import { FC } from 'react';
import { Letter } from '../../types';
import { useOptions } from '../../hooks/useOptions';
import './ChoiceOptions.scss';

interface Props {
  letters: { [key: string]: string };
  chosenLetter: Letter;
  onAfterChoice?: () => void;
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
    console.log(isSuccess ? 'GOOD' : 'BAD');

    if (isSuccess) {
      onAfterChoice();
    } else {
      e.currentTarget.classList.add('bad-choice');
      e.currentTarget.disabled = true;
    }
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

export default ChoiceOptions;
