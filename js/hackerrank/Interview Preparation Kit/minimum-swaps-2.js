// https://www.hackerrank.com/challenges/minimum-swaps-2/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}
const merge = (left, right) => {
  const arr = [];
  while(left.length && right.length){
      if(left[0] > right[0]){
          arr.push(right.shift());
      }else{
          arr.push(left.shift());
      }
  }
  return [...arr, ...left, ...right];
}
const mergeSort = (arr) => {
  if(arr.length <2){
      return arr;
  }
  const mid = Math.floor(arr.length/2)
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}


function minimumSwaps(arr) {
    
  const unSortedHash = {};
  const selected = {}
  let tempSwap;
  let swap = 0;
  for(let i =0; i< arr.length; i++){
    unSortedHash[arr[i]] = i;
    selected[arr[i]] = false
  }
  
  let sortedArr = mergeSort(arr);
  for (let i = 0; i < arr.length; i++) {
    if (i === unSortedHash[sortedArr[i]]) {
      continue;
    } else {
      swap++;
      tempSwap = sortedArr[i]
      const index = unSortedHash[sortedArr[i]]
      sortedArr[i] = sortedArr[index];
      sortedArr[index] = tempSwap;
      i--;
    }
  }
  return swap;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}
