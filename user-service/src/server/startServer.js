import express from "express";
import cors from "cors";
import bp from "body-parser";

import accessEnv from "#root/helpers/accessEnv";
import router from "./routes";

const port = accessEnv("port", 7101);

const app = express();

app.use(bp());
app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true
  })
);

router(app);

app.get("/", (req, res) => {
  res.send("user service is up");
});

app.use(( err, req,res ,next )=>{

  return res.status(500).json({
    message:err.message
  })

})

app.listen(port, "0.0.0.0", () =>
  console.info("user service listing on " + port)
);
