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

const dataLength = data.length;
console.log(dataLength);

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json(data);
});

app.get("/items", (req, res) => {
  const search = (req.query.search || "").toLowerCase();
  if (search === ""){
    res.json(data)
  }
  else{
    res.json(data.filter(item => item.name.toLowerCase().includes(search)))
  }
});

app.get("/items/:page", (req, res) => {
  let filteredlist = [];
    const search = (req.query.search || "").toLowerCase();
    if (search === ""){
      filteredlist = data;
    }
    else{
      filteredlist = data.filter(item => item.name.toLowerCase().includes(search));
    }

    const page = Number(req.params.page);
    const start = (page - 1) * PAGE_SIZE
    const end = start + PAGE_SIZE
    const slicedObj = Object.values(filteredlist).slice(start, end);
    res.json(slicedObj);
});

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});