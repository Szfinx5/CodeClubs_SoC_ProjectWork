import { query } from "../index.js";

//not being used
//this is to create a table with user and password on the registration feature
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
