export default function Table(props) {
  console.return(
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
        {props.stage1.map((act) => {
          return (
            <tr>
              <td>
                {act.start} - {act.end}
              </td>
            </tr>
          );
        })}

        <td>
          {props.stage1.map((act) => {
            return (
              <tr>
                <td>{act.act}</td>
              </tr>
            );
          })}
        </td>
        <td>
          {props.stage2.map((act) => {
            return (
              <tr>
                <td>{act.act}</td>
              </tr>
            );
          })}
        </td>
        <td>
          {props.stage3.map((act) => {
            return (
              <tr>
                <td>{act.act}</td>
              </tr>
            );
          })}
        </td>
      </tbody>
    </table>
  );
}
