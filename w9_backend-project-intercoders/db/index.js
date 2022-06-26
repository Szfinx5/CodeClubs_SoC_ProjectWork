import pg from "pg";

export const pool = new pg.Pool({
  user: "gtcmpufwzdliky",
  host: "ec2-34-247-72-29.eu-west-1.compute.amazonaws.com",
  database: "d2e0f5s9m98e3g",
  password: "2d9bb863c132d4100fd2a9e12e2aab38c72969740e019440060213c17952f391",
  port: "5432",
  ssl: { rejectUnauthorized: false },
});

export function query(text, params, callback) {
  return pool.query(text, params, callback);
}
