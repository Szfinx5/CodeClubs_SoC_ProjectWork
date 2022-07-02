import { query } from "../db/index.js";

//inserting the new user on the table on the database
export async function createUser(body) {
  const queryText = `INSERT INTO users (username, password) 
  VALUES ($1, $2);`;
  const rows = await query(queryText, [body.username, body.password]);

  console.log("rows" + rows);
  return rows;
}


//selecting all the users and its passwords
//not being used at this version but can be applied for login
export async function login(body) {
  console.log("before query " + body.username);
  const queryText = `SELECT * FROM users WHERE username = ($1) AND password = ($2);`;
  console.log(queryText);
  const { rows } = await query(queryText, [body.username, body.password]);
  console.log("rows" + rows);
  return rows;
}

//select everyhing on the users table
export async function getUsers() {
  console.log("b4 await");
  const response = await query("SELECT * FROM users;");
  console.log("after await");
  const display = response.rows;
  return display;
}

//When adding a user, undefined don't go to the database, if not undefined the database insert the user and the key course
export async function addToList(body) {
  console.log("body ", body.studentname);
  if (body.studentname === undefined || body.keycourse === undefined) {
    console.log("Null value was passed");
  } else {
    const queryText = `INSERT INTO waitinglist (studentname, keycourse) 

  VALUES ($1, $2);`;
    const rows = await query(queryText, [body.studentname, body.keycourse]);
    console.log("rows" + rows);
    return rows;
  }
}
//selects all the values on the waitinglist table
export async function getWaitingList() {
  console.log("b4 await");
  const response = await query("SELECT * FROM waitinglist;");
  console.log("after await");
  const display = response.rows;
  return display;
}

//selects all the values on the waitinglist table which matches the key paramets
export async function getWaitingListByCourse(param) {
  console.log("b4 await");
  const response = await query(
    `SELECT * FROM waitinglist WHERE keycourse = ($1);`,
    [param]
  );
  console.log("after await " + param);
  const display = response.rows;
  return display;
}

//Insert values in the course table that was created in the frontend
//--Not being used at the moment since the adding new topic feature wasn't created
export async function addToCourse(body) {
  const queryText = `INSERT INTO course (keycourse) 
  VALUES ($1);`;
  const rows = await query(queryText, [body.keycourse]);
  console.log("rows" + rows);
  return rows;
}

//select all the information present in the course table
//Not being used since this feature wasn't created yet.
export async function getCourse() {
  console.log("b4 await");
  const response = await query("SELECT * FROM course;");
  console.log("after await");
  const display = response.rows;
  return display;
}

//This function selects all the information present inside the announcement table
export async function getAnnouncement() {
  console.log("b4 await");
  const response = await query("SELECT * FROM announcement;");
  console.log("after await");
  const display = response.rows;
  return display;
}

// Adding volunteer, course and date information into announcement table
export async function addToAnnouncement(body) {
  const queryText = `INSERT INTO announcement (id, keycourse, volunteername, date, time ) 
  VALUES ($1, $2, $3, $4, $5);`;
  const rows = await query(queryText, [
    body.id,
    body.keycourse,
    body.volunteername,
    body.date,
    body.time,
  ]);
  console.log("rows" + rows);
  return rows;
}

//We delete the student from the wailiting list
export async function deleteUserFromWaitingList(body) {
  console.log("Delete ", body);
  const response = await query(
    `DELETE FROM waitinglist WHERE studentname= ($1) AND keycourse = ($2) RETURNING *;`,
    [body.studentname, body.keycourse]
  );
  console.log("after await " + body.studentname + " " + body.keycourse);
  const display = response.rows;
  console.log("This is returning ", display);
  return display;
}

export async function deleteUserFromAnnouncement(body) {
  console.log("Delete ", body);
  const response = await query(
    `DELETE FROM announcement WHERE keycourse = ($1) AND volunteername = ($2) AND date = ($3);`,
    [body.keycourse, body.volunteername, body.date]
  );
  console.log("after await ", body.volunteername, body.keycourse, body.date);
  const display = response.rows;
  console.log("This is returning ", display);
  return display;
}
