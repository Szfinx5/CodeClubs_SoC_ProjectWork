import { query } from "../index.js";


//drops the table weekly manually so at the end of the week all the new tables are reset for the topic table
const deleteSqlQuery = `DROP TABLE IF EXISTS course;`;

const createSqlQuery = `CREATE TABLE IF NOT EXISTS course(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  keycourse TEXT)`;

async function deleteCourseTable() {
  console.log("Hello");
  const res = await query(deleteSqlQuery);
  console.log("Course Table was created");
}

async function createCourseTable() {
  console.log("Hello");
  const res = await query(createSqlQuery);
  console.log("Course Table was created");
}

deleteCourseTable();
setTimeout(createCourseTable, 5000);
