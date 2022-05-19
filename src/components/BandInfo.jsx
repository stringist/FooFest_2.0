import BandMember from "./BandMember";

export default function BandInfo(props) {
  console.log(props.name);

  return (
    <div className="band__info">
      <h2>{props.name}</h2>
      <h4>{props.genre}</h4>
      <img src={props.logo} alt={props.name} />
      <p>{props.bio}</p>
    </div>
  );
}
