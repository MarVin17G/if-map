import { Router } from "express";
import { ambienteControllers } from "../controllers";

const gestorRouters = Router();

gestorRouters.get("/", ambienteControllers.getAll);
gestorRouters.get("/:gestorId", ambienteControllers.getById);
gestorRouters.post("/", ambienteControllers.create);
gestorRouters.put("/:gestorId", ambienteControllers.update);
gestorRouters.delete("/:gestorId", ambienteControllers.remove);

export default gestorRouters;
