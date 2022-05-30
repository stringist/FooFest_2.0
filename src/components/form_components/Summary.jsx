import BasketList from "./BasketList";

export default function Summary(props) {
  return (<section>
<h3>Summary</h3>
<BasketList {...props}/>
</section>);
}
