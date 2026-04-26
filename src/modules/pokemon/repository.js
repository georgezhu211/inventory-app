const db = require("../../config/db");

exports.findAll = async (req, res) => {
  const { rows } = await db.query("SELECT * FROM pokemon");
  return rows;
};
