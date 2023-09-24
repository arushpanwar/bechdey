import { createClient, SupabaseClient } from "@supabase/supabase-js";


  export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_USERNAME||"", process.env.NEXT_PUBLIC_SUPABASE_KEY||"");
