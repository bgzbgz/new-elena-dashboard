-- SQL Query to rename columns in the teams table
-- This will rename the columns according to the new structure

-- Rename position to weekly_rank
ALTER TABLE public.teams RENAME COLUMN position TO weekly_rank;

-- Rename status to speed_score  
ALTER TABLE public.teams RENAME COLUMN status TO speed_score;

-- Rename weekly_score to quality_score
ALTER TABLE public.teams RENAME COLUMN weekly_score TO quality_score;

-- Rename speed to status
ALTER TABLE public.teams RENAME COLUMN speed TO status;

-- Update the indexes to reflect the new column names
DROP INDEX IF EXISTS idx_teams_status;
DROP INDEX IF EXISTS idx_teams_position;

CREATE INDEX idx_teams_speed_score ON public.teams(speed_score);
CREATE INDEX idx_teams_weekly_rank ON public.teams(weekly_rank);

-- Update any constraints or defaults if needed
-- Note: The data types and constraints remain the same, only the names change
