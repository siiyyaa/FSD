const fs=require("fs");

fs.writeFileSync("student.txt","Name:Siya\n Roll No:2503201001162\n Branch:B.tech CSE\n Semester:third");

const details=fs.readFileSync("student.txt","utf-8");

console.log(details);
 
fs.appendFileSync("student.txt","\nSubject:Full stack development\n Marks:100\n Attendance:100%");
const updatedDetails=fs.readFileSync("student.txt","utf-8");

console.log(updatedDetails);