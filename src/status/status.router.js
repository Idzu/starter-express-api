import { Router } from "express";
import statusController from "./status.controller.js";

export const statusRouter = new Router();

statusRouter.get("/status/:id", statusController.getStatus);
