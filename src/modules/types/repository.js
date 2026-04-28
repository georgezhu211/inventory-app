const db = require("../../config/db");

exports.findAll = async () => {
  const { rows } = await db.query("SELECT * FROM types ORDER BY id ASC");
  return rows;
};

exports.findById = async (id) => {
  const { rows } = await db.query("SELECT * FROM types WHERE id = $1", [id]);
  return rows[0];
};

exports.create = async (type) => {
  await db.query("INSERT INTO types (name) VALUES ($1)", [type.name]);
};

exports.update = async (id, type) => {
  await db.query("UPDATE types SET name = $1 WHERE id = $2", [type.name, id]);
};
