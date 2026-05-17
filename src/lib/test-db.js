const { dbService } = require("./db.js");
const { db } = require("./data.js");

console.log("Checking mock database structure:");
console.log("Mock Students length:", Object.keys(db.students).length);
console.log("Mock Tutors length:", db.tutors.length);
console.log("Mock Parents length:", db.parents.length);

async function runTests() {
  console.log("\nTesting authenticateParent with mock credentials...");
  try {
    const parent = await dbService.authenticateParent("tadashi_parent", "tad9shi");
    console.log("SUCCESS: Authenticated parent:", parent ? parent.name : "null");
  } catch (err) {
    console.error("FAILED authenticateParent:", err);
  }

  console.log("\nTesting getStudentById...");
  try {
    const student = await dbService.getStudentById("s1");
    console.log("SUCCESS: Fetched student:", student ? student.name : "null");
    console.log("Lessons count:", student?.lessons?.length || 0);
  } catch (err) {
    console.error("FAILED getStudentById:", err);
  }
}

runTests();
