import { Hono } from "@hono/hono";
const app = new Hono();

app.get("/", (c) => c.text("Hono!"));

if (import.meta.main) {
  Deno.serve({ hostname: "127.0.0.1", port: 5555 }, app.fetch);
}
