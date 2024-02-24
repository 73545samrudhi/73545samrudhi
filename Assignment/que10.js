// Synchronous
console.log("Start (Synchronous)");
console.log("End (Synchronous)");

// Asynchronous 
console.log("Start (Asynchronous)");
setTimeout(() => {
    console.log("End (Asynchronous)");
}, 2000);