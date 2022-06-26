import express from "express";
import { closeComplete } from "pg-protocol/dist/messages.js";
const router = express.Router();
router.use(express.json());

import {
  addToList,
  getWaitingList,
  getWaitingListByCourse,
  deleteUserFromWaitingList,
} from "../models/models.js";

router.post("/", async function (req, res) {
  const body = req.body;
  console.log(body);
  console.log("above is body");

  let data = await addToList(body);
  res.json({
    success: true,
    payload: "The student was added to the list",
  });
});

router.get("/", async function (req, res) {
  console.log(req.query.search);
  const result = await getWaitingList();
  res.json({ success: true, payload: result });
});

router.get("/:id", async function (req, res) {
  const param = req.params.id;
  console.log("waiting list " + param);
  const result = await getWaitingListByCourse(param);
  res.json({ success: true, payload: result });
});

router.delete("/", async function (req, res) {
  const reqBody = req.body;
  //console.log("waiting list ");
  console.log("deleted student", req)
  const result = await deleteUserFromWaitingList(reqBody);
  //res.send(req);
  res.json({ success: true, payload: "The student was deleted from the list" });
});

export default router;
