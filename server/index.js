import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
//import data from "../src/data/data.json"

const app = express();
const PORT = 5000;
const PAGE_SIZE = 10;

const filePath = path.resolve("../src/data/data.json");

const raw = fs.readFileSync(filePath, "utf-8");
const data = JSON.parse(raw);

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json(data);
});

app.get("/items/:page", (req, res) => {
    const page = Number(req.params.page);
    const start = (page - 1) * PAGE_SIZE
    const end = start + PAGE_SIZE
    const slicedObj = Object.values(data).slice(start, end);
    res.json(slicedObj);
});

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});