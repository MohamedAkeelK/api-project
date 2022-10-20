import { Router } from "express";
import * as controllers from "../controllers/users.js";
const router = Router();

router.get("/", controllers.getUsers);
router.post("/", controllers.createUser);
router.get("/:id", controllers.getUser);
router.put("/:id", controllers.updateUser);
router.delete("/:id", controllers.deleteUser);
router.get("/gender/:gender", controllers.getUserByGender);
router.get("/limit/:num", controllers.getUsersLimit);

export default router;
