const db = require("../../config/db");

exports.findAll = async () => {
  const { rows } = await db.query("SELECT * FROM pokemon ORDER BY id ASC");
  return rows;
};

exports.findById = async (id) => {
  const { rows } = await db.query("SELECT * FROM pokemon WHERE id = $1", [id]);
  return rows[0];
};

exports.create = async (name) => {
  await db.query("INSERT INTO pokemon (name) VALUES ($1)", [name]);
};

exports.update = async (id, name) => {
  await db.query("UPDATE pokemon SET name = $1 WHERE id = $2", [name, id]);
};

exports.delete = async (id) => {
  await db.query("DELETE FROM pokemon WHERE id = $1", [id]);
};
