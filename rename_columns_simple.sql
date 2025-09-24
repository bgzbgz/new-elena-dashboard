-- Simple SQL Query to rename columns in the teams table
-- Only rename the columns that actually need to be renamed

-- Rename position to weekly_rank
ALTER TABLE public.teams RENAME COLUMN position TO weekly_rank;

-- Rename status to speed_score  
ALTER TABLE public.teams RENAME COLUMN status TO speed_score;

-- Rename speed to status
ALTER TABLE public.teams RENAME COLUMN speed TO status;

-- Note: weekly_score and quality_score both exist, so we'll keep them as is
-- The JavaScript code will handle mapping weekly_score to quality_score

-- Update the indexes to reflect the new column names
DROP INDEX IF EXISTS idx_teams_status;
DROP INDEX IF EXISTS idx_teams_position;

CREATE INDEX idx_teams_speed_score ON public.teams(speed_score);
CREATE INDEX idx_teams_weekly_rank ON public.teams(weekly_rank);
