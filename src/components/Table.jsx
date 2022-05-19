import { useState, useEffect } from "react";

export default function Table(props) {
  const [bands, setBands] = useState({
    data: "",
    loading: true,
  });
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("fetching student");
    fetch(`https://foofestival.herokuapp.com/bands`)
      .then((res) => res.json())
      .then((data) => {
        setBands({ data: data, loading: false });
      });
  }, []);

  if (!bands) {
    return null;
  }

  function handleClick() {
    console.log("button clicked");
    console.log(bands);
  }

  return (
    <div className="container">
      <h2>Example component</h2>
      <button onClick={handleClick}>Get students</button>
      <div>{bands.loading ? "loading" : bands.data[0].name}</div>
    </div>
  );
}
// return (
//   <table>
//     <thead>
//       <tr>
//         <th>Time</th>
//         <th>Midgard</th>
//         <th>Jotunheim</th>
//         <th>Vaneheim</th>
//       </tr>
//     </thead>

//     <tbody>
//       {props.stage1.map((act, index) => {
//         const mAct = act.act;
//         const jAct = props.stage2[index].act;
//         const vAct = props.stage3[index].act;

//         return (
//           <tr>
//             <th>
//               {act.start} - {act.end}
//             </th>
//             <td>{mAct === "break" ? "BREAK" : mAct}</td>
//             <td>{jAct}</td>
//             <td>{vAct}</td>
//           </tr>
//         );
//       })}
//     </tbody>
//   </table>
// );
// }
