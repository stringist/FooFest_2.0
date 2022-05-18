import Day from "./Day";

export default function Lineup({ stage, day }) {
  const currentStage = { ...stage };
  console.log(day);
  // console.log(midgard.midgard.mon);
  // Object.values(stage).map((days) => console.log(days));
  // console.log(stage);
  const monday = currentStage.mon;
  const tuesday = currentStage.tue;
  const wednesday = currentStage.wed;
  const thursday = currentStage.thu;
  const friday = currentStage.fri;
  const saturday = currentStage.sat;
  const sunday = currentStage.sun;

  return (
    <div className="lineup">
      <Day {...monday} />
      <Day {...tuesday} />
      <Day {...wednesday} />
      <Day {...thursday} />
      <Day {...friday} />
      <Day {...saturday} />
      <Day {...sunday} />
    </div>

    // return <ul>{schedule.map((jotunheim) => console.log(jotunheim))}</ul>;

    /* // return <section className="product__list">{schedule[0].map((jotunheim) => console.log(jotunheim))}</section>; */
  );
}
