import developmentGroupsBl from "../business-logic/developmentGroups-bl.js";
import generalSettings from "../common/config.js";
import express from "express";
import connection from "../common/database.js";

const router = express.Router();

router.get(`${generalSettings.baseUrl}/developmentGroups`, async (req, res) => {
  const getResult = await developmentGroupsBl.getAll();
  if (!checkResultStatus(getResult)) {
    res.status(500).send(getResult);
  } else {
    res.send(getResult.data);
  }
});

const checkResultStatus = (result) => {
  if (!result.success) {
    return false;
  }
  return true;
};

export default router;
