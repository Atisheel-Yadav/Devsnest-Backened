// const fs = require('fs');

//create a new file
//fs.writeFileSync('read.txt','hello world');
// fs.writeFileSync('read.txt','hello world.how are you');
//fs.appendFileSync("read.txt", "  how are u..");
// const buf_data=fs.readFileSync('read.txt');
// console.log(buf_data);

// org_data = buf_data.toString();
// console.log(org_data);
// console.log(org_data);
const Test = require("./require_test");
var obj = new Test();
var returned_val =obj.print();
console.log(returned_val);