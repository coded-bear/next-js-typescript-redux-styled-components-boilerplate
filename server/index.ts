import express from "express";
import next from "next";
import compression from "compression";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle: any = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(compression());

  server.get("/page", (req: express.Request, res: express.Response) => {
    return app.render(req, res, "/page", req.query);
  });

  server.get("*", (req: express.Request, res: express.Response) => handle(req, res));

  server.use(handle).listen(port, (err: any) => {
    if (err) throw new Error(err);
    console.log(`> Server listening at ${port} port as ${dev ? "development" : process.env.NODE_ENV}`);
  });
});
