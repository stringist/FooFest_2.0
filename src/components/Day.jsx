import Act from "./Act";

export default function Day(day) {
  // console.log(day);

  const timeSlot = day[0];
  // console.log(timeSlot);

  // day.map((timeSlot) => console.log(timeSlot));

  return (
    <ul>
      <Act {...day[0]}></Act>
      <Act {...day[1]}></Act>
      <Act {...day[2]}></Act>
      <Act {...day[3]}></Act>
      <Act {...day[4]}></Act>
      <Act {...day[5]}></Act>
      <Act {...day[6]}></Act>
      <Act {...day[7]}></Act>
      <Act {...day[8]}></Act>
      <Act {...day[9]}></Act>
      <Act {...day[10]}></Act>
      <Act {...day[11]}></Act>
    </ul>
  );
}
