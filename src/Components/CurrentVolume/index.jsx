import "./style.css";
import ProgressBar from '../ProgressBar';

const CurrentVolume = ({ volume }) => {
  return (
    <div className="volume-bar">
      <span className="current-volume-value">{volume}</span>
      <span>Alto-Falante TV</span>
      <ProgressBar total={100} current={volume} />
    </div>
  );
};

export default CurrentVolume;
