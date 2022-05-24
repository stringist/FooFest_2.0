import { useState, useEffect } from "react";
import programStyles from "/sass/modules/_Program.module.scss";

import BandInfo from "./BandInfo";

export default function Table(props) {
  const [bands, setBands] = useState({
    data: "",
    loading: true,
  });
  const [act, setAct] = useState([]);
  const [stage, setStage] = useState("");

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

  function showBand(act) {
    const i = bands.data.findIndex((band) => band.name == act.act);
    props.setBandDisplayed(bands.data[i]);
    setAct(act);

    // console.log(i);
  }

  return (
    <div className={programStyles.festival__schedule}>
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
            const mAct = act;
            const jAct = props.stage2[index];
            const vAct = props.stage3[index];

            return (
              <tr>
                <th>
                  {act.start.substring(0, 1) === "0" ? act.start.substring(1) : act.start}
                  <br></br>
                  {Number(act.start.substring(0, 2)) + 1}:00
                </th>
                <td>
                  {mAct.act !== "break" ? (
                    <button
                      onClick={() => {
                        setStage("Midgard");
                        showBand(mAct);
                      }}
                    >
                      {mAct.act}
                    </button>
                  ) : (
                    <hr></hr>
                  )}
                </td>
                <td>
                  {jAct.act !== "break" ? (
                    <button
                      onClick={() => {
                        setStage("Jotunheim");
                        showBand(jAct);
                      }}
                    >
                      {jAct.act}
                    </button>
                  ) : (
                    <hr></hr>
                  )}
                </td>
                <td>
                  {vAct.act !== "break" ? (
                    <button
                      onClick={() => {
                        setStage("Vanaheim");
                        showBand(vAct);
                      }}
                    >
                      {vAct.act}
                    </button>
                  ) : (
                    <hr></hr>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <BandInfo bandDisplay={props.bandDisplay} setBandDisplayed={props.setBandDisplayed} favourites={props.favourites} setFavourites={props.setFavourites} act={act} stage={stage}></BandInfo>
    </div>
  );
}
