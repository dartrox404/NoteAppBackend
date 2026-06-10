const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth_middleware");
const {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} = require("../controller/app_controller");
router.get("/", protect, getNotes);
router.get("/:id", protect, getNote);
router.post("/", protect, createNote);
router.put("/:id", protect, updateNote);
router.delete("/:id", protect, deleteNote);
module.exports = router;
