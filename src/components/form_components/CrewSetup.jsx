import CrewSetupSubMenu from "./CrewSetupSubMenu";
 import "../../../sass/style.scss";

export default function CrewSetup(props) {
const showSubMenu = (e) => {e.target.checked ? console.log(`Show crewSetupSubMenu`) : console.log("hide submenu");}
  return (
    <>
      <div className="formItem">
        <input type="checkbox" id="crew_setup" name="crew_setup" onChange={showSubMenu}/>
        <div className="text_content">
          <label htmlFor="crew_setup">
            Have the crew set up the tent for you <span className="optional">Optional</span>
          </label>
          <p className="subtext">The number of tents must match the number of tickets</p>
        </div>
        <p className="price">+99 DKK</p>
      </div>
      <CrewSetupSubMenu className="hidden"/>
    </>
  );
}
