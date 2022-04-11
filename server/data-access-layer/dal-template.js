import connection from "../database.js";

let result = {
  success: false,
  data: null,
};

const getAll = async () => {
  try {
    let res = await connection
      .promise()
      .query("SELECT * FROM drugs ORDER BY id ASC");
    result.success = true;
    result.data = res[0];
    return result;
  } catch (error) {
    result.success = false;
    result.data = error;
    return result;
  }
};

const getDrugsCompany = async (id) => {
  try {
    let res = await connection
      .promise()
      .query(`SELECT * FROM drugs WHERE companyId = ${id} ORDER BY id ASC`);
    result.success = true;
    result.data = res[0];
    return result;
  } catch (error) {
    result.success = false;
    result.data = error;
    return result;
  }
};

const addDrug = async (drugeName, companyId, drugWeight) => {
  try {
    let res = await connection.promise().query(
      ` INSERT INTO drugs (drugeName, companyId, drugWeight)
            VALUES ('${drugeName}', '${companyId}', '${drugWeight}')`
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

const deleteDrug = async (id) => {
  try {
    let res = await connection.promise().query(
      `DELETE FROM drugs
          WHERE drugs.id = ${id}`
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

const update = async (id, drugeName, companyId, drugWeight) => {
  try {
    let res = await connection.promise().query(
      `UPDATE drugs
        SET companyId=?, drugeName=?, drugWeight=?
        WHERE id=${id}`,
      [companyId, drugeName, drugWeight]
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
  addDrug,
  deleteDrug,
  getDrugsCompany,
  update,
};
