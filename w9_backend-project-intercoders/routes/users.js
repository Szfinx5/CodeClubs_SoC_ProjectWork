// THIS COMPONENT IS NOT BEING USED ON THE BETA VERSION OF THE APP
// it is going to be added for the next version
// ** It needs a cryptography, because for now all users are visible and so are their passwords.

import { createUser, getUsers, login } from "../models/models.js";
import express from "express";

const router = express.Router();
router.use(express.json());

// Receive post request new register users
router.post("/register", async function (req, res) {
  const body = req.body;
  console.log(body);
  console.log("above is body");
  let data = await createUser(body);
  res.json({ success: true, payload: "The new user was added" });
});

// Receive post request for the user login input
router.post("/login", async function (req, res) {
  const body = req.body;
  console.log(body);
  console.log("above is body");
  let data = await login(body);
  res.json({ success: true, payload: data });
});

// Receive get request and check any matchings users on the database
router.get("/", async function (req, res) {
  console.log(req.query.search);
  const result = await getUsers();
  res.json({ success: true, payload: result });
});

export default router;
