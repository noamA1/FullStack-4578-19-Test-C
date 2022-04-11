import { useEffect, useState } from "react";
import { getAllGroupsFromServer } from "../../common/helper";
import AppForm from "../UI/AppForm";

const AddMeeting = () => {
  const [devGroups, setDevGroups] = useState([]);
  const getAllGroups = async () => {
    const tempGroups = await getAllGroupsFromServer();
    setDevGroups(tempGroups);
  };

  useEffect(() => {
    getAllGroups();
  }, []);

  const addNewMeeting = (data) => {
    console.log(data);
  };
  return <AppForm groups={devGroups} addMeeting={addNewMeeting} />;
};

export default AddMeeting;
