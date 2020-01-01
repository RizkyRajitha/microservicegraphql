import express from "express";
import cors from "cors";
import bp from "body-parser";

import accessEnv from "#root/helpers/accessEnv";

const port = accessEnv("port", 7100);

const app = express();

app.use(bp());
app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true
  })
);

app.get("/", (req, res) => {
  res.send("listing service is up");
});

app.listen(port, "0.0.0.0", () =>
  console.info("listings service listing on " + port)
); 
