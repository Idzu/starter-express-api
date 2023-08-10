import express from "express";
import cors from "cors";

import { statusRouter } from "./src/status/status.router.js";

import https from "https";
import fs from "fs";

const start = async () => {
  try {
    const app = express();

    const port = 3003;

    app.use(cors());

    app.use("/API/check-status", statusRouter);

    // Server
    const httpsServer = https.createServer(
      {
        key: fs.readFileSync("privkey.pem"),
        cert: fs.readFileSync("fullchain.pem"),
      },
      app
    );

    httpsServer.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
