import { query } from "../index.js";

//drops the table weekly manually so at the end of the week all the new tables are reset for the topic waiting list on the students session and create a new tablet with the same similarities


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
