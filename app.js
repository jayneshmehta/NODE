var EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on('messageLogged',(arg) =>{
    console.log("Msg Triggered " , arg);
});

const log = require("./logger");
log("heeeeee"); 