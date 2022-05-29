import AreaImage from "./AreaImage";

export default function AreaButton(props) {
  return (
    <>
      <div>
        <label htmlFor={props.name}>
          <AreaImage name={props.name} area={props.area} />
        </label>
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
      </div>
    </>
  );
}
