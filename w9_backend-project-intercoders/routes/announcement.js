import express from "express";
const router = express.Router();
router.use(express.json());

import {
  getAnnouncement,
  addToAnnouncement,
  deleteUserFromAnnouncement,
} from "../models/models.js";

router.post("/", async function (req, res) {
  const body = req.body;
  console.log(body);
  console.log("above is body");
  let data = await addToAnnouncement(body);
  res.json({ success: true, payload: "The new volunteer was added" });
});

router.get("/", async function (req, res) {
  console.log(req.query.search);
  const result = await getAnnouncement();
  res.json({ success: true, payload: result });
});

router.delete("/", async function (req, res) {
  const reqBody = req.body;
  //console.log("announcement list ");
  console.log("deleted announcement", reqBody);
  const result = await deleteUserFromAnnouncement(reqBody);
  res.json({ success: true, payload: "The announcement was deleted" });
});

export default router;
