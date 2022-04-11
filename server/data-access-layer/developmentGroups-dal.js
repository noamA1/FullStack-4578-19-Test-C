import connection from "../common/database.js";

let result = {
  success: false,
  data: null,
};

const getAll = async () => {
  try {
    let res = await connection
      .promise()
      .query("SELECT * FROM devgroups ORDER BY id ASC;");

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
};
