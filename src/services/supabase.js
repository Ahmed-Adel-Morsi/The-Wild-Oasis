import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oemqyabsbiyyrpdjzyte.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lbXF5YWJzYml5eXJwZGp6eXRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxNjUxMjIsImV4cCI6MjA5MDc0MTEyMn0.UQzU3Z3Cfx2rTN1wAC7wRWdR0bJ8n8WasFWYNEnMya4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
