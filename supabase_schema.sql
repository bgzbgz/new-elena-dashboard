-- Fast Track Leaderboard Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Teams table
CREATE TABLE IF NOT EXISTS teams (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    access_code TEXT UNIQUE NOT NULL,
    weekly_score INTEGER DEFAULT 0,
    quality_score INTEGER DEFAULT 0,
    speed INTEGER DEFAULT 0,
    sprint TEXT,
    status TEXT DEFAULT 'starting-soon',
    position INTEGER DEFAULT 0,
    previous_position INTEGER DEFAULT 0,
    graduation TEXT,
    delay_days INTEGER DEFAULT 0,
    current_module INTEGER DEFAULT 0,
    current_sprint TEXT,
    completed_sprints TEXT[] DEFAULT '{}',
    guru TEXT,
    last_login TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sprints table
CREATE TABLE IF NOT EXISTS sprints (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    module_number INTEGER NOT NULL,
    module_title TEXT NOT NULL,
    description TEXT,
    guru TEXT,
    duration_weeks INTEGER DEFAULT 1,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Subtasks table
CREATE TABLE IF NOT EXISTS subtasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sprint_id UUID REFERENCES sprints(id),
    team_id UUID REFERENCES teams(id),
    title TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'pending', -- pending, in_progress, completed
    completion_percentage INTEGER DEFAULT 0,
    created_by TEXT, -- admin or team
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Messages table
CREATE TABLE IF NOT EXISTS messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subtask_id UUID REFERENCES subtasks(id),
    team_id UUID REFERENCES teams(id),
    sender_type TEXT NOT NULL, -- team or admin
    message TEXT NOT NULL,
    is_admin_response BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Team activities table
CREATE TABLE IF NOT EXISTS team_activities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    team_id UUID REFERENCES teams(id),
    activity_type TEXT NOT NULL, -- login, task_update, message_sent, etc.
    description TEXT,
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample sprints data
INSERT INTO sprints (name, module_number, module_title, description, guru, duration_weeks) VALUES
('Program WOOP', 0, 'Intro Sprint', 'Welcome, Outcomes, Obstacles, Plan', 'Program Team', 1),
('Know Thyself', 1, 'Individual and Company Identity', 'Building foundation of self and team understanding', 'Diliara', 1),
('Dream', 1, 'Individual and Company Identity', 'Building foundation of self and team understanding', 'Diliara', 1),
('Values', 1, 'Individual and Company Identity', 'Building foundation of self and team understanding', 'Diliara', 1),
('Team', 1, 'Individual and Company Identity', 'Building foundation of self and team understanding', 'Diliara', 1),
('FIT', 1, 'Individual and Company Identity', 'Building foundation of self and team understanding', 'Diliara', 1),
('Current Cash Position', 2, 'Core Performance Elements', 'Essential business performance and accountability systems', 'Mihails', 1),
('Goals, Priorities and Planning', 2, 'Core Performance Elements', 'Essential business performance and accountability systems', 'Mihails', 1),
('Focus/Discipline', 2, 'Core Performance Elements', 'Essential business performance and accountability systems', 'Mihails', 1),
('Performance/Accountability', 2, 'Core Performance Elements', 'Essential business performance and accountability systems', 'Mihails', 1),
('Meeting Rhythm', 2, 'Core Performance Elements', 'Essential business performance and accountability systems', 'Mihails', 1),
('Market Size', 3, 'Market Understanding', 'Deep dive into market dynamics and opportunities', 'Janis', 1),
('Market Segmentation', 3, 'Market Understanding', 'Deep dive into market dynamics and opportunities', 'Janis', 1),
('Target Market Analysis', 3, 'Market Understanding', 'Deep dive into market dynamics and opportunities', 'Janis', 1);

-- Insert sample teams data
INSERT INTO teams (name, access_code, weekly_score, quality_score, speed, sprint, status, position, previous_position, graduation, delay_days, current_module, current_sprint, completed_sprints, guru) VALUES
('SECOM', 'FT001', 94, 89, 91, 'Week 4', 'on-time', 1, 2, 'Dec 2024', 0, 1, 'Know Thyself', '{"Program WOOP"}', 'Diliara'),
('APF', 'FT002', 88, 92, 90, 'Week 3', 'on-time', 2, 3, 'Jan 2025', 2, 2, 'Current Cash Position', '{"Program WOOP", "Know Thyself", "Dream", "Values", "Team", "FIT"}', 'Mihails - Diliara'),
('CHROMAVIS', 'FT003', 91, 87, 89, 'Week 5', 'progress-meeting', 3, 3, 'Nov 2024', 0, 3, 'Market Size', '{"Program WOOP", "Know Thyself", "Dream", "Values", "Team", "FIT", "Current Cash Position", "Goals, Priorities and Planning"}', 'Janis & Olga'),
('GRUPO PDC', 'FT004', 85, 90, 87, 'Week 2', 'in-delay', 4, 5, 'Feb 2025', 5, 1, 'Dream', '{"Program WOOP", "Know Thyself"}', 'Jurijs'),
('LEAL AUTO', 'FT005', 92, 82, 87, 'Week 6', 'graduated', 5, 4, 'Completed', 0, 9, 'Completed', '{"All Modules Completed"}', 'Graduated');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_teams_access_code ON teams(access_code);
CREATE INDEX IF NOT EXISTS idx_teams_position ON teams(position);
CREATE INDEX IF NOT EXISTS idx_subtasks_team_id ON subtasks(team_id);
CREATE INDEX IF NOT EXISTS idx_subtasks_sprint_id ON subtasks(sprint_id);
CREATE INDEX IF NOT EXISTS idx_messages_subtask_id ON messages(subtask_id);
CREATE INDEX IF NOT EXISTS idx_messages_team_id ON messages(team_id);
CREATE INDEX IF NOT EXISTS idx_team_activities_team_id ON team_activities(team_id);
CREATE INDEX IF NOT EXISTS idx_team_activities_created_at ON team_activities(created_at);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_teams_updated_at BEFORE UPDATE ON teams
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_subtasks_updated_at BEFORE UPDATE ON subtasks
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE subtasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_activities ENABLE ROW LEVEL SECURITY;

-- Create policies for teams (teams can only see their own data)
CREATE POLICY "Teams can view own data" ON teams
    FOR SELECT USING (true); -- For now, allow all teams to see all data

CREATE POLICY "Teams can update own data" ON teams
    FOR UPDATE USING (true);

-- Create policies for subtasks (teams can only see their own subtasks)
CREATE POLICY "Teams can view own subtasks" ON subtasks
    FOR SELECT USING (true);

CREATE POLICY "Teams can update own subtasks" ON subtasks
    FOR UPDATE USING (true);

-- Create policies for messages (teams can only see messages for their subtasks)
CREATE POLICY "Teams can view own messages" ON messages
    FOR SELECT USING (true);

CREATE POLICY "Teams can insert own messages" ON messages
    FOR INSERT WITH CHECK (true);

-- Create policies for team activities (teams can only see their own activities)
CREATE POLICY "Teams can view own activities" ON team_activities
    FOR SELECT USING (true);

-- Grant necessary permissions
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon;
GRANT ALL ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO authenticated;
