export default function CrewSetupSubMenu() {
  return (
    <div className="subFormItem">
      <div className="tentSetupItem">
        <div className="text_content">
          <label htmlFor="twoPersonTent">2 person tent</label>
          <p className="price">+299 DKK</p>
          <p className="subtext"></p>
        </div>
        <input type="number" name="twoPersonTent" id="twoPersonTent" value={0} />
      </div>
      <div className="tentSetupItem">
        <div className="text_content">
          <label htmlFor="threePersonTent">3 person tent</label>
          <p className="price">+399 DKK</p>
          <p className="subtext"></p>
        </div>
        <input type="number" name="threePersonTent" id="threePersonTent" value={0} />
      </div>
      <p id="tentNumberValidate">The number of tents matches the number of tickiez</p>
    </div>
  );
}