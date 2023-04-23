import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zigydihmnwehecgeokqz.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppZ3lkaWhtbndlaGVjZ2Vva3F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIyNTU5MzcsImV4cCI6MTk5NzgzMTkzN30.X5tDt3Pk0dk_TPHzr3us_lqHDJuRZ6YpT0zMAeIIfTE";

  export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
