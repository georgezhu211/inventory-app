#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS types (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ) 
);

INSERT INTO types (name)
VALUES ('Grass'), ('Fire'), ('Water'), ('Electric'), ('Normal');

CREATE TABLE IF NOT EXISTS pokemon (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  type_id INTEGER NOT NULL REFERENCES types(id)
);

INSERT INTO pokemon (name, type_id)
VALUES ('Bulbasaur', 1), ('Charmander', 2), ('Squirtle', 3), ('Pikachu', 4), ('Eevee', 5);

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DB_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
