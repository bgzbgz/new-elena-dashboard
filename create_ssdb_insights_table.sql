-- Create SSDB (Start, Stop, Do Better) insights table
CREATE TABLE public.ssdb_insights (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    team_id uuid REFERENCES public.teams(id) ON DELETE CASCADE,
    start_insight text,
    stop_insight text,
    do_better_insight text,
    created_by uuid REFERENCES public.associates(id),
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Add indexes for better performance
CREATE INDEX idx_ssdb_insights_team_id ON public.ssdb_insights(team_id);
CREATE INDEX idx_ssdb_insights_created_by ON public.ssdb_insights(created_by);

-- Add RLS (Row Level Security) policies
ALTER TABLE public.ssdb_insights ENABLE ROW LEVEL SECURITY;

-- Policy to allow associates to read all SSDB insights
CREATE POLICY "Associates can read all SSDB insights" ON public.ssdb_insights
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.associates 
            WHERE id = auth.uid()::uuid
        )
    );

-- Policy to allow associates to insert SSDB insights
CREATE POLICY "Associates can insert SSDB insights" ON public.ssdb_insights
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.associates 
            WHERE id = auth.uid()::uuid
        )
    );

-- Policy to allow associates to update SSDB insights they created
CREATE POLICY "Associates can update their SSDB insights" ON public.ssdb_insights
    FOR UPDATE USING (
        created_by = auth.uid()::uuid
    );

-- Policy to allow associates to delete SSDB insights they created
CREATE POLICY "Associates can delete their SSDB insights" ON public.ssdb_insights
    FOR DELETE USING (
        created_by = auth.uid()::uuid
    );

-- Insert sample data for testing
INSERT INTO public.ssdb_insights (team_id, start_insight, stop_insight, do_better_insight, created_by) VALUES
(
    (SELECT id FROM public.teams WHERE name = 'LEAL GROUP (AUTO)' LIMIT 1),
    'Focus on customer feedback collection and analysis',
    'Stop relying solely on internal assumptions about customer needs',
    'Implement weekly customer satisfaction surveys and act on feedback',
    (SELECT id FROM public.associates WHERE name = 'Elena' LIMIT 1)
),
(
    (SELECT id FROM public.teams WHERE name = 'MAX CITY' LIMIT 1),
    'Establish clear communication protocols between departments',
    'Stop having meetings without clear agendas and outcomes',
    'Create a structured weekly team alignment process',
    (SELECT id FROM public.associates WHERE name = 'Elena' LIMIT 1)
);
