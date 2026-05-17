// Scratch script to query the live Supabase database and print the results
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

// Manually parse the .env.local file
const envPath = path.join(__dirname, "../../.env.local");
const envContent = fs.readFileSync(envPath, "utf-8");
const env = {};
envContent.split("\n").forEach(line => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    const key = match[1];
    let value = match[2] || "";
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
    env[key] = value;
  }
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL || "https://ayovausnbakzwiudziar.supabase.co";
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log("Connecting to Supabase at:", supabaseUrl);

if (!supabaseAnonKey) {
  console.error("Error: NEXT_PUBLIC_SUPABASE_ANON_KEY is not defined in env!");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testFetch() {
  console.log("\n--- Testing Live Supabase Queries ---");
  
  // 1. Fetch Students
  const { data: students, error: stErr } = await supabase.from("students").select("id, name, course");
  if (stErr) console.error("Error fetching students:", stErr);
  else console.log(`✓ Live Students count: ${students.length} (${students.map(s => s.name).join(", ")})`);

  // 2. Fetch Parents
  const { data: parents, error: prErr } = await supabase.from("parents").select("id, username, name");
  if (prErr) console.error("Error fetching parents:", prErr);
  else console.log(`✓ Live Parents count: ${parents.length} (${parents.map(p => p.username).join(", ")})`);

  // 3. Fetch Tutors
  const { data: tutors, error: tuErr } = await supabase.from("tutors").select("id, name");
  if (tuErr) console.error("Error fetching tutors:", tuErr);
  else console.log(`✓ Live Tutors count: ${tutors.length} (${tutors.map(t => t.name).join(", ")})`);

  // 4. Fetch Lessons
  const { data: lessons, error: leErr } = await supabase.from("lessons").select("id, tutor, date");
  if (leErr) console.error("Error fetching lessons:", leErr);
  else console.log(`✓ Live Lessons count: ${lessons.length}`);
}

testFetch().catch(console.error);
