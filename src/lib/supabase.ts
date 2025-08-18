import { createClient } from '@supabase/supabase-js'

// Use placeholder values if environment variables are not set (for development)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Create client - use service key if available for testing, otherwise anon key
const clientKey = supabaseServiceKey || supabaseAnonKey
export const supabase = createClient(supabaseUrl, clientKey)

// Check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return supabaseUrl !== 'https://placeholder.supabase.co' && 
         supabaseAnonKey !== 'placeholder-key'
}

// Debug function to check configuration
export const debugSupabaseConfig = () => {
  console.log('Supabase Config:', {
    url: supabaseUrl,
    anonKeyLength: supabaseAnonKey?.length,
    serviceKeyAvailable: !!supabaseServiceKey,
    usingServiceKey: !!supabaseServiceKey
  })
}

// Type definitions for the contact form data
export interface ContactFormData {
  id?: string
  name: string
  email: string
  message: string
  created_at?: string
}
