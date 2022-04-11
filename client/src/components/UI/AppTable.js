import Table from "react-bootstrap/Table";
import { format } from "date-fns";

const AppTable = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Meeting Start</th>
          <th>Meeting End</th>
          <th>Description</th>
          <th>Room</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item) => {
          let dateStart = new Date(item.meetingStart);
          let formattedDateStart = format(dateStart, "MMMM do, yyyy H:mma");
          let dateEnd = new Date(item.meetingEnd);
          let formattedDateEnd = format(dateEnd, "MMMM do, yyyy H:mma");

          return (
            <tr key={`meeting-${item.id}`}>
              <td>{item.id}</td>
              <td>{formattedDateStart}</td>
              <td>{formattedDateEnd}</td>
              <td>{item.meetingDescription}</td>
              <td>{item.meetingRoom}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default AppTable;
