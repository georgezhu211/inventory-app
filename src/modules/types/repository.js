const db = require("../../config/db");

exports.findAll = async () => {
  const { rows } = await db.query("SELECT * FROM types ORDER BY id ASC");
  return rows;
};

exports.create = async (type) => {
  await db.query("INSERT INTO types (name) VALUES ($1)", [type.name]);
};
