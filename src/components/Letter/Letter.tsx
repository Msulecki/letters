import { FC, useEffect, useState } from 'react';
import { Letter } from '../../types';
import './Letter.scss';

interface Props {
  letter: Letter;
}

const LetterPlaceholder: FC<Props> = ({ letter }) => {
  return <div className='letter'>{letter.ukLetter}</div>;
};

export default LetterPlaceholder;
