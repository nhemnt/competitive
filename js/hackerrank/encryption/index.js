// https://www.hackerrank.com/challenges/encryption/problem

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


function getArrOfCharWithoutSpace (s) {
    const arrWithoutSpace = []
    for(let i=0; i< s.length; i++){
        if(s[i] !== ' '){
            arrWithoutSpace.push(s[i])
        }
    }
    
    return arrWithoutSpace
}

/*
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
function encryption(s) {
    // Write your code here
    const arrWithoutSpace = getArrOfCharWithoutSpace(s);
    
    const length = arrWithoutSpace.length;

    let row = Math.floor(Math.sqrt(length))
    let columns = row;
    if(row*columns < length)
        columns += 1;

    const arr = []
    
    let i =0;
    let rowCount = 0;
    let coulmnCount = 0;
    while(i<length){
        if(!arr[rowCount]){
            arr.push(arrWithoutSpace[i]);
        }else{
            arr[rowCount] = arr[rowCount] + arrWithoutSpace[i];
        }
        coulmnCount++;
        if(coulmnCount === columns){
            rowCount++
            coulmnCount = 0;
        }
        i++;
    }
    
    i = 0;
    const newArr = [];
    
    for(let j =0; j< columns; j++){
        for(let k =0; k< arr.length; k++){
            if(!arr[k][j]) continue;
           if(!newArr[j]){
                newArr.push(arr[k][j])
            }else{
                newArr[j] = newArr[j] + arr[k][j]
            }
        }
    }
    
    return newArr.join(" ");
   
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = encryption(s);

    ws.write(result + '\n');

    ws.end();
}
