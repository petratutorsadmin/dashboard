const fs = require('fs');
const path = require('path');

const studentMap = {
  "Tadashi Hashimoto": "s1",
  "Miyako Isobe": "s2",
  "Sarah Sugiyama": "s3",
  "Shinichi Fukui": "s4",
  "Kizuki Ishida": "s5",
  "Lee Akihiro": "s6",
  "Shoji Takanao": "s7",
  "Takeshi Kawana": "s8",
  "Yusuke": "s9",
  "Yuta Sumiya": "s10",
  "Konan Saito": "s11",
  "Hiroyuki Iwakura": "s12",
  "Takuma": "s13",
  "Yuki Takenaka": "s14",
  "Tomioka": "s15"
};

const tutorMap = {
  "Tina Zheng": "t1",
  "Hannah Tuffy": "t2",
  "Dayun Suh": "t3",
  "Hazel": "t4",
  "Alice Williams": "t5",
  "Ashley Norton": "t6",
  "Riku Ishida": "t7",
  "Yutaka Takaku": "t8"
};

function run() {
  const filePath = path.join(__dirname, 'new_schedules_data.txt');
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.trim().split('\n');

  const schedules = [];

  lines.forEach(line => {
    if (!line.trim()) return;
    const parts = line.split('\t');
    if (parts.length < 10) return;

    const id = parts[0].trim();
    const studentName = parts[1].trim();
    const tutorName = parts[2].trim();
    const dateTimeStr = parts[3].trim();
    const paymentStatus = parts[4].trim();
    const duration = parseInt(parts[5].trim(), 10);
    const rate = parts[6].trim();
    const billedAmount = parts[7].trim();
    const payoutAmount = parts[8].trim();
    const status = parts[9].trim();
    const margin = parts[11] ? parts[11].trim() : '0';

    const sId = studentMap[studentName] || null;
    const tId = tutorMap[tutorName] || null;

    // Convert date time to JST format
    const formattedTimestamp = `${dateTimeStr}:00+09:00`; 

    schedules.push({
      id,
      studentName,
      tutorName,
      studentId: sId,
      tutorId: tId,
      dateTime: formattedTimestamp,
      duration,
      status,
      paymentStatus,
      billedAmount,
      payoutAmount,
      margin
    });
  });

  const dataPath = path.join(__dirname, 'data.js');
  let dataContent = fs.readFileSync(dataPath, 'utf8');

  // Let's parse out where "export const db = {" is, and append the schedules field.
  // Actually, we can just replace the final closing "};" of "export const db = {" with a schedules key!
  // Let's find the very last closing brace.
  const lastBraceIndex = dataContent.lastIndexOf('};');
  if (lastBraceIndex === -1) {
    console.error("Could not find ending closing brace of db in data.js");
    return;
  }

  const before = dataContent.substring(0, lastBraceIndex).trim();
  
  // Strip trailing comma if present
  let cleanBefore = before;
  if (cleanBefore.endsWith(',')) {
    cleanBefore = cleanBefore.slice(0, -1);
  }

  const schedulesString = JSON.stringify(schedules, null, 4);

  const updatedContent = `${cleanBefore},\n    "schedules": ${schedulesString}\n};`;

  fs.writeFileSync(dataPath, updatedContent, 'utf8');
  console.log(`Successfully appended ${schedules.length} mock schedules to src/lib/data.js!`);
}

run();
