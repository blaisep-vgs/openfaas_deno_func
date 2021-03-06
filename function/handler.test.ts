import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { ServerRequest } from "https://deno.land/std/http/server.ts";
import handler from "./handler.ts";

Deno.test("deno-hello:handler: exists", () => {
  assert(handler);
});

Deno.test("deno-hello:handler: returns string message", async () => {
  const req = new ServerRequest();
  const response = await handler(req);
  assertEquals(
    response.body,
    JSON.stringify({ message: "Deno says Hello OpenFaaS!" }),
  );
});
