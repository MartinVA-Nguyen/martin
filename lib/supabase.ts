import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://udhtoivsehidjggntlqx.supabase.co';
const supabaseAnonKey = 'sb_publishable_gJIzmh9VDtpO7-P41V5U0A_hMIWN5EV';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);