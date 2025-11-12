import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://gxipfcrfcgcqkuovfydp.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4aXBmY3JmY2djcWt1b3ZmeWRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1Mzg1NjAsImV4cCI6MjA3NjExNDU2MH0.a6cRqEc2elQyOqHqdvTug4-DEQle8Bm7QDdUfnYJiRs";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
