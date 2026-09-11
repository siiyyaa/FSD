const EventEmitter = require("events");
const app = new EventEmitter();
app.on("login", (username) => {
  console.log(`Welcome, ${username} logged in successfully!`);
});
app.on("message",(message)=>{
    console.log(`Message received: ${message}`);
});

app.emit("login","john");
app.emit("message","Welcome to node.js!");
