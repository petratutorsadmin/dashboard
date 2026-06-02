const fs = require('fs');
const tsv1 = fs.readFileSync('/Users/yutaka-main/petratutors/scratch/first_prompt.txt', 'utf-8');
const tsv2 = fs.readFileSync('/Users/yutaka-main/petratutors/scratch/new_lessons.tsv', 'utf-8');

let lines1 = tsv1.split('\n');
if (lines1[0].includes('<USER_REQUEST>')) lines1.shift();
let validLines1 = [];
for (let line of lines1) {
    if (line.includes('<truncated')) break;
    validLines1.push(line);
}
let tsvStr = validLines1.join('\n') + '\n' + tsv2;

function parseTSV(str) {
    let result = [];
    let row = [];
    let field = '';
    let inQuotes = false;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let nextChar = str[i+1];

        if (inQuotes) {
            if (char === '"') {
                if (nextChar === '"') {
                    field += '"';
                    i++;
                } else {
                    inQuotes = false;
                }
            } else {
                field += char;
            }
        } else {
            if (char === '"') {
                inQuotes = true;
            } else if (char === '\t') {
                row.push(field);
                field = '';
            } else if (char === '\n' || char === '\r') {
                if (char === '\r' && nextChar === '\n') i++;
                row.push(field);
                result.push(row);
                row = [];
                field = '';
            } else {
                field += char;
            }
        }
    }
    if (field || row.length > 0) {
        row.push(field);
        result.push(row);
    }
    return result;
}

const records = parseTSV(tsvStr);
for (const row of records) {
    if (row.length >= 3 && row[2]) {
        console.log(`ID: ${row[0]}, Name: "${row[2]}"`);
    }
}
