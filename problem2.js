//Perform CRUD operation on file using file system module in your program.
//WriteFile() method is used to create a new file and write some content into it. If the file already exists, it will overwrite the existing content.
//ReadFile() method is used to read the content of the file.
//AppendFile() method is used to update the content of the file by adding new content at the end.
//Unlink() method is used to delete the file.

//CRUD operations - Create Read Update Delete

//Step-1: Import fs- file system module in your program 
const fs = require("fs"); 

//Step-2: C -> Create a file and write some content into it.
fs.writeFile("student.txt","Hello!, This file is for student data.",(err)=>{
    if (err) throw err
    else
    {
        console.log("File successfully created")
    }
});

//Step-3: R -> Read the content of the file and display it on console.
fs.readFile("student.txt","utf-8",(err,data)=>{
    if (err) throw err
    else
    {
        console.log("File content is: ");
        console.log(data);
    }
});

//Step-4: U -> Update the content of the file using appendFile() method. It will only add extra content inside an already existing file.
fs.appendFile("student.txt","\nThis is the updated content of the file. This is the file of CSE 31, Semester 3 and Year 2nd.",(err)=>{
    if (err) throw err
    else
    {
        console.log("File updated successfully");
    }
});

//Step-5: D -> Delete the file.
fs.unlink("student.txt",(err)=>{
    if (err) throw err
    else
    {
        console.log("File deleted successfully");
    }
});