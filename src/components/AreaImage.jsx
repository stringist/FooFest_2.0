export default function AreaImage(props) {
  // console.log(props.name);
  // console.log(props.area);

  if (props.name === props.area) return <img src={"../../public/img/selected" + props.name + ".svg"} alt="" />;
  else {
    return <img src={"../../public/img/notSelected" + props.name + ".svg"} alt="" />;
  }
}
