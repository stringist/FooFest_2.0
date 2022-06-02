import programStyles from "/sass/modules/_Program.module.scss";

export default function ScheduleButton(props) {
  function filterList(day) {
    // setBandDisplayed([]);

    if (props.title === "Monday") {
      props.setFilteredM(props.midgard.mon);
      props.setFilteredJ(props.jotunheim.mon);
      props.setFilteredV(props.vanaheim.mon);
      props.setDay("Monday");
    } else if (props.title === "Tuesday") {
      props.setFilteredM(props.midgard.tue);
      props.setFilteredJ(props.jotunheim.tue);
      props.setFilteredV(props.vanaheim.tue);
      props.setDay("Tuesday");
    } else if (props.title === "Wednesday") {
      props.setFilteredM(props.midgard.wed);
      props.setFilteredJ(props.jotunheim.wed);
      props.setFilteredV(props.vanaheim.wed);
      props.setDay("Wednesday");
    } else if (props.title === "Thursday") {
      props.setFilteredM(props.midgard.thu);
      props.setFilteredJ(props.jotunheim.thu);
      props.setFilteredV(props.vanaheim.thu);
      props.setDay("Thursday");
    } else if (props.title === "Friday") {
      props.setFilteredM(props.midgard.fri);
      props.setFilteredJ(props.jotunheim.fri);
      props.setFilteredV(props.vanaheim.fri);
      props.setDay("Friday");
    } else if (props.title === "Saturday") {
      props.setFilteredM(props.midgard.sat);
      props.setFilteredJ(props.jotunheim.sat);
      props.setFilteredV(props.vanaheim.sat);
      props.setDay("Saturday");
    } else if (props.title === "Sunday") {
      props.setFilteredM(props.midgard.sun);
      props.setFilteredJ(props.jotunheim.sun);
      props.setFilteredV(props.vanaheim.sun);
      props.setDay("Sunday");
    }
  }

  return props.day === props.title ? (
    <div
      className={programStyles.selected}
      onClick={() => {
        filterList(props.day);
      }}
    >
      {props.title}
    </div>
  ) : (
    <div
      onClick={() => {
        filterList(props.day);
      }}
    >
      {props.title}
    </div>
  );
}
