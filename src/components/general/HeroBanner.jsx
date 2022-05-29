import generalStyles from "/sass/modules/_General.module.scss";

export default function HeroBanner(props) {
  return (
    <div className={generalStyles.hero_banner} style={{ backgroundImage: `url(${props.img})` }}>
      <h1>{props.title}</h1>
    </div>
  );
}
