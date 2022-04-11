import developmentGroupsDal from "../data-access-layer/developmentGroups-dal.js";

const getAll = async () => {
  return await developmentGroupsDal.getAll();
};

// const getDrugsByCompanyId = (companyId) => {
//   return medsDal.getDrugsCompany(companyId);
// };

export default {
  getAll,
  // getDrugsByCompanyId
};
