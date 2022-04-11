import connection from "../common/database.js";

let result = {
  success: false,
  data: null,
};

const getAll = async () => {
  try {
    let res = await connection
      .promise()
      .query("SELECT * FROM meetings ORDER BY id ASC");
    result.success = true;
    result.data = res[0];
    return result;
  } catch (error) {
    result.success = false;
    result.data = error;
    return result;
  }
};

const getMeetingsByGroupId = async (id) => {
  try {
    let res = await connection
      .promise()
      .query(`SELECT * FROM meetings WHERE groupId = ${id} ORDER BY id ASC`);
    result.success = true;
    result.data = res[0];
    return result;
  } catch (error) {
    result.success = false;
    result.data = error;
    return result;
  }
};

const postMeeting = async (
  groupId,
  meetingStart,
  meetingEnd,
  meetingRoom,
  meetingDescription
) => {
  try {
    let res = await connection.promise().query(
      ` INSERT INTO meetings (groupId, meetingStart, meetingEnd, meetingRoom, meetingDescription)
            VALUES ('${groupId}', '${meetingStart}', '${meetingEnd}', '${meetingRoom}','${meetingDescription}')`
    );
    result.success = true;
    result.data = res[0];
    return result;
  } catch (error) {
    result.success = false;
    result.data = error;
    return result;
  }
};

export default {
  getAll,
  getMeetingsByGroupId,
  postMeeting,
};
