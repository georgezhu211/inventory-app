const db = require("../../config/db");

exports.findAll = async () => {
  const { rows } = await db.query("SELECT * FROM pokemon");
  return rows;
};

exports.findById = async (id) => {
  const { rows } = await db.query("SELECT * FROM pokemon WHERE id = $1", [id]);
  return rows[0];
};

exports.create = async (name) => {
  await db.query("INSERT INTO pokemon (name) VALUES ($1)", [name]);
};
