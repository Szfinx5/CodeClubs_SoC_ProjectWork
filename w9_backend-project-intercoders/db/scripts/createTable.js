import { query } from "../index.js";

const sqlQuery = `CREATE TABLE IF NOT EXISTS users(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username TEXT,
    password TEXT)`;

async function createTable() {
  console.log("Hello");
  const res = await query(sqlQuery);
  console.log("Table was created");
}

createTable();
