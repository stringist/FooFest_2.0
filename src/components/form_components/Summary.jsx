import BasketList from "./BasketList";
import Total from "./Total";

export default function Summary(props) {
  return (<section>
<h3>Summary</h3>
<BasketList {...props}/>
<Total {...props}/>
</section>);
}
