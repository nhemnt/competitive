// https://www.hackerrank.com/challenges/minimum-distances/problem
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
 * Complete the 'minimumDistances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function minimumDistances(a) {
    // Write your code here
    const indexes = {};
    const minimumDistance = {}
    let minimum;
    for (let i = 0; i < a.length; i++) {
        if (indexes[a[i]] !== undefined) {
            const difference = i - indexes[a[i]]
            if (!minimumDistance[a[i]]) {
                minimumDistance[a[i]] = difference;
            } else {
                if (difference < minimumDistance[a[i]]) {
                    minimumDistance[a[i]] = difference;
                }
            }
            if (!minimum) {
                minimum = difference;
            } else if (minimum > difference) {
                minimum = difference;
            }
        }
        indexes[a[i]] = i;
    }
    return minimum === undefined ? -1 : minimum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = minimumDistances(a);

    ws.write(result + '\n');

    ws.end();
}