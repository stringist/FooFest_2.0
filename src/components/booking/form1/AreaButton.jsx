import form1Styles from "/sass/modules/_Form1.module.scss"
import AreaImage from "./AreaImage";
export default function AreaButton(props) {
  return (
    <>
      <div>
        <label htmlFor={props.name}>
          <AreaImage name={props.name} area={props.area} />
        </label>
        <input className={form1Styles.areaButton}
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
