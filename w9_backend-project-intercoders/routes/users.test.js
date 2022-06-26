import request from "supertest";
import app from "../app.js";
import { expect } from "@jest/globals";
import { pool } from "../db/index.js";

afterAll(async () => {
  await pool.end();
});

describe("GET /users", () => {
  it("responds with json", async () => {
    const response = await request(app)
      .get("/users")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    const expected = {
      success: true,
      payload: expect.any(Array),
    };
    expect(response.body).toEqual(expected);
  });
});

describe("POST /users/register", () => {
  it("responds with json", async () => {
    const response = await request(app)
      .post("/register")
      .send({
        username: "john",
        password: "test",
      })
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    const expected = {
      success: true,
      payload: "The new user was added",
    };
    expect(response.body).toEqual(expected);
  });
});
