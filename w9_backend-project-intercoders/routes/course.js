import {addToCourse, getCourse} from "../models/models.js";
import express from "express";

const router = express.Router();
router.use(express.json());

// Receive post for new topics/subjects on the categories
router.post("/", async function (req, res) {
  const body = req.body;
  console.log(body);
  console.log("above is body");
  let data = await addToCourse(body);
  res.json({ success: true, payload: "The new course was added" });
});

// Receive get request of all topics/subjects
router.get("/", async function (req, res) {
  console.log(req.query.search);
  const result = await getCourse();
  res.json({ success: true, payload: result });
});


export default router;