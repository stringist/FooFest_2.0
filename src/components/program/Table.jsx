import { useState, useEffect } from "react";
import createUID from "create-unique-id";

import programStyles from "/sass/modules/_Program.module.scss";

import BandInfo from "./BandInfo";

export default function Table(props) {
  const [bands, setBands] = useState({
    data: "",
    loading: true,
  });
  const [act, setAct] = useState([]);
  const [stage, setStage] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`https://foofestival.herokuapp.com/bands`)
      .then((res) => res.json())
      .then((data) => {
        setBands({ data: data, loading: false });
      });
  }, []);

  // useEffect(() => {
  //   fetch(`https://foofestival.herokuapp.com/events`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setEvents(data);
  //     });
  // }, []);
  // console.log(events);

  if (!bands) {
    return null;
  }

  function showBand(act) {
    const i = bands.data.findIndex((band) => band.name === act.act);
    props.setBandDisplayed(bands.data[i]);
    setAct(act);
  }

  return (
    <div className={programStyles.festival__schedule}>
      <table>
        <thead>
          <tr>
            <th>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-clock-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              </svg>
            </th>
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
              <tr key={createUID(4)}>
                <th>
                  <p>
                    {act.start.substring(0, 1) === "0"
                      ? act.start.substring(1)
                      : act.start}
                  </p>
                  <br></br>
                  <p>{Number(act.start.substring(0, 2)) + 1}:00</p>
                </th>
                <td>
                  {mAct.act !== "break" ? (
                    <div
                      className={programStyles.cell}
                      onClick={() => {
                        setStage("Midgard");
                        showBand(mAct);
                      }}
                    >
                      {mAct.act}
                    </div>
                  ) : (
                    <hr></hr>
                  )}
                </td>
                <td>
                  {jAct.act !== "break" ? (
                    <div
                      className={programStyles.cell}
                      onClick={() => {
                        setStage("Jotunheim");
                        showBand(jAct);
                      }}
                    >
                      {jAct.act}
                    </div>
                  ) : (
                    <hr></hr>
                  )}
                </td>
                <td>
                  {vAct.act !== "break" ? (
                    <div
                      className={programStyles.cell}
                      onClick={() => {
                        setStage("Vanaheim");
                        showBand(vAct);
                      }}
                    >
                      {vAct.act}
                    </div>
                  ) : (
                    <hr></hr>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <BandInfo
        bandDisplay={props.bandDisplay}
        setBandDisplayed={props.setBandDisplayed}
        favourites={props.favourites}
        setFavourites={props.setFavourites}
        act={act}
        stage={stage}
        day={props.day}
      />
    </div>
  );
}
