const fs = require("fs");

//create file

fs.writeFileSync("student.txt","B.tech Node.js Lab");

//read file

const data=fs.readFileSync("student.txt","utf-8");

console.log(data);

//write file
fs.writeFileSync("student.txt", "Name:Siya\n Subject:Full stack development");

console.log("file created successfully.");

//update file
fs.appendFileSync("student.txt", "\nThis is the updated content of the file.\n Experiment 2 is completed.");
console.log("file updated successfully.");
console.log(data);