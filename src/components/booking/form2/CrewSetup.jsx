import CrewSetupSubMenu from "./CrewSetupSubMenu";
import {useState} from "react";
import Summary from "../../form_components/Summary";
import form2Styles from "/sass/modules/_Form2.module.scss";

export default function CrewSetup(props) {

//  const removeFromBasket = () => {
//     const product = { product: "Green Camping", price: 249, id: 666, amount: 1 };

//     {
//       props.basket.find((item) => item.id === product.id)
//         ? props.setBasket((prevState) => prevState.filter((item) => item.id !== product.id))
//         : props.setBasket((old) => [...old, product]);
//     }
//   };

const [isChecked, setIsChecked] = useState(false);

const showSubMenu = (e) => {e.target.checked ? console.log(`Show crewSetupSubMenu`) : console.log("hide submenu");}
const handleChange = (e) => {setIsChecked((prevState) => prevState = e.target.checked);
// !e.target.checked ? removeFromBasket : null;
}
  return (
    <>
      <div className={form2Styles.formItem}>
        <input type="checkbox" id="crew_setup" name="crew_setup" onChange={handleChange}/>
        <div className="text_content">
          <label htmlFor="crew_setup">
            Have the crew set up the tent for you
          </label>
          <p className={form2Styles.subtext}>The number of tents must match the number of tickets</p>
        </div>
        <p className={form2Styles.price}>From 299 DKK</p>
      </div>
      {isChecked && <CrewSetupSubMenu {...props}/>}
    </>
  );
}
