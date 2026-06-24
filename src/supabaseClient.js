import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wmdenzyxcfyvhjohjpoe.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtZGVuenl4Y2Z5dmhqb2hqcG9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyNzE0NjEsImV4cCI6MjA5Nzg0NzQ2MX0.JsM91NEOMDNZ1b4zpZ2eRgjSApJ696zaKhaLDuR3-DQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
