import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { render } from "react-dom";

import generalStyles from "/sass/modules/_General.module.scss";

export default function Timer() {
  const renderTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes}:${seconds}`;
  };

  return (
    <div className={generalStyles.timer}>
      <CountdownCircleTimer isPlaying duration={10} colors={["#57D379", "#F2EC6D", "#F26D6D"]} colorsTime={[8, 4, 0]}>
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
}
