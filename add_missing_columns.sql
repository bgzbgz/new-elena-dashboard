-- Add missing columns to the teams table
-- This will add the graduation_date and starting_date columns that were referenced in the forms but not in the database

-- Add graduation_date column (the schema has 'graduation' text but we need 'graduation_date' date)
ALTER TABLE public.teams ADD COLUMN IF NOT EXISTS graduation_date date;

-- Add starting_date column (this was missing from the original schema)
ALTER TABLE public.teams ADD COLUMN IF NOT EXISTS starting_date date;

-- These columns should already exist, but adding IF NOT EXISTS to be safe
ALTER TABLE public.teams ADD COLUMN IF NOT EXISTS delay_days integer DEFAULT 0;
ALTER TABLE public.teams ADD COLUMN IF NOT EXISTS guru text;

-- Update any existing records to have default values for the new columns
UPDATE public.teams 
SET graduation_date = NULL 
WHERE graduation_date IS NULL;

-- Add comments to document the columns
COMMENT ON COLUMN public.teams.graduation_date IS 'Expected graduation date for the team';
COMMENT ON COLUMN public.teams.starting_date IS 'Date when the team started the program';
COMMENT ON COLUMN public.teams.delay_days IS 'Number of days the team is behind schedule';
COMMENT ON COLUMN public.teams.guru IS 'Assigned guru for the current sprint';
