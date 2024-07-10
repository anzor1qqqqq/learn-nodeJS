const oc = require('os');

console.log(oc.platform());
console.log(oc.arch());
console.log(oc.cpus().length);

console.log(process.pid);