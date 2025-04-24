import "./setup";
import { expect, test } from "vitest";
import { server } from "./msw";
import { http, HttpResponse } from "msw";

const MOCKED_PATH = "http://localhost";

test("Minimal reproduction", async () => {
  server.use(
    http.post(MOCKED_PATH, () => {
      return HttpResponse.json({ result: "abc" }, { status: 200 });
    })
  );
  const response = await callPath();
  expect(response).toBeNull();
});

async function callPath() {
  const params = new URLSearchParams();
  params.append("a", "b");
  return await fetch(MOCKED_PATH, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });
}
