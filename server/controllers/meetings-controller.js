import express from "express";
import meetingsBl from "../business-logic/meetings-bl.js";
import generalSettings from "../common/config.js";

const meetingsRouter = express.Router();

meetingsRouter.get(`${generalSettings.baseUrl}/meetings`, async (req, res) => {
  const getResult = await meetingsBl.getAll();
  if (!checkResultStatus(getResult)) {
    res.status(500).send(getResult);
  } else {
    res.send(getResult.data);
  }
});

meetingsRouter.get(
  `${generalSettings.baseUrl}/meetings/:id`,
  async (req, res) => {
    const id = +req.params.id;
    const getResult = await meetingsBl.getMeetingsByGroupId(id);
    if (!checkResultStatus(getResult)) {
      res.status(500).send(getResult);
    } else {
      res.send(getResult.data);
    }
  }
);

meetingsRouter.post(`${generalSettings.baseUrl}/meetings`, async (req, res) => {
  const body = req.body;
  const postResult = await meetingsBl.addMeeting(body);

  if (!checkResultStatus(postResult)) {
    res.status(500).send(postResult);
  } else {
    postResult.data = {
      id: postResult.data.insertId,
      ...req.body,
    };
    res.send(postResult);
  }
});

const checkResultStatus = (result) => {
  if (!result.success) {
    return false;
  }
  return true;
};
export default meetingsRouter;
