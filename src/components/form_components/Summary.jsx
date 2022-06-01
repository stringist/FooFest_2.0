import BasketList from "./BasketList";
import Total from "./Total";
import SummaryStyles from "/sass/modules/_Summary.module.scss"

export default function Summary(props) {
  return (<section className={SummaryStyles.summary}>
<h2>Summary</h2>
<BasketList {...props}/>
<Total {...props}/>
</section>);
}
