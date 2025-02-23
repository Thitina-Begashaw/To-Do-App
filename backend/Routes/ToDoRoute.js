import createToDoList from "../controllers/ToDoController.js";
import express from "express";
const router = express.Router();

router.post('/' , createToDoList)

export default router;