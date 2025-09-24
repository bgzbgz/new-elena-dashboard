-- Update Capital Alliance client information
-- This script updates the client details to match the current status

UPDATE public.teams 
SET 
    current_sprint = 'Know Thyself',
    current_module = 1,
    ceo_name = 'Kanishke Mannakkara',
    notes = 'GURUs per module:
Module 1 – Deshan
Module 2 – Udeeshan + Sachin
Module 3 – Kanishke
Module 4 – Sanura
Module 5 – Sharmali + Sanura + Sidantha
Module 6 – Anushi
Module 7 – Udeeshan + Sidantha
Module 8 – Tharindra'
WHERE name = 'Capital Alliance';

-- Verify the update
SELECT name, current_sprint, current_module, ceo_name, notes 
FROM public.teams 
WHERE name = 'Capital Alliance';
