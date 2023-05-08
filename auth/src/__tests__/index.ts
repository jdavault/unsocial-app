/* eslint-disable prettier/prettier */
import request from "supertest";
import app from "../app";

test("should respond with 200", async () => {
  await request(app).get("/users/1").expect("Content-Type", /json/).expect(200);
});
