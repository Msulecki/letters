import { FC } from 'react';
import { Progress } from '../../types';
import './ProgressBar.scss';

interface Props {
  progress: Progress;
}

const ProgressBar: FC<Props> = ({ progress }) => {
  const progressPercentage = (progress.current / progress.all) * 100;

  return (
    <div className='progressBar'>
      <div
        className='progressBar__state'
        style={{
          width: `${progressPercentage}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
