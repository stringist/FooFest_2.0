import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { render } from "react-dom";
import TimeUp from "./TimeUp";

import generalStyles from "/sass/modules/_General.module.scss";

export default function Timer(props) {
  const renderTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    if (seconds < 10) {
      return `${minutes}:0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  };

  function timeUp() {
    props.setTimer(0);
    props.setStep(-1);
  }

  return (
    <div className={generalStyles.timer}>
      <CountdownCircleTimer isPlaying duration={300} colors={["#0E8923", "#F2EC6D", "#DC3545"]} colorsTime={[300, 120, 0]} onComplete={timeUp}>
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
}
