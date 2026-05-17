import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ayovausnbakzwiudziar.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5b3ZhdXNuYmFrendpdWR6aWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwMzM2ODksImV4cCI6MjA5NDYwOTY4OX0.YquLN2wgXzuvaiRP7a7_rDPieFa6zoAOYT0urZtT83o";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
