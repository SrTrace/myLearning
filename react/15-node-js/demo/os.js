const os = require('os');

console.log('Operation  System: ', os.platform());

console.log('Processor architecture: ', os.arch());

console.log('Info about processors', os.cpus());

console.log('Info about memory',  os.freemem());

console.log('Info about total memory',  os.totalmem());

console.log('Home Dir', os.homedir());

console.log('System is running', os.uptime());