import { query } from "../index.js";

//drops the table weekly manually so at the end of the week all the new tables are reset for the announcement
const deleteSqlQuery = `DROP TABLE IF EXISTS announcement;`;

const createSqlQuery = `CREATE TABLE IF NOT EXISTS announcement(
    index INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    id TEXT,
    keycourse TEXT,
    volunteername TEXT,
    date TEXT,
    time TEXT)`;

async function deleteAnnouncementTable() {
  console.log("Hello");
  const res = await query(deleteSqlQuery);
  console.log("Announcement Table was dropped");
}

async function createAnnouncementTable() {
  console.log("Hello");
  const res = await query(createSqlQuery);
  console.log("Announcement Table was created");
}

deleteAnnouncementTable();
setTimeout(createAnnouncementTable, 5000);
