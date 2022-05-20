import { useState, useEffect } from "react";

import BandInfo from "./BandInfo";

export default function Table(props) {
  const [bands, setBands] = useState({
    data: "",
    loading: true,
  });
  const [name, setName] = useState("");

  useEffect(() => {
    fetch(`https://foofestival.herokuapp.com/bands`)
      .then((res) => res.json())
      .then((data) => {
        setBands({ data: data, loading: false });
      });
  }, []);

  if (!bands) {
    return null;
  }

  function showBand(bandName) {
    const i = bands.data.findIndex((band) => band.name == bandName);
    props.setBandDisplayed(bands.data[i]);
    // console.log(i);
  }

  return (
    <div className="festival__schedule">
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Midgard</th>
            <th>Jotunheim</th>
            <th>Vaneheim</th>
          </tr>
        </thead>

        <tbody>
          {props.stage1.map((act, index) => {
            const mAct = act.act;
            const jAct = props.stage2[index].act;
            const vAct = props.stage3[index].act;

            return (
              <tr>
                <th>
                  {act.start} - {act.end}
                </th>
                <td>{mAct !== "break" ? <button onClick={() => showBand(mAct)}>{mAct}</button> : "Break"}</td>
                <td>{jAct !== "break" ? <button onClick={() => showBand(jAct)}>{jAct}</button> : "Break"}</td>
                <td>{vAct !== "break" ? <button onClick={() => showBand(vAct)}>{vAct}</button> : "Break"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <BandInfo bandDisplay={props.bandDisplay} setBandDisplayed={props.setBandDisplayed}></BandInfo>
    </div>
  );
}
