import request from "supertest";
import app from "../app.js";
import { expect } from "@jest/globals";
import { pool } from "../db/index.js";

afterAll(async () => {
  await pool.end();
});

describe("GET /announcement", () => {
  it("responds with json", async () => {
    const response = await request(app)
      .get("/announcement")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    const expected = {
      success: true,
      payload: expect.any(Array),
    };
    expect(response.body).toEqual(expected);
  });
});

describe("POST /announcement", () => {
  it("responds with json", async () => {
    const response = await request(app)
      .post("/announcement")
      .send({
        id: "8",
        keycourse: "sql",
        volunteername: "john",
        date: "tuesday",
        time: "17:30",
      })
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    const expected = {
      success: true,
      payload: "The new volunteer was added",
    };
    expect(response.body).toEqual(expected);
  });
});
