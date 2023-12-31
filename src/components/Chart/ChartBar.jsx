/* eslint-disable react/prop-types */
import './ChartBar.css';

const ChartBar = (props) => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.dataPoint.value / props.maxValue) * 100) + '%'; // gives us the percentage the bar should be filled
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{props.dataPoint.label}</div>
    </div>
  );
};

export default ChartBar;
