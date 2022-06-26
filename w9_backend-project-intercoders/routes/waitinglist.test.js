import request from "supertest";
import app from "../app.js";
import { expect } from "@jest/globals";
import { pool } from "../db/index.js";

afterAll(async () => {
  await pool.end();
});

describe("GET /waitinglist", () => {
  it("responds with json", async () => {
    const response = await request(app)
      .get("/waitinglist")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    const expected = {
      success: true,
      payload: expect.any(Array),
    };
    expect(response.body).toEqual(expected);
  });
});

describe("POST /waitinglist", () => {
  it("responds with json", async () => {
    const response = await request(app)
      .post("/waitinglist")
      .send({
        keycourse: "sql",
        studentname: "john",
      })
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    const expected = {
      success: true,
      payload: "The student was deleted from the list",
    };
    expect(response.body).toEqual(expected);
  });
});
