import { FC } from 'react';
import './MistakesCount.scss';

interface Props {
  count: number;
}

const MistakesCount: FC<Props> = ({ count }) => {
  return <div className='mistakesCount'>{`Mistakes: ${count}`}</div>;
};

export default MistakesCount;
