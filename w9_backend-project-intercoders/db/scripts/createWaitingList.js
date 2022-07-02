import { query } from "../index.js";

//This creates the table on the database that has the student name for the waiting list
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
