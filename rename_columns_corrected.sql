-- Corrected SQL Query to rename columns in the teams table
-- Based on the actual current schema

-- First, let's check what columns currently exist
-- Current columns: position, status, weekly_score, quality_score, speed

-- Rename position to weekly_rank
ALTER TABLE public.teams RENAME COLUMN position TO weekly_rank;

-- Rename status to speed_score  
ALTER TABLE public.teams RENAME COLUMN status TO speed_score;

-- Rename weekly_score to quality_score (but quality_score already exists!)
-- We need to handle this differently - let's rename the existing quality_score first
ALTER TABLE public.teams RENAME COLUMN quality_score TO old_quality_score;

-- Now rename weekly_score to quality_score
ALTER TABLE public.teams RENAME COLUMN weekly_score TO quality_score;

-- Rename speed to status
ALTER TABLE public.teams RENAME COLUMN speed TO status;

-- Now we can drop the old_quality_score column since it's redundant
ALTER TABLE public.teams DROP COLUMN old_quality_score;

-- Update the indexes to reflect the new column names
DROP INDEX IF EXISTS idx_teams_status;
DROP INDEX IF EXISTS idx_teams_position;

CREATE INDEX idx_teams_speed_score ON public.teams(speed_score);
CREATE INDEX idx_teams_weekly_rank ON public.teams(weekly_rank);
