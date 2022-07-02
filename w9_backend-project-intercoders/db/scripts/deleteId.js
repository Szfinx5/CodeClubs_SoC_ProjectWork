import { query } from "../index.js";

//delete the student from the database
const sqlQuery = `DELETE FROM announcement WHERE id = '9' `;

async function waitingList() {
  console.log("Hello");
  const res = await query(sqlQuery);
  console.log("it was deleted");
}

waitingList();