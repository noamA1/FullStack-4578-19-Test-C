import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import AppTable from "../UI/AppTable.js";
import {
  getAllGroupsFromServer,
  getMeetingsByGroupId,
} from "../../common/helper";

const Home = () => {
  const [devGroups, setDevGroups] = useState([]);
  const [groupMeetings, setGroupMeetings] = useState([]);

  const getAllGroups = async () => {
    const tempGroups = await getAllGroupsFromServer();
    setDevGroups(tempGroups);
  };

  const getGroupMeetings = async (id) => {
    const tempMeetings = await getMeetingsByGroupId(id);
    setGroupMeetings(tempMeetings);
  };

  useEffect(() => {
    getAllGroups();
  }, []);

  const handleChange = (event) => {
    getGroupMeetings(event.target.value);
  };

  return (
    <>
      {devGroups && (
        <div>
          <Form.Select
            onChange={handleChange}
            aria-label='Default select example'
          >
            <option>Select group</option>
            {devGroups.map((group) => {
              return (
                <option key={`group-${group.id}-key`} value={group.id}>
                  {group.name}
                </option>
              );
            })}
          </Form.Select>
        </div>
      )}
      {groupMeetings.length > 0 && <AppTable items={groupMeetings} />}
    </>
  );
};

export default Home;
