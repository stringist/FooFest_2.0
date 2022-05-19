export default function Table(props) {
  return (
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
              <td>{mAct === "break" ? "BREAK" : mAct}</td>
              <td>{jAct}</td>
              <td>{vAct}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
