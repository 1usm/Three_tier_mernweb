import express from "express";
import Record from "../models/record.js";

const router = express.Router();

// Get all records
router.get("/", async (req, res) => {
  try {
    const records = await Record.find();
    res.status(200).json(records);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching records");
  }
});

// Get a single record by ID
router.get("/:id", async (req, res) => {
  try {
    const record = await Record.findById(req.params.id);

    if (!record) res.status(404).send("Record not found");
    else res.status(200).json(record);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching record");
  }
});

// Create a new record
router.post("/", async (req, res) => {
  try {
    const { name, position, level } = req.body;
    const record = new Record({ name, position, level });
    await record.save();
    res.status(201).json(record);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating record");
  }
});

// Update a record by ID
router.patch("/:id", async (req, res) => {
  try {
    const { name, position, level } = req.body;
    const record = await Record.findByIdAndUpdate(
      req.params.id,
      { name, position, level },
      { new: true }
    );

    if (!record) res.status(404).send("Record not found");
    else res.status(200).json(record);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating record");
  }
});

// Delete a record by ID
router.delete("/:id", async (req, res) => {
  try {
    const record = await Record.findByIdAndDelete(req.params.id);

    if (!record) res.status(404).send("Record not found");
    else res.status(200).send("Record deleted");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting record");
  }
});

export default router;
