// Alternative Supabase config with service key (for testing only)
// WARNING: HANYA UNTUK TESTING! Jangan commit service key ke repo public

import { createClient } from '@supabase/supabase-js'

// Use service key for testing (bypasses RLS)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY // Service key bypasses RLS
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// For testing with service key (removes RLS restrictions)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey || supabaseAnonKey)

// Regular client (with RLS)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return supabaseUrl !== 'https://placeholder.supabase.co' && 
         supabaseAnonKey !== 'placeholder-key'
}

// Type definitions for the contact form data
export interface ContactFormData {
  id?: string
  name: string
  email: string
  message: string
  created_at?: string
}
