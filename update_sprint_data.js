// Script to update sprint data in Supabase database
// This will populate the database with proper sprint values

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://xkapxnhwubhfbatekqhz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrYXB4bmh3dWJoZmJhdGVrcWh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzNDE1MTEsImV4cCI6MjA3MzkxNzUxMX0.8GWh7P8ENNZqbH4P0ho6tVspG9tkonS559LoB0t0yjQ';

const supabase = createClient(supabaseUrl, supabaseKey);

// Sprint data mapping based on team names
const sprintData = {
    'Hemas': { sprint: 'Week 4', status: 'graduated' },
    'CAL Capital Alliance': { sprint: 'Week 3', status: 'on-time' },
    'PHARMACIE NOUVELLE': { sprint: 'Week 2', status: 'on-time' },
    'Capital Alliance': { sprint: 'Week 1', status: 'on-time' },
    'LEAL GROUP (AUTO)': { sprint: 'Week 5', status: 'on-time' },
    'MAX CITY': { sprint: 'Week 1', status: 'on-time' }
};

async function updateSprintData() {
    try {
        console.log('Updating sprint data in database...');
        
        for (const [teamName, data] of Object.entries(sprintData)) {
            console.log(`Updating ${teamName}: sprint="${data.sprint}", status="${data.status}"`);
            
            const { error } = await supabase
                .from('teams')
                .update({ 
                    sprint: data.sprint,
                    speed_score: data.status
                })
                .eq('name', teamName);
            
            if (error) {
                console.error(`Error updating ${teamName}:`, error);
            } else {
                console.log(`✅ Updated ${teamName} successfully`);
            }
        }
        
        console.log('Sprint data update completed!');
    } catch (error) {
        console.error('Error updating sprint data:', error);
    }
}

updateSprintData();
