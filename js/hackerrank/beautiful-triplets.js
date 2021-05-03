// https://www.hackerrank.com/challenges/beautiful-triplets/problem

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

/*
 * Complete the 'beautifulTriplets' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function beautifulTriplets(d, arr) {
    // Write your code here
    let result = 0
    const arrLength = arr.length
    if( arrLength<3) return 0;
    const hashMap = {}
    
    for(let i =0; i< arrLength; i++){
        hashMap[arr[i]] = i;
    }
    for(let i =0; i< arrLength -2; i++){
        const second = arr[i] +d;
        const third = arr[i] + (2*d);
        if(hashMap[second] && hashMap[third]){
            result++;
        }
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const d = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = beautifulTriplets(d, arr);

    ws.write(result + '\n');

    ws.end();
}
