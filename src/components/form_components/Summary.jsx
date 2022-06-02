import BasketList from "./BasketList";
import Total from "./Total";
import summaryStyles from "/sass/modules/_Summary.module.scss"

export default function Summary(props) {
  return (<section className={summaryStyles.summary}>
<h2>Summary</h2>
<BasketList {...props}/>
<Total className={summaryStyles.test}{...props}/>
</section>);
}

