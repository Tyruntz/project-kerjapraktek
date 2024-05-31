
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wxnmwtambphlaobvcbaa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4bm13dGFtYnBobGFvYnZjYmFhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNDk4MTEzMCwiZXhwIjoyMDMwNTU3MTMwfQ.s3lF8-Gh9tJt8gDWoRqvJ9V2R-_RIJ4T773nEzKx0zE';

export const supabase = createClient(supabaseUrl, supabaseKey);
