// javascript - joined logger
'use strict';

const fs = require('fs');


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

function logger(msg) {
  ws.write(`${msg.text}\n`);
}

function joinedLogger(level, sep) {
  // write your code here
 const arr = []
  
  return function(...args){
    args.forEach(element => {
        if(element.level >= level){
            arr.push(element.text);
        }
    })
    ws.write(arr.join(sep));
  }
}

function main() {
  const firstLine = readLine().trim().split(" ");