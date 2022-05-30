import form1Styles from "/sass/modules/_Form1.module.scss";

export default function AreaImage(props) {
  if (props.name === props.area) {
    return <img src={"../../img/selected" + props.name + ".svg"} alt="" />;
  } else {
    return <img src={"../../img/notSelected" + props.name + ".svg"} alt="" className={form1Styles.not_selected} />;
  }
}
