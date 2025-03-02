// src/supabase.js
import { createClient } from "@supabase/supabase-js";

// Replace with your Supabase credentials
const SUPABASE_URL = "https://exfxpfbymnuhzfugsveh.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4ZnhwZmJ5bW51aHpmdWdzdmVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3NjQwOTQsImV4cCI6MjA1NjM0MDA5NH0.cvuXZ8pxFWC9udZ0jL77jJKaEFheAuxi2sUUoukNZTw";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);