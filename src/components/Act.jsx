export default function Act(act) {
  // console.log(act);
  return (
    <div className="act">
      <p>
        {act.start} - {act.end} -- {act.act}
      </p>
    </div>
  );
}
