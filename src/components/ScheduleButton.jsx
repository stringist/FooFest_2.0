export default function ScheduleButton(props) {
  function filterList(day) {
    // setBandDisplayed([]);
    console.log("list filtered");
    if (day === "monday") {
      props.setFilteredM(props.midgard.mon);
      props.setFilteredJ(props.jotunheim.mon);
      props.setFilteredV(schedule.vanaheim.mon);
    } else if (day === "tuesday") {
      props.setFilteredM(props.midgard.tue);
      props.setFilteredJ(props.jotunheim.tue);
      props.setFilteredV(props.vanaheim.tue);
    } else if (day === "wednesday") {
      props.setFilteredM(props.midgard.wed);
      props.setFilteredJ(props.jotunheim.wed);
      props.setFilteredV(props.vanaheim.wed);
    } else if (day === "thursday") {
      props.setFilteredM(props.midgard.thu);
      props.setFilteredJ(props.jotunheim.thu);
      props.setFilteredV(props.vanaheim.thu);
    } else if (day === "friday") {
      props.setFilteredM(props.midgard.fri);
      props.setFilteredJ(props.jotunheim.fri);
      props.setFilteredV(props.vanaheim.fri);
    } else if (day === "saturday") {
      props.setFilteredM(props.midgard.sat);
      props.setFilteredJ(props.jotunheim.sat);
      props.setFilteredV(props.vanaheim.sat);
    } else if (day === "sunday") {
      props.setFilteredM(props.midgard.sun);
      props.setFilteredJ(props.jotunheim.sun);
      props.setFilteredV(props.vanaheim.sun);
    }
  }

  return (
    <button
      onClick={() => {
        filterList(props.filterDay);
      }}
    >
      {props.title}
    </button>
  );
}
