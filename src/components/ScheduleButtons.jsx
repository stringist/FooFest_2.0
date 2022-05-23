import ScheduleButton from "./ScheduleButton";

export default function ScheduleButtons(props) {
  return (
    <div className="festival__buttons">
      <ScheduleButton setFilteredM={props.setFilteredM} setFilteredJ={props.setFilteredJ} setFilteredV={props.setFilteredV} midgard={props.midgard} jotunheim={props.jotunheim} vanaheim={props.vanaheim} filterDay={"monday"} title="Monday" />
      <ScheduleButton setFilteredM={props.setFilteredM} setFilteredJ={props.setFilteredJ} setFilteredV={props.setFilteredV} midgard={props.midgard} jotunheim={props.jotunheim} vanaheim={props.vanaheim} filterDay={"tuesday"} title="Tuesday" />
      <ScheduleButton setFilteredM={props.setFilteredM} setFilteredJ={props.setFilteredJ} setFilteredV={props.setFilteredV} midgard={props.midgard} jotunheim={props.jotunheim} vanaheim={props.vanaheim} filterDay={"wednesday"} title="Wednesday" />
      <ScheduleButton setFilteredM={props.setFilteredM} setFilteredJ={props.setFilteredJ} setFilteredV={props.setFilteredV} midgard={props.midgard} jotunheim={props.jotunheim} vanaheim={props.vanaheim} filterDay={"thursday"} title="Thursday" />
      <ScheduleButton setFilteredM={props.setFilteredM} setFilteredJ={props.setFilteredJ} setFilteredV={props.setFilteredV} midgard={props.midgard} jotunheim={props.jotunheim} vanaheim={props.vanaheim} filterDay={"friday"} title="Friday" />
      <ScheduleButton setFilteredM={props.setFilteredM} setFilteredJ={props.setFilteredJ} setFilteredV={props.setFilteredV} midgard={props.midgard} jotunheim={props.jotunheim} vanaheim={props.vanaheim} filterDay={"saturday"} title="Saturday" />
      <ScheduleButton setFilteredM={props.setFilteredM} setFilteredJ={props.setFilteredJ} setFilteredV={props.setFilteredV} midgard={props.midgard} jotunheim={props.jotunheim} vanaheim={props.vanaheim} filterDay={"sunday"} title="Sunday" />
    </div>
  );
}
