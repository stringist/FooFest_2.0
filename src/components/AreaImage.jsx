export default function AreaImage(props) {
  if (props.name === props.area) {
    return <img src={"../../img/selected" + props.name + ".svg"} alt="" />;
  } else {
    return <img src={"../../img/notSelected" + props.name + ".svg"} alt="" />;
  }
}
