import { query } from "../index.js";

const sqlQuery = `CREATE TABLE IF NOT EXISTS waitinglist(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT,
    coursename TEXT,
    )`;

async function waitingList() {
  console.log("Hello");
  const res = await query(sqlQuery);
  console.log("Table was created");
}

waitingList();
