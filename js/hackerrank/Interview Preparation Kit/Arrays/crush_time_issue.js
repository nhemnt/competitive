// https://www.hackerrank.com/challenges/crush/problem
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
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */


function arrayManipulation(n, queries) {
    let max = queries[0][2];
    const indexMapSum = {}
    for (let i = 0; i < queries.length; i++) {
        for (let j = queries[i][0] - 1; j < queries[i][1]; j++) {
            const val = queries[i][2];
            if (val > max) {
                max = val;
            }
            if (indexMapSum[`${i}_${j}`]) {
                const sum = indexMapSum[`${i}_${j}`] + val;
                if (sum > max) {
                    max = sum;
                }
                indexMapSum[`${i}_${j}`] = sum;
            } else {
                indexMapSum[`${i}_${j}`] = val;;
            }
            for (let k = i + 1; k < queries.length; k++) {
                if (indexMapSum[`${k}_${j}`]) {
                    const sum = indexMapSum[`${k}_${j}`] + val;
                    if (sum > max) {
                        max = sum;
                    }
                    indexMapSum[`${k}_${j}`] = sum;
                } else {
                    indexMapSum[`${k}_${j}`] = val;
                }
            }
        }
    }

    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = arrayManipulation(n, queries);

    ws.write(result + '\n');

    ws.end();
}