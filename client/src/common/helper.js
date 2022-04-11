const getAllGroupsFromServer = async () => {
  const response = await fetch("http://localhost:5000/api/developmentGroups");
  const data = await response.json();
  return data;
};

const getMeetingsByGroupId = async (id) => {
  console.log(id);
  const response = await fetch("http://localhost:5000/api/meetings/" + id);
  const meetingsData = await response.json();
  return meetingsData;
};

export { getAllGroupsFromServer, getMeetingsByGroupId };
