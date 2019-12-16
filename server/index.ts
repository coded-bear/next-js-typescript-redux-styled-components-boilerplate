import next from "next";
import express from "express";
import compression from "compression";
import { Server, Req, Res, Err } from "../common/utils/types";

const port: number = parseInt(process.env.PORT || "3000", 10);
const dev: boolean = process.env.NODE_ENV !== "production";
const app: any = next({ dev });
const handle: any = app.getRequestHandler();

app.prepare().then(() => {
  const server: Server = express();

  server.use(
    "/static",
    express.static(__dirname + "/static", {
      setHeaders(res) {
        res.setHeader("Cache-Control", "public,max-age=31536000,immutable");
      }
    })
  );
  server.use(
    "/dist",
    express.static(__dirname + "/dist", {
      setHeaders(res) {
        res.setHeader("Cache-Control", "public,max-age=31536000,immutable");
      }
    })
  );
  server.use(compression());

  server.get("/page", (req: Req, res: Res) => {
    return app.render(req, res, "/page", req.query);
  });

  server.get("*", (req: Req, res: Res) => handle(req, res));

  server.listen(port, (err: Err) => {
    if (err) throw new Error(err);
    console.log(`> Server listening at ${port} port as ${dev ? "development" : process.env.NODE_ENV}`);
  });
});
