import { application } from "express";
import { query } from "../db/index.js";

export async function createUser(body) {
  const queryText = `INSERT INTO users (username, password) 
  VALUES ($1, $2);`;
  const rows = await query(queryText, [body.username, body.password]);

  console.log("rows" + rows);
  return rows;
}

export async function login(body) {
  console.log("before query " + body.username);
  const queryText = `SELECT * FROM users WHERE username = ($1) AND password = ($2);`;
  console.log(queryText);
  const { rows } = await query(queryText, [body.username, body.password]);
  console.log("rows" + rows);
  return rows;
}

export async function getUsers() {
  console.log("b4 await");
  const response = await query("SELECT * FROM users;");
  console.log("after await");
  const display = response.rows;
  return display;
}

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

export async function getWaitingList() {
  console.log("b4 await");
  const response = await query("SELECT * FROM waitinglist;");
  console.log("after await");
  const display = response.rows;
  return display;
}

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

export async function addToCourse(body) {
  const queryText = `INSERT INTO course (keycourse) 
  VALUES ($1);`;
  const rows = await query(queryText, [body.keycourse]);

  console.log("rows" + rows);
  return rows;
}

export async function getCourse() {
  console.log("b4 await");
  const response = await query("SELECT * FROM course;");
  console.log("after await");
  const display = response.rows;
  return display;
}

export async function getAnnouncement() {
  console.log("b4 await");
  const response = await query("SELECT * FROM announcement;");
  console.log("after await");
  const display = response.rows;
  return display;
}

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

  console.log("rows", rows);
  return rows;
}

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
