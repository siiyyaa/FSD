//process.nextTick() is used to schedule a callback function to be invoked in the next iteration of the event loop, after the current operation completes. It allows you to defer the execution of a function until the next tick of the event loop, which can be useful for managing asynchronous operations and avoiding blocking the event loop.
//setTimeout(...,0)
//setImmediate()
//cronjof

console.log("1. start");
process.nextTick(() => console.log("2. nextTick callback"));
setTimeout(() => console.log("3. setTimeout callback"), 1000);
setImmediate(() => console.log("4. setImmediate callback"));
console.log("5. end");