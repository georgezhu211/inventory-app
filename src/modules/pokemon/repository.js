const db = require("../../config/db");

exports.findAll = async () => {
  const { rows } = await db.query("SELECT * FROM pokemon");
  return rows;
};

exports.create = async (name) => {
  await db.query("INSERT INTO pokemon (name) VALUES ($1)", [name]);
};
