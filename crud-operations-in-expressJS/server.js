import express from "express";
import fs from "fs";


const app = express();

app.get("/students", (req, res) => {
  let resData = fs.readFileSync("db.json", "utf-8")
  // always fs will give data in string format
  // we need parse to convert string data into object format
  let parsedata = JSON.parse(resData)
  let students = parsedata.students
   res.json({students})
});

app.use(express.json());

app.post("/add_student",(req,res)=>{
  let resData = fs.readFileSync("db.json", "utf-8")
  // always fs will give data in string format
  // we need parse to convert string data into object format
  let parsedata = JSON.parse(resData)
  let students = parsedata.students
  let newStudentId = students[students.length -1].id+1;
  let newStudent = {id:newStudentId, name: req.body.name, year: req.body.year};
  students.push(newStudent)  

  let stringifiedData = JSON.stringify(parsedata)
  fs.writeFileSync("db.json", stringifiedData)
   res.json({students})
})

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
