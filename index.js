import express from "express";
import cors from "cors";

import { statusRouter } from "./src/status/status.router.js";

const app = express();

const port = 3003;

app.use(cors());

app.use("/API/check-status", statusRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
