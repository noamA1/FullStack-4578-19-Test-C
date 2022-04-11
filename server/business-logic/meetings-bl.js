import meetingsDal from "../data-access-layer/meetings-dal.js";

const getAll = () => {
  return meetingsDal.getAll();
};

const getMeetingsByGroupId = (groupId) => {
  return meetingsDal.getMeetingsByGroupId(groupId);
};

const addMeeting = (newMeeting) => {
  const { groupId, meetingStart, meetingEnd, meetingRoom, meetingDescription } =
    newMeeting;
  return meetingsDal.postMeeting(
    groupId,
    meetingStart,
    meetingEnd,
    meetingRoom,
    meetingDescription
  );
};

export default {
  getAll,
  getMeetingsByGroupId,
  addMeeting,
};
