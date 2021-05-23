// https://www.hackerrank.com/challenges/ctci-ransom-note/problem

'use strict';

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
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */

function checkMagazine(magazine, note) {
    // Write your code here

    const magzineObj = {}
    const noteObj = {};
    magazine.forEach((word) => {
        if (magzineObj[word]) {
            magzineObj[word] += 1;
        } else {
            magzineObj[word] = 1;
        }
    })
    note.forEach((word) => {
        if (noteObj[word]) {
            noteObj[word] += 1;
        } else {
            noteObj[word] = 1;
        }
    });
    let result = 'Yes'
    const arr = Object.entries(noteObj);
    for (let i = 0; i < arr.length; i++) {
        if (!magzineObj[arr[i][0]]) {
            result = 'No';
            break
        }

        if (magzineObj[arr[i][0]] < arr[i][1]) {
            result = 'No';
            break;
        }
    }
    console.log(result);
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const m = parseInt(firstMultipleInput[0], 10);

    const n = parseInt(firstMultipleInput[1], 10);

    const magazine = readLine().replace(/\s+$/g, '').split(' ');

    const note = readLine().replace(/\s+$/g, '').split(' ');

    checkMagazine(magazine, note);
}