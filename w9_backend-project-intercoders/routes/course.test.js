import request from "supertest";
import app from "../app.js";
import { expect } from "@jest/globals";
import { pool } from "../db/index.js";

afterAll(async () => {
  await pool.end();
});

describe("GET /course", () => {
  it("responds with json", async () => {
    const response = await request(app)
      .get("/course")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    const expected = {
      success: true,
      payload: expect.any(Array),
    };
    expect(response.body).toEqual(expected);
  });
});

describe("POST /course", () => {
  it("responds with json", async () => {
    const response = await request(app)
      .post("/course")
      .send({
        course: "sql",
      })
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    const expected = {
      success: true,
      payload: "The new course was added",
    };
    expect(response.body).toEqual(expected);
  });
});
