// import express from "express";

import generalSettings from "../config.js";

// create new router
const router = express.Router();

// get all
router.get(
  `${generalSettings.baseUrl}/item-route-name(like: meds or dogs etc..)`,
  async (req, res) => {
    //   const getResult = await bl-object.method name;
    if (!checkResultStatus(getResult)) {
      res.status(500).send(getResult);
    } else {
      res.send(getResult.data);
    }
  }
);

// get by id
router.get(
  `${generalSettings.baseUrl}/item-route-name(like: meds or dogs etc..)/:id`,
  async (req, res) => {
    const id = +req.params.id;
    //   const getResult = await await bl-object.method name;
    if (!checkResultStatus(getResult)) {
      res.status(500).send(getResult);
    } else {
      res.send(getResult.data);
    }
  }
);

// post new item
router.post(
  `${generalSettings.baseUrl}/item-route-name(like: meds or dogs etc..)`,
  async (req, res) => {
    const body = req.body;
    //   const postResult = await await bl-object.method name;

    if (!checkResultStatus(postResult)) {
      res.status(500).send(postResult);
    } else {
      postResult.data = {
        id: postResult.data.insertId,
        ...req.body,
      };
      res.send(postResult);
    }
  }
);

// update
router.put(
  `${generalSettings.baseUrl}/item-route-name(like: meds or dogs etc..)/:id`,
  async (req, res) => {
    const body = req.body;
    const id = +req.params.id;
    //   const postResult = await await bl-object.method name;

    if (!checkResultStatus(postResult)) {
      res.status(500).send(postResult);
    } else {
      postResult.data = {
        id: postResult.data.insertId,
        ...req.body,
      };
      res.send(postResult);
    }
  }
);

// router.put();

// delete item
router.delete(
  `${generalSettings.baseUrl}/item-route-name(like: meds or dogs etc..)/:id`,
  async (req, res) => {
    const id = req.params.id;
    //   const deleteResult = await await bl-object.method name;

    if (!checkResultStatus(deleteResult)) {
      res.status(500).send(deleteResult);
    } else {
      res.send(deleteResult);
    }
  }
);

// helper function
const checkResultStatus = (result) => {
  if (!result.success) {
    return false;
  }
  return true;
};

export default router;
