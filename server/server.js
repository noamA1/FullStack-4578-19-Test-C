import express from "express";
import cors from "cors";
import generalSettings from "./common/config.js";
import router from "./controllers/developmentGroups-controller.js";
import meetingsRouter from "./controllers/meetings-controller.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", router);
app.use("/", meetingsRouter);

app.listen(generalSettings.port, () => {
  console.log(`server is running on port ${generalSettings.port} localhost!`);
});
