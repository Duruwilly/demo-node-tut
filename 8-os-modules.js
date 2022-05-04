// the os modules - the built in modules that provide many useful methods and properties for interacting with the operating system as well as server

const os = require('os')

//info about user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in second
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOs = {
 name: os.type(),
 release: os.release(),
 totalMem: os.totalmem(),
 freeMem: os.freemem(),
}

console.log(currentOs);