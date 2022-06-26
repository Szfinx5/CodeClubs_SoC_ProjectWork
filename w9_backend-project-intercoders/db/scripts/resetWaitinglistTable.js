import { query } from "../index.js";

const deleteSqlQuery = `DROP TABLE IF EXISTS waitinglist;`;

const createSqlQuery = `CREATE TABLE IF NOT EXISTS waitinglist(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  studentname TEXT,
  keycourse TEXT)`;

async function deleteCourseTable() {
  console.log("Hello");
  const res = await query(deleteSqlQuery);
  console.log("Waitinglist Table was dropped");
}

async function createCourseTable() {
  console.log("Hello");
  const res = await query(createSqlQuery);
  console.log("Waitinglist Table was created");
}

deleteCourseTable();
setTimeout(createCourseTable, 5000);
