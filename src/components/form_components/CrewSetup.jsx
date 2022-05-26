import CrewSetupSubMenu from "./CrewSetupSubMenu";

export default function CrewSetup() {
  return (
    <>
      <div className="formItem">
        <input type="checkbox" id="crew_setup" name="crew_setup" />
        <div className="text_content">
          <label htmlFor="crew_setup">
            Have the crew set up the tent for you <span className="optional">Optional</span>
          </label>
          <p className="subtext">The number of tents must match the number of tickets</p>
        </div>
        <p className="price">+99 DKK</p>
      </div>
      <CrewSetupSubMenu />
    </>
  );
}
