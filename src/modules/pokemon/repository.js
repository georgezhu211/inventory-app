const db = require("../../config/db");

const POKEMON_WITH_TYPE = `
  SELECT pokemon.*, types.name AS type_name
  FROM pokemon
  INNER JOIN types ON pokemon.type_id = types.id
`;

exports.findAll = async () => {
  const { rows } = await db.query(
    `${POKEMON_WITH_TYPE} ORDER BY pokemon.id ASC`,
  );
  return rows;
};

exports.findById = async (id) => {
  const { rows } = await db.query(
    `${POKEMON_WITH_TYPE} WHERE pokemon.id = $1`,
    [id],
  );
  return rows[0];
};

exports.create = async (pokemon) => {
  await db.query("INSERT INTO pokemon (name, type_id) VALUES ($1, $2)", [
    pokemon.name,
    pokemon.type_id,
  ]);
};

exports.update = async (id, pokemon) => {
  await db.query("UPDATE pokemon SET name = $1, type_id = $2 WHERE id = $3", [
    pokemon.name,
    pokemon.type_id,
    id,
  ]);
};

exports.delete = async (id) => {
  const { rows } = await db.query(
    "DELETE FROM pokemon WHERE id = $1 RETURNING *",
    [id],
  );
  return rows[0];
};
