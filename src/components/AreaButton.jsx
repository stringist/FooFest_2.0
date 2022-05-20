import AreaImage from "./AreaImage";

export default function AreaButton(props) {
  return (
    <>
      <input
        type="radio"
        checked={props.area === props.name}
        id={props.name}
        name="areaChoice"
        value={props.name}
        onChange={(e) => {
          props.setArea(e.target.value);
        }}
      />

      <label htmlFor={props.name}>
        {props.name}
        <AreaImage name={props.name} area={props.area} />
      </label>
    </>
  );
}
