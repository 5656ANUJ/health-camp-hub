-- Enable Row Level Security on camplist table
ALTER TABLE public.camplist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to camp listings
-- This maintains functionality while enabling RLS protection
CREATE POLICY "Allow public read access to camp listings" 
ON public.camplist 
FOR SELECT 
USING (true);

-- Create policy to allow authenticated users to insert new camps
CREATE POLICY "Allow authenticated users to create camps" 
ON public.camplist 
FOR INSERT 
TO authenticated 
WITH CHECK (true);

-- Create policy to allow authenticated users to update their own camps
-- Note: We'll need to add a user_id column later to properly implement ownership
CREATE POLICY "Allow authenticated users to update camps" 
ON public.camplist 
FOR UPDATE 
TO authenticated 
USING (true);

-- Create policy to allow authenticated users to delete camps
CREATE POLICY "Allow authenticated users to delete camps" 
ON public.camplist 
FOR DELETE 
TO authenticated 
USING (true);