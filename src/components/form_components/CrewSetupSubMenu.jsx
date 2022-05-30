import { useState, useRef } from "react";
export default function CrewSetupSubMenu(props) {
  // const [twoPersonTent, setTwoPersonTents] = useState(0);
  // const [threePersonTent, setThreePersonTents] = useState(0);
  const [tentTotal, setTentTotal] = useState(0);
  const twoPersonInput = useRef(null);
  const threePersonInput = useRef(null);
  console.log(`number of tickets is`, props.amount);

  const handleChange = () => {
    setTentTotal(twoPersonInput.current.value * 2 + threePersonInput.current.value * 3);
  };

  return (
    <div className="subFormItem">
      <div className="tentSetupItem">
        <div className="text_content">
          <label htmlFor="twoPersonTent">2 person tent</label>
          <p className="price">+299 DKK</p>
          <p className="subtext"></p>
        </div>
        <input
          type="number"
          name="twoPersonTent"
          id="twoPersonTent"
          ref={twoPersonInput}
          min={0}
          onChange={handleChange}
        />
      </div>
      <div className="tentSetupItem">
        <div className="text_content">
          <label htmlFor="threePersonTent">3 person tent</label>
          {/* <p className="price">+399 DKK</p> */}
          <p className="subtext"></p>
        </div>
        <input
          type="number"
          name="threePersonTent"
          id="threePersonTent"
          ref={threePersonInput}
          min={0}
          onChange={handleChange}
        />
      </div>
      {tentTotal > 0 && tentTotal === props.amount ? (
        <p>The number of tents matches the number of tickets</p>
      ) : tentTotal > 0 && tentTotal !== props.amount ? (
        <p>The number of tents doesn't match the number of tickets</p>
      ) : null}
    </div>
  );
}
