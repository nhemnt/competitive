//Javascript - Champions League Teams
'use strict';

const fs = require('fs');
const https = require('https');
const axios = require('axios')

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

const baseUrl = 'https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&'
async function getAllData(year) {
    
    
    return data;
    
}

async function getTeams(year, k) {
    // write your code here
    // API endpoint template: https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=<YEAR>&page=<PAGE_NUMBER>
  let page = 1;
  
    let data = []
    let url = `${baseUrl}year=${year}&page=${page}`;
    let result = await axios.get(url)
    
    
    data = [...data, ...result.data.data];

    let totalPages = result.data.total_pages;

    
    for(let i =2; i <= totalPages; i++){
        url = `${baseUrl}year=${year}&page=${i}`

        result = await axios.get(url);
        data = [...data, ...result.data.data];
    }
    

    const matches = {}
    
    data.forEach(x => {
        if(matches[x.team1]){
            matches[x.team1] += 1; 
        }else{
            matches[x.team1] = 1;
        }
        
        if(matches[x.team2]){
            matches[x.team2] += 1; 
        }else{
            matches[x.team2] = 1;
        }
    })
   
    const results = [];
    Object.entries(matches).forEach(x => {
        if(x[1] >= k){
            results.push(x[0])
        }
    })

   return results.sort();
}

async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const year = parseInt(readLine().trim());
  const k = parseInt(readLine().trim());

  const teams = await getTeams(year, k);

  for (const team of teams) {
    ws.write(`${team}\n`);
  }
}
