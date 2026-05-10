
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ujchqhvrzsuscnkdwvyi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqY2hxaHZyenN1c2Nua2R3dnlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzMzk2NDAsImV4cCI6MjA5MzkxNTY0MH0.I8idMoty2XzDUrKyO88AqGJLWzMpKjEDPFEn9BKwTuY';

export const supabase = createClient(supabaseUrl, supabaseKey);
