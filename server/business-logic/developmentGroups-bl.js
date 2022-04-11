import developmentGroupsDal from "../data-access-layer/developmentGroups-dal.js";

const getAll = async () => {
  return await developmentGroupsDal.getAll();
};

export default {
  getAll,
};
