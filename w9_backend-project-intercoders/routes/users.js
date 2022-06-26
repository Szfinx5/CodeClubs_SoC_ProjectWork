import express from "express";
const router = express.Router();
router.use(express.json());

import { createUser, getUsers, login } from "../models/models.js";

router.post("/register", async function (req, res) {
  const body = req.body;
  console.log(body);
  console.log("above is body");
  let data = await createUser(body);
  res.json({ success: true, payload: "The new user was added" });
});

router.post("/login", async function (req, res) {
  const body = req.body;
  console.log(body);
  console.log("above is body");
  let data = await login(body);
  res.json({ success: true, payload: data });
});

router.get("/", async function (req, res) {
  console.log(req.query.search);
  const result = await getUsers();
  res.json({ success: true, payload: result });
});

export default router;
