-- Complete Supabase Schema for Fast Track Leaderboard with Associate Features
-- This schema includes all fields needed for the full application functionality

-- Drop existing tables if they exist (be careful with this in production)
DROP TABLE IF EXISTS public.messages CASCADE;
DROP TABLE IF EXISTS public.subtasks CASCADE;
DROP TABLE IF EXISTS public.team_activities CASCADE;
DROP TABLE IF EXISTS public.associate_activities CASCADE;
DROP TABLE IF EXISTS public.fast_track_tools CASCADE;
DROP TABLE IF EXISTS public.teams CASCADE;
DROP TABLE IF EXISTS public.sprints CASCADE;
DROP TABLE IF EXISTS public.associates CASCADE;
DROP TABLE IF EXISTS "public"."Leadership board" CASCADE;

-- Create associates table
CREATE TABLE public.associates (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    access_code text UNIQUE NOT NULL,
    email text,
    phone text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Create teams table with all required fields
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
    updated_at timestamp with time zone DEFAULT now(),
    
    -- Associate relationship
    associate_id uuid REFERENCES public.associates(id),
    
    -- Client profile fields
    country text,
    country_code text,
    ceo_name text,
    main_contact text,
    website text,
    industry_type text,
    company_size text,
    priority_level text,
    notes text
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

-- Create associate_activities table
CREATE TABLE public.associate_activities (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    associate_id uuid REFERENCES public.associates(id),
    activity_type text NOT NULL,
    description text,
    metadata jsonb,
    created_at timestamp with time zone DEFAULT now()
);

-- Create fast_track_tools table
CREATE TABLE public.fast_track_tools (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    team_id uuid REFERENCES public.teams(id),
    sprint_name text NOT NULL,
    module_number integer,
    tool_instructions text NOT NULL,
    created_by uuid REFERENCES public.associates(id),
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Insert sample associates data
INSERT INTO public.associates (name, access_code, email) VALUES
('Elena', 'ELENA001', 'elena@fasttrack.com'),
('Ana-Maria', 'ANI001', 'ana-maria@fasttrack.com'),
('Vasil', 'VASIL001', 'vasil@fasttrack.com');

-- Insert sample teams data with associate relationships
INSERT INTO public.teams (name, access_code, weekly_score, quality_score, speed, sprint, status, position, previous_position, graduation, delay_days, current_module, current_sprint, completed_sprints, guru, associate_id, country, country_code, ceo_name, main_contact, website, industry_type, company_size, priority_level, notes) VALUES
('SECOM', 'FT001', 94, 89, 91, 'Week 4', 'graduated', 1, 2, 'Dec 2024', 0, 9, 'Completed', '{"All Modules Completed"}', 'Elena', (SELECT id FROM public.associates WHERE name = 'Elena'), 'Romania', 'RO', 'Not specified', 'Not specified', 'Not specified', 'Technology', 'Medium (50-200 employees)', 'High', 'Key client with excellent performance'),
('APF', 'FT002', 88, 92, 90, 'Week 3', 'on-time', 2, 3, 'Jan 2025', 2, 2, 'Goals, Priorities and Planning', '{"Program WOOP", "Know Thyself", "Dream", "Values", "Team", "FIT", "Current Cash Position"}', 'Elena', (SELECT id FROM public.associates WHERE name = 'Elena'), 'Latvia', 'LV', 'Not specified', 'Not specified', 'Not specified', 'Not specified', 'Small (1-50 employees)', 'Medium', 'Strong performance in real estate sector'),
('CHROMAVIS', 'FT003', 91, 87, 89, 'Week 5', 'on-time', 3, 3, 'Nov 2024', 0, 2, 'Goals, Priorities and Planning', '{"Program WOOP", "Know Thyself", "Dream", "Values", "Team", "FIT", "Current Cash Position"}', 'Elena', (SELECT id FROM public.associates WHERE name = 'Elena'), 'Italy', 'IT', 'Not specified', 'Not specified', 'Not specified', 'Not specified', 'Medium (50-200 employees)', 'High', 'Automotive group with strong market presence'),
('LIFECARE', 'FT004', 93, 88, 90, 'Week 4', 'graduated', 4, 5, 'Dec 2024', 0, 9, 'Completed', '{"All Modules Completed"}', 'Ana-Maria', (SELECT id FROM public.associates WHERE name = 'Ana-Maria'), 'UAE', 'AE', 'Not specified', 'Not specified', 'Not specified', 'Healthcare', 'Large (200+ employees)', 'High', 'Healthcare leader in UAE'),
('Capital Alliance', 'FT005', 87, 85, 86, 'Week 3', 'on-time', 5, 4, 'Oct 2026', 0, 2, 'Goals, Priorities and Planning', '{"Program WOOP", "Know Thyself", "Dream", "Values", "Team", "FIT", "Current Cash Position"}', 'Vasil', (SELECT id FROM public.associates WHERE name = 'Vasil'), 'Sri Lanka', 'LK', 'Not specified', 'Not specified', 'Not specified', 'Not specified', 'Medium (50-200 employees)', 'Medium', 'Financial services company');

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
('Focus, Discipline & Productivity', 2, 'Core Performance Elements', 'Essential business performance and accountability systems', 'Mihails', 1),
('Performance & Accountability', 2, 'Core Performance Elements', 'Essential business performance and accountability systems', 'Diliara', 1),
('Meeting Rhythm', 2, 'Core Performance Elements', 'Essential business performance and accountability systems', 'Mihails', 1),
('Market Size', 3, 'Strategy - Understanding the Market', 'Deep dive into market dynamics and opportunities', 'Janis', 1),
('Segmentation & Target Market', 3, 'Strategy - Understanding the Market', 'Deep dive into market dynamics and opportunities', 'Olga', 1),
('Target Segment Deep Dive - Pains, Needs, Gains', 4, 'Strategy - Strategy Development', 'Crafting and testing your strategic approach', 'Strategy Team', 2),
('Value Proposition', 4, 'Strategy - Strategy Development', 'Crafting and testing your strategic approach', 'Strategy Team', 1),
('Value Proposition Testing', 4, 'Strategy - Strategy Development', 'Crafting and testing your strategic approach', 'Strategy Team', 2),
('Product Development', 5, 'Strategy - Execution', 'Bringing strategy to life through execution', 'Execution Team', 2),
('Strategy Driven Pricing', 5, 'Strategy - Execution', 'Bringing strategy to life through execution', 'Execution Team', 1),
('Brand and Marketing', 5, 'Strategy - Execution', 'Bringing strategy to life through execution', 'Execution Team', 1),
('Route to Market - Market Penetration', 5, 'Strategy - Execution', 'Bringing strategy to life through execution', 'Execution Team', 1),
('Define Core Activities', 6, 'Organization & People - Organisational Structure', 'Building efficient organizational systems', 'Operations Team', 1),
('Define core processes, Decisions, and Capabilities', 6, 'Organization & People - Organisational Structure', 'Building efficient organizational systems', 'Operations Team', 1),
('FIT & ABC Analysis', 6, 'Organization & People - Organisational Structure', 'Building efficient organizational systems', 'Operations Team', 1),
('Organizational redesign & Personal Development Plan', 7, 'Organization & People - People and Leadership', 'Developing leadership and team capabilities', 'Leadership Team', 1),
('Employer Branding and Recruitment Strategy', 7, 'Organization & People - People and Leadership', 'Developing leadership and team capabilities', 'Leadership Team', 1),
('Set Agile Teams', 7, 'Organization & People - People and Leadership', 'Developing leadership and team capabilities', 'Leadership Team', 1),
('Potential Tech and AI-Low hanging options', 8, 'Organization & People - Apply Aggressively Tech and AI', 'Leveraging technology and AI for competitive advantage', 'Tech Team', 1),
('Top 3 Decisions and Top 3 Processes to Digitalize', 8, 'Organization & People - Apply Aggressively Tech and AI', 'Leveraging technology and AI for competitive advantage', 'Tech Team', 1),
('Mastering Departmental AI Transformation', 8, 'Organization & People - Apply Aggressively Tech and AI', 'Leveraging technology and AI for competitive advantage', 'Tech Team', 1),
('Program Overview & Next 12 months Plan', 9, 'Closing Sprint', 'Program overview and next steps', 'Program Team', 1);

-- Disable RLS for all tables (for testing)
ALTER TABLE public.associates DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.teams DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.sprints DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.subtasks DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_activities DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.associate_activities DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.fast_track_tools DISABLE ROW LEVEL SECURITY;

-- Create indexes for better performance
CREATE INDEX idx_teams_associate_id ON public.teams(associate_id);
CREATE INDEX idx_teams_status ON public.teams(status);
CREATE INDEX idx_teams_position ON public.teams(position);
CREATE INDEX idx_team_activities_team_id ON public.team_activities(team_id);
CREATE INDEX idx_team_activities_created_at ON public.team_activities(created_at);
CREATE INDEX idx_associate_activities_associate_id ON public.associate_activities(associate_id);
CREATE INDEX idx_fast_track_tools_team_id ON public.fast_track_tools(team_id);
CREATE INDEX idx_subtasks_team_id ON public.subtasks(team_id);
CREATE INDEX idx_messages_team_id ON public.messages(team_id);
