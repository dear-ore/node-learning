//Reading and writing files synchronously
const fs = require('fs');

const text = fs.readFileSync('./input.txt', 'utf-8');
console.log(text);

const writeText = `The following statement is rumoured to have all the letters of the English alphabet: ${text}. \nCreated on ${Date.now()}`;
fs.writeFileSync('./output.txt', writeText);
console.log("File written!");

//reading and writing files asynchronously
fs.readFile('./text.txt', 'utf-8', (err, data) => {
    if (err) console.log("Error!💥");
    console.log(data);
});
const file = "Reading and writing files asynchronously in Javascript";

fs.writeFile('./text.txt', `\n${file}`,'utf-8', err => {
    if(err) console.log("Error!💥");
    console.log("done writing to file");
});

console.log("Reading and Writing......");