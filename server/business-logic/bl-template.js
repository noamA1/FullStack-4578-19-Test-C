import medsDal from "../dal/meds-dal.js";

const getAll = () => {
  return medsDal.getAll();
};

const getDrugsByCompanyId = (companyId) => {
  return medsDal.getDrugsCompany(companyId);
};

const addMed = (newMed) => {
  const { medName, companyNum, medWeight } = newMed;
  return medsDal.addDrug(medName, companyNum, medWeight);
};

const deleteMed = (medId) => {
  return medsDal.deleteDrug(medId);
};

const updateMed = (id, body) => {
  const { medName, medWeight, companyNum } = body;
  return medsDal.update(id, medName, companyNum, medWeight);
};

export default {
  getAll,
  addMed,
  deleteMed,
  getDrugsByCompanyId,
  updateMed,
};
