import "./style.css";

const ProgressBar = ({ total, current }) => {
  return (
    <div className="progress-bar">
      <span className="greenBar" style={{width: current + '%'}}></span>
      <span className="greyBar" style={{width: total - current + '%'}}></span>
    </div>
  )
}

export default ProgressBar;