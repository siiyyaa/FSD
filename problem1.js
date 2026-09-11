const EventEmitter=require('events');
const myEmitter=new EventEmitter();
myEmitter.on('greet',(name)=>{
    console.log(`Welcome,${name}`);
});
myEmitter.on('exit',(code)=>{
    console.log(`Exit event received  code: ${code}`);
});
myEmitter.emit('greet','B.tech Student');
myEmitter.emit('exit',0);
