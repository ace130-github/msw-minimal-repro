import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "./msw";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
