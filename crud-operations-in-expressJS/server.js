import express from "express";
import fs from "fs";


const app = express();

app.get("/students", (req, res) => {
  let resData = fs.readFileSync("db.json", "utf-8")
  // always fs will give data in string format
  console.log("resdata",resData)

  // we need parse to convert string data into object format
  let parsedata = JSON.parse(resData)
  console.log("parsedata",parsedata)
  let students = parsedata.students
  console.log("students", students)
 res.json(students)
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
