import Act from "./Act";

export default function Day(day) {
  const acts = Object.values(day);
  /*   console.log(acts);
   */
  return (
    <div className="day">
      {/* 00-2:00 */}
      <Act {...acts[0]}></Act>
      {/* 2:00-4:00 */}
      <Act {...acts[1]}></Act>
      <Act {...acts[2]}></Act>
      <Act {...acts[3]}></Act>
      <Act {...acts[4]}></Act>
      <Act {...acts[5]}></Act>
      <Act {...acts[6]}></Act>
      <Act {...acts[7]}></Act>
      <Act {...acts[8]}></Act>
      <Act {...acts[9]}></Act>
      <Act {...acts[10]}></Act>
      <Act {...acts[11]}></Act>
    </div>
  );
}
