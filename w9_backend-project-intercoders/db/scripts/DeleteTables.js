import { query } from "../index.js";

const sqlQuery = `DELETE FROM waitinglist WHERE name is null`;

async function waitingList() {
  console.log("Hello");
  const res = await query(sqlQuery);
  console.log("Table was created");
}

waitingList();
