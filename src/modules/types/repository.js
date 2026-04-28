const db = require("../../config/db");

exports.findAll = async () => {
  const { rows } = await db.query("SELECT * FROM types ORDER BY id ASC");
  return rows;
};
