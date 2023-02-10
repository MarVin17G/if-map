import { Router } from "express";
import { gestorControllers } from "../controllers";

const gestorRouters = Router();

gestorRouters.get("/", gestorControllers.getAll);
gestorRouters.get("/:gestorId", gestorControllers.getById);
gestorRouters.post("/", gestorControllers.create);
gestorRouters.put("/:gestorId", gestorControllers.update);
gestorRouters.delete("/:gestorId", gestorControllers.remove);

export default gestorRouters;
