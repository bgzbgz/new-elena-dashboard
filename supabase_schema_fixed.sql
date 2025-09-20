-- Fixed Supabase Schema for Fast Track Leaderboard
-- This schema matches exactly what the app expects

-- Drop existing tables if they exist (be careful with this in production)
DROP TABLE IF EXISTS public.messages CASCADE;
DROP TABLE IF EXISTS public.subtasks CASCADE;
DROP TABLE IF EXISTS public.team_activities CASCADE;
DROP TABLE IF EXISTS public.teams CASCADE;
DROP TABLE IF EXISTS public.sprints CASCADE;
DROP TABLE IF EXISTS "public"."Leadership board" CASCADE;

-- Create teams table (exact match with app expectations)
CREATE TABLE public.teams (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    access_code text UNIQUE NOT NULL,
    weekly_score integer DEFAULT 0,
    quality_score integer DEFAULT 0,
    speed integer DEFAULT 0,
    sprint text,
    status text DEFAULT 'starting-soon',
    position integer DEFAULT 0,
    previous_position integer DEFAULT 0,
    graduation text,
    delay_days integer DEFAULT 0,
    current_module integer DEFAULT 0,
    current_sprint text,
    completed_sprints text[] DEFAULT '{}',
    guru text,
    last_login timestamp with time zone,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Create sprints table
CREATE TABLE public.sprints (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    module_number integer NOT NULL,
    module_title text NOT NULL,
    description text,
    guru text,
    duration_weeks integer DEFAULT 1,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now()
);

-- Create subtasks table
CREATE TABLE public.subtasks (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    sprint_id uuid REFERENCES public.sprints(id),
    team_id uuid REFERENCES public.teams(id),
    title text NOT NULL,
    description text,
    status text DEFAULT 'pending',
    completion_percentage integer DEFAULT 0,
    created_by text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Create messages table
CREATE TABLE public.messages (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    subtask_id uuid REFERENCES public.subtasks(id),
    team_id uuid REFERENCES public.teams(id),
    sender_type text NOT NULL,
    message text NOT NULL,
    is_admin_response boolean DEFAULT false,
    created_at timestamp with time zone DEFAULT now()
);

-- Create team_activities table
CREATE TABLE public.team_activities (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    team_id uuid REFERENCES public.teams(id),
    activity_type text NOT NULL,
    description text,
    metadata jsonb,
    created_at timestamp with time zone DEFAULT now()
);

-- Insert sample teams data
INSERT INTO public.teams (name, access_code, weekly_score, quality_score, speed, sprint, status, position, previous_position, graduation, delay_days, current_module, current_sprint, completed_sprints, guru) VALUES
('SECOM', 'FT001', 94, 89, 91, 'Week 4', 'on-time', 1, 2, 'Dec 2024', 0, 1, 'Know Thyself', '{"Program WOOP"}', 'Diliara'),
('APF', 'FT002', 88, 92, 90, 'Week 3', 'on-time', 2, 3, 'Jan 2025', 2, 2, 'Current Cash Position', '{"Program WOOP", "Know Thyself", "Dream", "Values", "Team", "FIT"}', 'Mihails - Diliara'),
('CHROMAVIS', 'FT003', 91, 87, 89, 'Week 5', 'progress-meeting', 3, 3, 'Nov 2024', 0, 3, 'Market Size', '{"Program WOOP", "Know Thyself", "Dream", "Values", "Team", "FIT", "Current Cash Position", "Goals, Priorities and Planning"}', 'Janis & Olga'),
('GRUPO PDC', 'FT004', 85, 90, 87, 'Week 2', 'in-delay', 4, 5, 'Feb 2025', 5, 1, 'Dream', '{"Program WOOP", "Know Thyself"}', 'Jurijs'),
('LEAL AUTO', 'FT005', 92, 82, 87, 'Week 6', 'graduated', 5, 4, 'Completed', 0, 9, 'Completed', '{"All Modules Completed"}', 'Graduated');

-- Insert sample sprints data
INSERT INTO public.sprints (name, module_number, module_title, description, guru, duration_weeks) VALUES
('Program WOOP', 0, 'Intro Sprint', 'Welcome, Outcomes, Obstacles, Plan', 'Program Team', 1),
('Know Thyself', 1, 'Individual and Company Identity', 'Building foundation of self and team understanding', 'Diliara', 1),
('Dream', 1, 'Individual and Company Identity', 'Building foundation of self and team understanding', 'Jurijs', 1),
('Values', 1, 'Individual and Company Identity', 'Building foundation of self and team understanding', 'Jurijs', 1),
('Team', 1, 'Individual and Company Identity', 'Building foundation of self and team understanding', 'Diliara', 1),
('FIT', 1, 'Individual and Company Identity', 'Building foundation of self and team understanding', 'Diliara', 1),
('Current Cash Position', 2, 'Core Performance Elements', 'Essential business performance and accountability systems', 'Mihails', 1),
('Goals, Priorities and Planning', 2, 'Core Performance Elements', 'Essential business performance and accountability systems', 'Diliara', 1),
('Focus/Discipline', 2, 'Core Performance Elements', 'Essential business performance and accountability systems', 'Mihails', 1),
('Performance/Accountability', 2, 'Core Performance Elements', 'Essential business performance and accountability systems', 'Diliara', 1),
('Meeting Rhythm', 2, 'Core Performance Elements', 'Essential business performance and accountability systems', 'Mihails', 1),
('Market Size', 3, 'Market Understanding', 'Deep dive into market dynamics and opportunities', 'Janis', 1),
('Market Segmentation', 3, 'Market Understanding', 'Deep dive into market dynamics and opportunities', 'Olga', 1),
('Target Market Analysis', 3, 'Market Understanding', 'Deep dive into market dynamics and opportunities', 'Janis', 1),
('Target Segment Deep Dive', 4, 'Strategy Development', 'Crafting and testing your strategic approach', 'Strategy Team', 1),
('Value Proposition', 4, 'Strategy Development', 'Crafting and testing your strategic approach', 'Strategy Team', 1),
('VP Testing', 4, 'Strategy Development', 'Crafting and testing your strategic approach', 'Strategy Team', 1),
('Product Development', 5, 'Strategy Execution', 'Bringing strategy to life through execution', 'Execution Team', 1),
('Pricing Strategy', 5, 'Strategy Execution', 'Bringing strategy to life through execution', 'Execution Team', 1),
('Brand/Marketing', 5, 'Strategy Execution', 'Bringing strategy to life through execution', 'Execution Team', 1),
('Route to Market', 5, 'Strategy Execution', 'Bringing strategy to life through execution', 'Execution Team', 1),
('Core Activities', 6, 'Organizational Structure', 'Building efficient organizational systems', 'Operations Team', 1),
('Process Design', 6, 'Organizational Structure', 'Building efficient organizational systems', 'Operations Team', 1),
('Team Analysis', 6, 'Organizational Structure', 'Building efficient organizational systems', 'Operations Team', 1),
('Personal Development Plan', 7, 'People & Leadership', 'Developing leadership and team capabilities', 'Leadership Team', 1),
('Recruitment Strategy', 7, 'People & Leadership', 'Developing leadership and team capabilities', 'Leadership Team', 1),
('Agile Teams', 7, 'People & Leadership', 'Developing leadership and team capabilities', 'Leadership Team', 1),
('Process Digitalization', 8, 'Tech & AI Implementation', 'Leveraging technology and AI for competitive advantage', 'Tech Team', 1),
('AI Options Assessment', 8, 'Tech & AI Implementation', 'Leveraging technology and AI for competitive advantage', 'Tech Team', 1),
('Implementation Plan', 8, 'Tech & AI Implementation', 'Leveraging technology and AI for competitive advantage', 'Tech Team', 1);

-- Disable RLS for all tables (for testing)
ALTER TABLE public.teams DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.sprints DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.subtasks DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_activities DISABLE ROW LEVEL SECURITY;
