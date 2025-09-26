// Fast Track Team Leaderboard Application - Supabase Integration
class FastTrackApp {
    constructor() {
        // Initialize Supabase
        this.supabaseUrl = 'https://xkapxnhwubhfbatekqhz.supabase.co';
        this.supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrYXB4bmh3dWJoZmJhdGVrcWh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzNDE1MTEsImV4cCI6MjA3MzkxNzUxMX0.8GWh7P8ENNZqbH4P0ho6tVspG9tkonS559LoB0t0yjQ';
        this.corsProxyUrl = 'https://xkapxnhwubhfbatekqhz.supabase.co/functions/v1/cors-proxy';
        this.supabase = supabase.createClient(this.supabaseUrl, this.supabaseKey);
        
        // Enhanced team data with detailed sprint information - Based on roadmap analysis
        this.teams = [
            // Elena's Clients (10) - Based on roadmap analysis
            {
                name: "SECOM",
                weeklyScore: 94,
                qualityScore: 89,
                speed: 91.5,
                sprint: "Week 4",
                status: "graduated",
                position: 1,
                previousPosition: 2,
                accessCode: "FT001",
                graduation: "Dec 2024",
                delay: 0,
                currentModule: 9,
                currentSprint: "Completed",
                completedSprints: ["All Modules Completed"],
                guru: "Elena",
                // Enhanced client profile fields
                industryType: "Technology",
                companySize: "Medium (50-200 employees)",
                priorityLevel: "High",
                notes: "Key client with excellent performance",
                fastTrackInstructions: []
            },
            {
                name: "MAX CITY",
                weeklyScore: 88,
                qualityScore: 92,
                speed: 90,
                sprint: "Week 3", 
                status: "on-time",
                position: 2,
                previousPosition: 3,
                accessCode: "FT002",
                graduation: "Nov 2025",
                delay: 0,
                currentModule: 2,
                currentSprint: "Goals, Priorities and Planning",
                completedSprints: ["Program WOOP", "Know Thyself", "Dream", "Values", "Team", "FIT", "Current Cash Position"],
                guru: "Elena",
                // Enhanced client profile fields
                industryType: "Real Estate",
                companySize: "Large (200+ employees)",
                priorityLevel: "High",
                notes: "Strong performance in real estate sector",
                fastTrackInstructions: []
            },
            {
                name: "PHARMACIE NOUVELLE",
                weeklyScore: 85,
                qualityScore: 90,
                speed: 87.5,
                sprint: "Week 2",
                status: "on-time", 
                position: 3,
                previousPosition: 5,
                accessCode: "FT003",
                graduation: "Feb 2025",
                delay: 0,
                currentModule: 2,
                currentSprint: "Goals, Priorities and Planning",
                completedSprints: ["Program WOOP", "Know Thyself", "Dream", "Values", "Team", "FIT", "Current Cash Position"],
                guru: "Elena",
                // Enhanced client profile fields
                industryType: "Healthcare",
                companySize: "Medium (50-200 employees)",
                priorityLevel: "Medium",
                notes: "Pharmacy chain with good potential",
                fastTrackInstructions: []
            },
            {
                name: "LEAL GROUP (AUTO)",
                weeklyScore: 82,
                qualityScore: 85,
                speed: 83.5,
                sprint: "Week 1",
                status: "on-time", 
                position: 4,
                previousPosition: 4,
                accessCode: "FT004",
                graduation: "Mar 2025",
                delay: 0,
                currentModule: 2,
                currentSprint: "Goals, Priorities and Planning",
                completedSprints: ["Program WOOP", "Know Thyself", "Dream", "Values", "Team", "FIT", "Current Cash Position"],
                guru: "Elena",
                // Enhanced client profile fields
                industryType: "Automotive",
                companySize: "Large (200+ employees)",
                priorityLevel: "High",
                notes: "Automotive group with strong market presence",
                fastTrackInstructions: []
            },
            {
                name: "APF",
                weeklyScore: 91,
                qualityScore: 87, 
                speed: 89,
                sprint: "Week 5",
                status: "on-time",
                position: 5,
                previousPosition: 3,
                accessCode: "FT005",
                graduation: "Mar 2025",
                delay: 0,
                currentModule: 2,
                currentSprint: "Goals, Priorities and Planning",
                completedSprints: ["Program WOOP", "Know Thyself", "Dream", "Values", "Team", "FIT", "Current Cash Position"],
                guru: "Elena"
            },
            {
                name: "CFL",
                weeklyScore: 79,
                qualityScore: 83,
                speed: 81,
                sprint: "Week 1",
                status: "on-time", 
                position: 6,
                previousPosition: 6,
                accessCode: "FT006",
                graduation: "Jan 2026",
                delay: 0,
                currentModule: 2,
                currentSprint: "Goals, Priorities and Planning",
                completedSprints: ["Program WOOP", "Know Thyself", "Dream", "Values", "Team", "FIT", "Current Cash Position"],
                guru: "Elena"
            },
            {
                name: "VIZULO",
                weeklyScore: 76,
                qualityScore: 80,
                speed: 78,
                sprint: "Week 0",
                status: "starting-soon", 
                position: 7,
                previousPosition: 7,
                accessCode: "FT007",
                graduation: "May 2025",
                delay: 0,
                currentModule: 0,
                currentSprint: "Program WOOP",
                completedSprints: [],
                guru: "Elena"
            },
            {
                name: "GRUPO PDC",
                weeklyScore: 74,
                qualityScore: 78,
                speed: 76,
                sprint: "Week 0",
                status: "starting-soon", 
                position: 8,
                previousPosition: 8,
                accessCode: "FT008",
                graduation: "Jun 2025",
                delay: 0,
                currentModule: 0,
                currentSprint: "Program WOOP",
                completedSprints: [],
                guru: "Elena"
            },
            {
                name: "Chromavis",
                weeklyScore: 72,
                qualityScore: 76,
                speed: 74,
                sprint: "Week 0",
                status: "starting-soon", 
                position: 9,
                previousPosition: 9,
                accessCode: "FT009",
                graduation: "Aug 2026",
                delay: 0,
                currentModule: 0,
                currentSprint: "Program WOOP",
                completedSprints: [],
                guru: "Elena"
            },
            {
                name: "Industra Bank",
                weeklyScore: 70,
                qualityScore: 74,
                speed: 72,
                sprint: "Week 0",
                status: "starting-soon", 
                position: 10,
                previousPosition: 10,
                accessCode: "FT010",
                graduation: "Aug 2025",
                delay: 0,
                currentModule: 0,
                currentSprint: "Program WOOP",
                completedSprints: [],
                guru: "Elena"
            },
            // Ana-Maria's Clients (10) - Based on roadmap analysis
            {
                name: "LIFECARE",
                weeklyScore: 93,
                qualityScore: 88,
                speed: 90.5,
                sprint: "Week 4",
                status: "graduated",
                position: 11,
                previousPosition: 11,
                accessCode: "FT011",
                graduation: "Dec 2024",
                delay: 0,
                currentModule: 9,
                currentSprint: "Completed",
                completedSprints: ["All Modules Completed"],
                guru: "Ana-Maria"
            },
            {
                name: "Plazteca",
                weeklyScore: 68,
                qualityScore: 72,
                speed: 70,
                sprint: "Week 0",
                status: "starting-soon", 
                position: 12,
                previousPosition: 12,
                accessCode: "FT012",
                graduation: "Sep 2025",
                delay: 0,
                currentModule: 0,
                currentSprint: "Program WOOP",
                completedSprints: [],
                guru: "Ana-Maria"
            },
            {
                name: "Rockland",
                weeklyScore: 86,
                qualityScore: 84,
                speed: 85,
                sprint: "Week 3",
                status: "on-time", 
                position: 13,
                previousPosition: 13,
                accessCode: "FT013",
                graduation: "Oct 2026",
                delay: 0,
                currentModule: 2,
                currentSprint: "Goals, Priorities and Planning",
                completedSprints: ["Program WOOP", "Know Thyself", "Dream", "Values", "Team", "FIT", "Current Cash Position"],
                guru: "Ana-Maria"
            },
            {
                name: "Hemas",
                weeklyScore: 84,
                qualityScore: 82,
                speed: 83,
                sprint: "Week 3",
                status: "on-time", 
                position: 14,
                previousPosition: 14,
                accessCode: "FT014",
                graduation: "Oct 2026",
                delay: 0,
                currentModule: 2,
                currentSprint: "Goals, Priorities and Planning",
                completedSprints: ["Program WOOP", "Know Thyself", "Dream", "Values", "Team", "FIT", "Current Cash Position"],
                guru: "Ana-Maria"
            },
            {
                name: "ENSON",
                weeklyScore: 82,
                qualityScore: 80,
                speed: 81,
                sprint: "Week 3",
                status: "on-time", 
                position: 15,
                previousPosition: 15,
                accessCode: "FT015",
                graduation: "Oct 2026",
                delay: 0,
                currentModule: 2,
                currentSprint: "Goals, Priorities and Planning",
                completedSprints: ["Program WOOP", "Know Thyself", "Dream", "Values", "Team", "FIT", "Current Cash Position"],
                guru: "Ana-Maria"
            },
            {
                name: "PGO",
                weeklyScore: 80,
                qualityScore: 78,
                speed: 79,
                sprint: "Week 3",
                status: "on-time", 
                position: 16,
                previousPosition: 16,
                accessCode: "FT016",
                graduation: "Oct 2026",
                delay: 0,
                currentModule: 2,
                currentSprint: "Goals, Priorities and Planning",
                completedSprints: ["Program WOOP", "Know Thyself", "Dream", "Values", "Team", "FIT", "Current Cash Position"],
                guru: "Ana-Maria"
            },
            {
                name: "FORMIKA",
                weeklyScore: 78,
                qualityScore: 76,
                speed: 77,
                sprint: "Week 3",
                status: "on-time", 
                position: 17,
                previousPosition: 17,
                accessCode: "FT017",
                graduation: "Oct 2026",
                delay: 0,
                currentModule: 2,
                currentSprint: "Goals, Priorities and Planning",
                completedSprints: ["Program WOOP", "Know Thyself", "Dream", "Values", "Team", "FIT", "Current Cash Position"],
                guru: "Ana-Maria"
            },
            {
                name: "AMEX",
                weeklyScore: 92,
                qualityScore: 90,
                speed: 91,
                sprint: "Week 5",
                status: "graduated",
                position: 18,
                previousPosition: 18,
                accessCode: "FT018",
                graduation: "Completed",
                delay: 0,
                currentModule: 9,
                currentSprint: "Completed",
                completedSprints: ["All Modules Completed"],
                guru: "Ana-Maria"
            },
            {
                name: "MOBO",
                weeklyScore: 90,
                qualityScore: 88,
                speed: 89,
                sprint: "Week 5",
                status: "graduated",
                position: 19,
                previousPosition: 19,
                accessCode: "FT019",
                graduation: "Completed",
                delay: 0,
                currentModule: 9,
                currentSprint: "Completed",
                completedSprints: ["All Modules Completed"],
                guru: "Ana-Maria"
            },
            {
                name: "CRAFT",
                weeklyScore: 88,
                qualityScore: 86,
                speed: 87,
                sprint: "Week 5",
                status: "graduated",
                position: 20,
                previousPosition: 20,
                accessCode: "FT020",
                graduation: "Completed",
                delay: 0,
                currentModule: 9,
                currentSprint: "Completed",
                completedSprints: ["All Modules Completed"],
                guru: "Ana-Maria"
            },
            // Vasil's Clients (1) - Based on roadmap analysis
            {
                name: "Capital Alliance",
                weeklyScore: 87,
                qualityScore: 85,
                speed: 86,
                sprint: "Know Thyself",
                status: "on-time", 
                position: 21,
                previousPosition: 21,
                accessCode: "FT021",
                graduation: "Oct 2026",
                delay: 0,
                currentModule: 1,
                currentSprint: "Know Thyself",
                completedSprints: ["Program WOOP"],
                guru: "Vasil",
                ceoName: "Kanishke Mannakkara",
                notes: "GURUs per module:\nModule 1 – Deshan\nModule 2 – Udeeshan + Sachin\nModule 3 – Kanishke\nModule 4 – Sanura\nModule 5 – Sharmali + Sanura + Sidantha\nModule 6 – Anushi\nModule 7 – Udeeshan + Sidantha\nModule 8 – Tharindra"
            }
        ];

        // Comprehensive module structure with detailed sprints
        this.moduleStructure = [
            {
                number: 0,
                title: "Intro Sprint",
                description: "Program WOOP - Welcome, Outcomes, Obstacles, Plan",
                sprints: ["Program WOOP: Establish a Clear Mission and Objectives for the Entire Program"],
                gurus: ["Program Team"],
                duration: "1 week"
            },
            {
                number: 1,
                title: "Individual and Company Identity",
                description: "Building foundation of self and team understanding",
                sprints: [
                    "Know Thyself",
                    "Dream", 
                    "Values",
                    "Team",
                    "FIT"
                ],
                gurus: ["Diliara", "Jurijs"],
                duration: "5 weeks"
            },
            {
                number: 2,
                title: "Core Performance Elements",
                description: "Essential business performance and accountability systems",
                sprints: [
                    "Current Cash Position",
                    "[optional] Creating Energy in the Body and Mind",
                    "Goals, Priorities and Planning",
                    "Focus, Discipline & Productivity",
                    "Performance & Accountability",
                    "Meeting Rhythm"
                ],
                gurus: ["Mihails", "Diliara"],
                duration: "6 weeks"
            },
            {
                number: 3,
                title: "Strategy - Understanding the Market",
                description: "Deep dive into market dynamics and opportunities",
                sprints: [
                    "Market Size",
                    "Segmentation & Target Market"
                ],
                gurus: ["Janis", "Olga"],
                duration: "2 weeks"
            },
            {
                number: 4,
                title: "Strategy - Strategy Development",
                description: "Crafting and testing your strategic approach",
                sprints: [
                    "Target Segment Deep Dive - Pains, Needs, Gains (+ 1 week for client interviews)",
                    "Value Proposition",
                    "Value Proposition Testing (+ 1 week for client interviews)"
                ],
                gurus: ["Strategy Team"],
                duration: "5 weeks"
            },
            {
                number: 5,
                title: "Strategy - Execution",
                description: "Bringing strategy to life through execution",
                sprints: [
                    "Product Development (+1 week for client testing)",
                    "Strategy Driven Pricing",
                    "Brand and Marketing",
                    "[optional] Customer Service Strategy and Execution",
                    "Route to Market - Market Penetration"
                ],
                gurus: ["Execution Team"],
                duration: "5 weeks"
            },
            {
                number: 6,
                title: "Organization & People - Organisational Structure",
                description: "Building efficient organizational systems",
                sprints: [
                    "Define Core Activities",
                    "Define core processes, Decisions, and Capabilities",
                    "FIT & ABC Analysis (Current team analyses and change)"
                ],
                gurus: ["Operations Team"],
                duration: "3 weeks"
            },
            {
                number: 7,
                title: "Organization & People - People and Leadership",
                description: "Developing leadership and team capabilities",
                sprints: [
                    "[optional] Organizational redesign & Personal Development Plan for A-Players",
                    "Employer Branding and Recruitment Strategy",
                    "[optional] Set Agile Teams"
                ],
                gurus: ["Leadership Team"],
                duration: "3 weeks"
            },
            {
                number: 8,
                title: "Organization & People - Apply Aggressively Tech and AI",
                description: "Leveraging technology and AI for competitive advantage",
                sprints: [
                    "Potential Tech and AI-Low hanging options",
                    "Top 3 Decisions and Top 3 Processes to Digitalize",
                    "Mastering Departmental AI Transformation"
                ],
                gurus: ["Tech Team"],
                duration: "3 weeks"
            },
            {
                number: 9,
                title: "Closing Module",
                description: "Program overview and next steps",
                sprints: [
                    "Program Overview & Next 12 months Plan"
                ],
                gurus: ["Program Team"],
                duration: "1 week"
            }
        ];

        // Associate management
        this.associates = [];
        this.currentAssociate = null;
        this.isAssociate = false;
        this.isTeam = false;
        
        // Restore associate session from localStorage
        this.restoreAssociateSession();

        this.adminCodes = ['ADMIN001', 'FASTTRACK_ADMIN', 'FT_SUPER_ADMIN'];
        this.currentUser = null;
        this.isAdmin = false;
        this.selectedTeamForModal = null;
        this.subtasks = [];
        this.messages = [];
        this.newTeamsJoiningCount = 0; // Admin-editable count for new teams joining
        this.performanceChart = null; // Chart.js instance
    }

    // Database initialization and schema setup
    async initializeDatabase() {
        try {
            console.log('Testing Supabase connection...');
            console.log('Supabase URL:', this.supabaseUrl);
            console.log('Supabase Key (first 20 chars):', this.supabaseKey.substring(0, 20) + '...');
            
            // Test basic connectivity first using CORS Proxy
            console.log('Testing basic connectivity via CORS Proxy...');
            try {
                const targetUrl = `${this.supabaseUrl}/rest/v1/sprints?select=id&limit=1&apikey=${this.supabaseKey}`;
                const response = await fetch(`${this.corsProxyUrl}?url=${encodeURIComponent(targetUrl)}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${this.supabaseKey}`,
                        'Content-Type': 'application/json'
                    }
                });
                console.log('CORS Proxy response:', response.status, response.statusText);
                
                if (!response.ok) {
                    const errorText = await response.text();
                    console.error('CORS Proxy error:', errorText);
                    throw new Error(`HTTP ${response.status}: ${response.statusText} - ${errorText}`);
                }
            } catch (fetchError) {
                console.error('CORS Proxy failed:', fetchError);
                alert(`CORS Proxy Error: ${fetchError.message}\n\nPlease deploy the cors-proxy Edge Function in Supabase first.\n\nGo to Edge Functions → Create Function → cors-proxy`);
                this.addIdsToHardcodedTeams();
                return;
            }
            
            // Test a simple query first
            console.log('Testing simple query...');
            console.log('Supabase client:', this.supabase);
            console.log('Supabase URL:', this.supabaseUrl);
            console.log('Supabase Key:', this.supabaseKey);
            
            const { data: testData, error: testError } = await this.supabase
                .from('sprints')
                .select('id')
                .limit(1);
            
            console.log('Query result:', { testData, testError });
            
            if (testError) {
                console.error('Supabase query failed:', testError);
                console.error('Error details:', {
                    message: testError.message,
                    details: testError.details,
                    hint: testError.hint,
                    code: testError.code
                });
                
                // Show detailed error in alert
                alert(`Supabase Error: ${testError.message}\n\nDetails: ${JSON.stringify(testError, null, 2)}`);
                
                this.addIdsToHardcodedTeams();
                return;
            }
            
            console.log('Supabase connection successful!');
            
            // Check if tables exist, if not create them
            await this.createTablesIfNotExist();
            await this.loadDataFromSupabase();
            
        } catch (error) {
            console.error('Database initialization error:', error);
            console.log('Falling back to local data');
            this.addIdsToHardcodedTeams();
        }
    }

    addIdsToHardcodedTeams() {
        // Add UUID-like IDs to hardcoded teams so they can be used in forms
        this.teams = this.teams.map((team, index) => ({
            ...team,
            id: team.id || `temp-id-${index + 1}`, // Preserve existing ID or create temporary ID
            associateId: team.associateId || this.getAssociateIdForTeam(team.name), // Preserve existing associateId
            country: team.country || this.getCountryForTeam(team.name),
            countryCode: team.countryCode || this.getCountryCodeForTeam(team.name),
            ceoName: team.ceoName || this.getCEOForTeam(team.name),
            mainContact: team.mainContact || this.getMainContactForTeam(team.name),
            website: team.website || this.getWebsiteForTeam(team.name)
        }));
        console.log('Added temporary IDs to hardcoded teams:', this.teams);
    }

    getAssociateIdForTeam(teamName) {
        const elenaClients = ['SECOM', 'MAX CITY', 'PHARMACIE NOUVELLE', 'LEAL GROUP (AUTO)', 'APF', 'CFL', 'VIZULO', 'GRUPO PDC', 'Chromavis', 'Industra Bank'];
        const anaMariaClients = ['LIFECARE', 'Plazteca', 'Rockland', 'Hemas', 'ENSON', 'PGO', 'FORMIKA', 'AMEX', 'MOBO', 'CRAFT'];
        const vasilClients = ['Capital Alliance'];
        
        console.log('Getting associate ID for team:', teamName);
        
        if (elenaClients.includes(teamName)) {
            console.log('Found Elena client:', teamName);
            return 'elena-temp-id';
        }
        if (anaMariaClients.includes(teamName)) {
            console.log('Found Ana-Maria client:', teamName);
            return 'ani-temp-id'; // Using 'ani-temp-id' for Ana-Maria
        }
        if (vasilClients.includes(teamName)) {
            console.log('Found Vasil client:', teamName);
            return 'vasil-temp-id';
        }
        
        console.log('No match found for:', teamName, '- defaulting to Elena');
        return 'elena-temp-id'; // Default to Elena
    }

    getCountryForTeam(teamName) {
        const countryMap = {
            'SECOM': 'Romania',
            'LIFECARE': 'UAE',
            'MAX CITY': 'Mauritius', 'PHARMACIE NOUVELLE': 'Mauritius', 'LEAL GROUP (AUTO)': 'Mauritius',
            'APF': 'Latvia', 'VIZULO': 'Latvia',
            'CFL': 'Kenya',
            'GRUPO PDC': 'Guatemala',
            'Chromavis': 'Italy',
            'Industra Bank': 'Estonia',
            'Capital Alliance': 'Sri Lanka', 'Rockland': 'Sri Lanka', 'Hemas': 'Sri Lanka',
            'ENSON': 'Poland', 'PGO': 'Poland', 'FORMIKA': 'Poland',
            'Plazteca': 'Mexico', 'MOBO': 'Mexico', 'CRAFT': 'Mexico',
            'AMEX': 'Austria'
        };
        return countryMap[teamName] || 'Mauritius';
    }

    getCountryCodeForTeam(teamName) {
        const countryCodeMap = {
            'SECOM': 'RO',
            'LIFECARE': 'AE',
            'MAX CITY': 'MU', 'PHARMACIE NOUVELLE': 'MU', 'LEAL GROUP (AUTO)': 'MU',
            'APF': 'LV', 'VIZULO': 'LV',
            'CFL': 'KE',
            'GRUPO PDC': 'GT',
            'Chromavis': 'IT',
            'Industra Bank': 'EE',
            'Capital Alliance': 'LK', 'Rockland': 'LK', 'Hemas': 'LK',
            'ENSON': 'PL', 'PGO': 'PL', 'FORMIKA': 'PL',
            'Plazteca': 'MX', 'MOBO': 'MX', 'CRAFT': 'MX',
            'AMEX': 'AT'
        };
        return countryCodeMap[teamName] || 'MU';
    }

    getCEOForTeam(teamName) {
        const ceoMap = {
            'SECOM': 'Not specified',
            'LIFECARE': 'Not specified',
            'MAX CITY': 'Not specified',
            'PHARMACIE NOUVELLE': 'Not specified',
            'LEAL GROUP (AUTO)': 'Sapan Etwaroo',
            'APF': 'Not specified',
            'CFL': 'Not specified',
            'VIZULO': 'Not specified',
            'GRUPO PDC': 'Not specified',
            'Chromavis': 'Not specified',
            'Industra Bank': 'Not specified',
            'Capital Alliance': 'Kanishke Mannakkara',
            'Rockland': 'Not specified',
            'Hemas': 'Not specified',
            'ENSON': 'Not specified',
            'PGO': 'Not specified',
            'FORMIKA': 'Not specified',
            'Plazteca': 'Not specified',
            'MOBO': 'Not specified',
            'CRAFT': 'Not specified',
            'AMEX': 'Not specified'
        };
        return ceoMap[teamName] || 'Not specified';
    }

    getMainContactForTeam(teamName) {
        const contactMap = {
            'SECOM': 'Not specified',
            'LIFECARE': 'Not specified',
            'MAX CITY': 'Not specified',
            'PHARMACIE NOUVELLE': 'Not specified',
            'LEAL GROUP (AUTO)': 'Meela Ramsamy',
            'APF': 'Not specified',
            'CFL': 'Not specified',
            'VIZULO': 'Not specified',
            'GRUPO PDC': 'Not specified',
            'Chromavis': 'Not specified',
            'Industra Bank': 'Not specified',
            'Capital Alliance': 'Kanishke Mannakkara',
            'Rockland': 'Not specified',
            'Hemas': 'Not specified',
            'ENSON': 'Not specified',
            'PGO': 'Not specified',
            'FORMIKA': 'Not specified',
            'Plazteca': 'Not specified',
            'MOBO': 'Not specified',
            'CRAFT': 'Not specified',
            'AMEX': 'Not specified'
        };
        return contactMap[teamName] || 'Not specified';
    }

    getWebsiteForTeam(teamName) {
        const websiteMap = {
            'SECOM': 'Not specified',
            'LIFECARE': 'Not specified',
            'MAX CITY': 'Not specified',
            'PHARMACIE NOUVELLE': 'Not specified',
            'LEAL GROUP (AUTO)': 'lealgroup.mu',
            'APF': 'Not specified',
            'CFL': 'Not specified',
            'VIZULO': 'Not specified',
            'GRUPO PDC': 'Not specified',
            'Chromavis': 'Not specified',
            'Industra Bank': 'Not specified',
            'Capital Alliance': 'Kanishke Mannakkara',
            'Rockland': 'Not specified',
            'Hemas': 'Not specified',
            'ENSON': 'Not specified',
            'PGO': 'Not specified',
            'FORMIKA': 'Not specified',
            'Plazteca': 'Not specified',
            'MOBO': 'Not specified',
            'CRAFT': 'Not specified',
            'AMEX': 'Not specified'
        };
        return websiteMap[teamName] || 'Not specified';
    }

    async createTablesIfNotExist() {
        // This would typically be done via Supabase SQL editor or migrations
        // For now, we'll create the schema structure in code
        const schema = {
            teams: {
                id: 'uuid primary key default gen_random_uuid()',
                name: 'text not null',
                access_code: 'text unique not null',
                weekly_score: 'integer default 0',
                quality_score: 'integer default 0',
                speed: 'integer default 0',
                sprint: 'text',
                status: 'text default "starting-soon"',
                position: 'integer default 0',
                previous_position: 'integer default 0',
                graduation: 'text',
                delay_days: 'integer default 0',
                current_module: 'integer default 0',
                current_sprint: 'text',
                completed_sprints: 'text[] default "{}"',
                guru: 'text',
                last_login: 'timestamp with time zone',
                created_at: 'timestamp with time zone default now()',
                updated_at: 'timestamp with time zone default now()'
            },
            sprints: {
                id: 'uuid primary key default gen_random_uuid()',
                name: 'text not null',
                module_number: 'integer not null',
                module_title: 'text not null',
                description: 'text',
                guru: 'text',
                duration_weeks: 'integer default 1',
                is_active: 'boolean default true',
                created_at: 'timestamp with time zone default now()'
            },
            subtasks: {
                id: 'uuid primary key default gen_random_uuid()',
                sprint_id: 'uuid references sprints(id)',
                team_id: 'uuid references teams(id)',
                title: 'text not null',
                description: 'text',
                status: 'text default "pending"', // pending, in_progress, completed
                completion_percentage: 'integer default 0',
                created_by: 'text', // admin or team
                created_at: 'timestamp with time zone default now()',
                updated_at: 'timestamp with time zone default now()'
            },
            messages: {
                id: 'uuid primary key default gen_random_uuid()',
                subtask_id: 'uuid references subtasks(id)',
                team_id: 'uuid references teams(id)',
                sender_type: 'text not null', // team or admin
                message: 'text not null',
                is_admin_response: 'boolean default false',
                created_at: 'timestamp with time zone default now()'
            },
            team_activities: {
                id: 'uuid primary key default gen_random_uuid()',
                team_id: 'uuid references teams(id)',
                activity_type: 'text not null', // login, task_update, message_sent, etc.
                description: 'text',
                metadata: 'jsonb',
                created_at: 'timestamp with time zone default now()'
            }
        };
        
        console.log('Database schema defined:', schema);
        return schema;
    }

    async loadDataFromSupabase() {
        try {
            // Load associates first
            const { data: associatesData, error: associatesError } = await this.supabase
                .from('associates')
                .select('*');

            if (associatesError) {
                console.error('Error loading associates:', associatesError);
            } else if (associatesData) {
                this.associates = associatesData.map(associate => ({
                    id: associate.id,
                    name: associate.name,
                    accessCode: associate.access_code,
                    email: associate.email,
                    phone: associate.phone,
                    createdAt: associate.created_at,
                    updatedAt: associate.updated_at
                }));
                console.log('Loaded associates from Supabase:', this.associates.length);
            }

            // Load teams with associate relationships
            const { data: teamsData, error: teamsError } = await this.supabase
                .from('teams')
                .select(`
                    *,
                    associates:associate_id (
                        id,
                        name,
                        access_code
                    )
                `)
                .order('weekly_rank', { ascending: true });

            if (teamsError) {
                console.error('Error loading teams:', teamsError);
                return;
            }

            if (teamsData && teamsData.length > 0) {
                this.teams = teamsData.map(team => ({
                    id: team.id,
                    name: team.name,
                    accessCode: team.access_code,
                    weeklyScore: team.weekly_score, // weekly_score unchanged
                    qualityScore: team.quality_score, // quality_score unchanged
                    speed: team.status, // speed renamed to status (integer)
                    sprint: team.sprint,
                    status: team.speed_score || 'on-time', // status renamed to speed_score (text)
                    position: team.weekly_rank, // position renamed to weekly_rank
                    previousPosition: team.previous_position,
                    graduation: team.graduation,
                    delay: team.delay_days,
                    startingDate: team.starting_date,
                    currentModule: team.current_module,
                    currentSprint: team.current_sprint,
                    completedSprints: team.completed_sprints || [],
                    guru: team.guru,
                    lastLogin: team.last_login,
                    associateId: team.associate_id,
                    associateName: team.associates?.name || team.guru,
                    // Enhanced client profile fields
                    country: team.country || 'Not specified',
                    countryCode: team.country_code || 'US',
                    ceoName: team.ceo_name || 'Not specified',
                    mainContact: team.main_contact || 'Not specified',
                    website: team.website || 'Not specified',
                    industryType: team.industry_type || 'Not specified',
                    companySize: team.company_size || 'Not specified',
                    priorityLevel: team.priority_level || 'Medium',
                    notes: team.notes || '',
                    fastTrackInstructions: []
                }));
                console.log('Loaded teams from Supabase:', this.teams.length);
                
                // Recalculate positions to ensure they're accurate based on current scores
                this.recalculateTeamPositions();
            }

            // Load subtasks
            const { data: subtasksData, error: subtasksError } = await this.supabase
                .from('subtasks')
                .select('*')
                .order('created_at', { ascending: false });

            if (subtasksError) {
                console.error('Error loading subtasks:', subtasksError);
            } else if (subtasksData) {
                this.subtasks = subtasksData.map(subtask => ({
                    id: subtask.id,
                    sprintId: subtask.sprint_id,
                    teamId: subtask.team_id,
                    title: subtask.title,
                    description: subtask.description,
                    status: subtask.status,
                    completionPercentage: subtask.completion_percentage,
                    createdBy: subtask.created_by,
                    createdAt: subtask.created_at,
                    updatedAt: subtask.updated_at
                }));
                console.log('Loaded subtasks from Supabase:', this.subtasks.length);
            }

            // Load messages
            const { data: messagesData, error: messagesError } = await this.supabase
                .from('messages')
                .select('*')
                .order('created_at', { ascending: false });

            if (messagesError) {
                console.error('Error loading messages:', messagesError);
            } else if (messagesData) {
                this.messages = messagesData.map(message => ({
                    id: message.id,
                    subtaskId: message.subtask_id,
                    teamId: message.team_id,
                    senderType: message.sender_type,
                    message: message.message,
                    isAdminResponse: message.is_admin_response,
                    createdAt: message.created_at
                }));
                console.log('Loaded messages from Supabase:', this.messages.length);
            }

        } catch (error) {
            console.error('Error loading data from Supabase:', error);
        }
    }

    // Subtasks management methods
    async createSubtask(sprintId, teamId, title, description, createdBy = 'admin') {
        try {
            console.log('Creating subtask with:', { sprintId, teamId, title, description, createdBy });
            
            // If using temporary ID, we can't create subtasks in database
            if (teamId.startsWith('temp-id-')) {
                console.log('Using hardcoded data - cannot create subtask in database');
                alert('Database connection failed. Cannot create subtasks. Please check Supabase connection.');
                return null;
            }
            
            const { data, error } = await this.supabase
                .from('subtasks')
                .insert([
                    {
                        sprint_id: sprintId,
                        team_id: teamId,
                        title: title,
                        description: description,
                        created_by: createdBy
                    }
                ])
                .select();

            if (error) {
                console.error('Supabase error creating subtask:', error);
                console.error('Error details:', {
                    message: error.message,
                    details: error.details,
                    hint: error.hint,
                    code: error.code
                });
                alert(`Database error: ${error.message}`);
                return null;
            }

            console.log('Subtask created successfully:', data);
            
            if (data && data.length > 0) {
                this.subtasks.push(data[0]);
                return data[0];
            }
        } catch (error) {
            console.error('Exception creating subtask:', error);
        }
        return null;
    }

    async updateSubtaskStatus(subtaskId, status, completionPercentage = 0) {
        try {
            const { data, error } = await this.supabase
                .from('subtasks')
                .update({
                    status: status,
                    completion_percentage: completionPercentage,
                    updated_at: new Date().toISOString()
                })
                .eq('id', subtaskId)
                .select();

            if (error) {
                console.error('Error updating subtask:', error);
                return false;
            }

            if (data && data.length > 0) {
                const index = this.subtasks.findIndex(s => s.id === subtaskId);
                if (index !== -1) {
                    this.subtasks[index] = { ...this.subtasks[index], ...data[0] };
                }
                return true;
            }
        } catch (error) {
            console.error('Error updating subtask:', error);
        }
        return false;
    }

    async addMessage(subtaskId, teamId, message, isAdminResponse = false) {
        try {
            const { data, error } = await this.supabase
                .from('messages')
                .insert([
                    {
                        subtask_id: subtaskId,
                        team_id: teamId,
                        message: message,
                        sender_type: isAdminResponse ? 'admin' : 'team',
                        is_admin_response: isAdminResponse
                    }
                ])
                .select();

            if (error) {
                console.error('Error adding message:', error);
                return null;
            }

            if (data && data.length > 0) {
                this.messages.push(data[0]);
                return data[0];
            }
        } catch (error) {
            console.error('Error adding message:', error);
        }
        return null;
    }

    async logTeamActivity(teamId, activityType, description, metadata = {}) {
        try {
            const { data, error } = await this.supabase
                .from('team_activities')
                .insert([
                    {
                        team_id: teamId,
                        activity_type: activityType,
                        description: description,
                        metadata: metadata
                    }
                ])
                .select();

            if (error) {
                console.error('Error logging activity:', error);
                return false;
            }
            return true;
        } catch (error) {
            console.error('Error logging activity:', error);
            return false;
        }
    }

    async updateTeamLastLogin(teamId) {
        try {
            const { error } = await this.supabase
                .from('teams')
                .update({ last_login: new Date().toISOString() })
                .eq('id', teamId);

            if (error) {
                console.error('Error updating last login:', error);
                return false;
            }
            return true;
        } catch (error) {
            console.error('Error updating last login:', error);
            return false;
        }
    }

    getSubtasksForTeam(teamId) {
        return this.subtasks.filter(subtask => subtask.team_id === teamId);
    }

    getMessagesForSubtask(subtaskId) {
        return this.messages.filter(message => message.subtask_id === subtaskId);
    }

    // Subtasks UI methods
    async showCreateSubtaskModal() {
        const modal = document.getElementById('createSubtaskModal');
        if (modal) {
            // Debug: Check what sprints are in the database
            await this.debugSprints();
            
            await this.populateSubtaskForm();
            modal.classList.remove('hidden');
        }
    }

    // Debug function to check database sprints
    async debugSprints() {
        try {
            const { data: sprints, error } = await this.supabase
                .from('sprints')
                .select('*')
                .order('module_number', { ascending: true });

            console.log('=== DEBUG: All Sprints in Database ===');
            console.log('Error:', error);
            console.log('Sprints:', sprints);
            
            if (sprints) {
                console.log('Sprint names:', sprints.map(s => s.name));
            }
            
            return sprints;
        } catch (error) {
            console.error('Debug sprints error:', error);
            return null;
        }
    }

    async populateSubtaskForm() {
        // Populate team dropdown
        const teamSelect = document.getElementById('subtaskTeam');
        if (teamSelect) {
            let teamsToShow = this.teams;
            
            // If associate is logged in, only show their clients
            if (this.isAssociate && this.currentAssociate) {
                teamsToShow = this.teams.filter(team => team.associateId === this.currentAssociate.id);
            }
            
            teamSelect.innerHTML = '<option value="">Select Team</option>' +
                teamsToShow.map(team => `<option value="${team.id}">${team.name}</option>`).join('');
        }

        // Populate sprint dropdown from database (optional)
        const sprintSelect = document.getElementById('subtaskSprint');
        if (sprintSelect) {
            // Start with default option
            sprintSelect.innerHTML = '<option value="">No specific sprint</option>';
            
            try {
                const { data: sprints, error } = await this.supabase
                    .from('sprints')
                    .select('*')
                    .order('module_number', { ascending: true });

                if (error) {
                    console.error('Error loading sprints:', error);
                    // Keep default option - sprints are optional
                    return;
                }

                if (sprints && sprints.length > 0) {
                    sprintSelect.innerHTML += sprints.map(sprint => 
                        `<option value="${sprint.name}">${sprint.name} (Module ${sprint.module_number})</option>`
                    ).join('');
                }
            } catch (error) {
                console.error('Error loading sprints:', error);
                // Keep default option - sprints are optional
            }
        }
    }

    populateSprintDropdownFallback(sprintSelect) {
        const sprints = [];
        this.moduleStructure.forEach(module => {
            module.sprints.forEach(sprint => {
                sprints.push({
                    name: sprint,
                    module: module.number,
                    moduleTitle: module.title
                });
            });
        });
        
        sprintSelect.innerHTML = '<option value="">Select Sprint</option>' +
            sprints.map(sprint => `<option value="${sprint.name}">${sprint.name} (Module ${sprint.module})</option>`).join('');
    }

    async createSubtaskFromForm() {
        const teamId = document.getElementById('subtaskTeam').value;
        const sprintName = document.getElementById('subtaskSprint').value;
        const title = document.getElementById('subtaskTitle').value.trim();
        const description = document.getElementById('subtaskDescription').value.trim();

        if (!teamId || !title) {
            alert('Please fill in Team and Task Title');
            return;
        }

        try {
            console.log('Form data:', { teamId, sprintName, title, description });
            
            let sprintId = null;
            
            // Only look up sprint if one is selected
            if (sprintName && sprintName !== '') {
                console.log('Looking for sprint:', sprintName);
                
                // Get the actual sprint ID from the database
                const { data: sprintData, error: sprintError } = await this.supabase
                    .from('sprints')
                    .select('id, name')
                    .eq('name', sprintName)
                    .single();

                if (sprintError) {
                    console.error('Sprint lookup error:', sprintError);
                    alert(`Error finding sprint "${sprintName}". Task will be created without sprint assignment.`);
                    // Continue without sprint - it's optional
                } else if (sprintData) {
                    sprintId = sprintData.id;
                    console.log('Found sprint:', sprintData);
                }
            } else {
                console.log('No sprint selected - creating task without sprint assignment');
            }

            const subtask = await this.createSubtask(sprintId, teamId, title, description);
            
            if (subtask) {
                alert('Subtask created successfully!');
                this.hideAllModals();
                
                // Refresh appropriate dashboard
                if (this.isAssociate) {
                    this.populateAssociateDashboard();
                } else {
                this.populateAdminDashboard();
                }
                
                // Log activity
                await this.logTeamActivity(teamId, 'subtask_created', `New subtask created: ${title}`, { subtaskId: subtask.id });
            } else {
                alert('Error creating subtask. Please try again.');
            }
        } catch (error) {
            console.error('Error in createSubtaskFromForm:', error);
            alert('Error creating subtask. Please check the console for details.');
        }
    }

    async updateSubtaskStatusFromUI(subtaskId, status, completionPercentage = 0) {
        const success = await this.updateSubtaskStatus(subtaskId, status, completionPercentage);
        
        if (success) {
            // Log activity
            const subtask = this.subtasks.find(s => s.id === subtaskId);
            if (subtask) {
                await this.logTeamActivity(subtask.team_id, 'subtask_updated', 
                    `Subtask status updated to ${status}`, 
                    { subtaskId, status, completionPercentage });
            }
            
            this.populateTeamSubtasks();
            alert('Subtask status updated successfully!');
        } else {
            alert('Error updating subtask status. Please try again.');
        }
    }

    showSubtaskProgressModal(subtaskId) {
        const subtask = this.subtasks.find(s => s.id === subtaskId);
        if (!subtask) return;

        const percentage = prompt(`Update completion percentage for "${subtask.title}" (0-100):`, subtask.completion_percentage);
        
        if (percentage !== null) {
            const percentageNum = parseInt(percentage);
            if (percentageNum >= 0 && percentageNum <= 100) {
                this.updateSubtaskStatusFromUI(subtaskId, 'in_progress', percentageNum);
            } else {
                alert('Please enter a valid percentage between 0 and 100');
            }
        }
    }

    showSubtaskDetails(subtaskId) {
        const subtask = this.subtasks.find(s => s.id === subtaskId);
        if (!subtask) return;

        const team = this.teams.find(t => t.id === subtask.team_id);
        const messages = this.getMessagesForSubtask(subtaskId);

        const modal = document.getElementById('subtaskDetailsModal');
        const titleElement = document.getElementById('subtaskDetailsTitle');
        const contentElement = document.getElementById('subtaskDetailsContent');

        if (modal && titleElement && contentElement) {
            titleElement.textContent = subtask.title;
            
            contentElement.innerHTML = `
                <div class="subtask-details">
                    <div class="subtask-info">
                        <h4>Task Information</h4>
                        <p><strong>Team:</strong> ${team ? team.name : 'Unknown'}</p>
                        <p><strong>Status:</strong> <span class="subtask-status ${subtask.status}">${subtask.status.replace('_', ' ')}</span></p>
                        <p><strong>Progress:</strong> ${subtask.completion_percentage}%</p>
                        <p><strong>Description:</strong> ${subtask.description || 'No description provided'}</p>
                    </div>
                    
                    <div class="subtask-messages">
                        <h4>Messages</h4>
                        ${messages.length === 0 ? '<p>No messages yet.</p>' : ''}
                        ${messages.map(message => `
                            <div class="message-item">
                                <div class="message-header">
                                    <span class="message-sender">${message.sender_type === 'admin' ? 'Admin' : 'Team'}</span>
                                    <span class="message-time">${new Date(message.created_at).toLocaleString()}</span>
                                </div>
                                <div class="message-content">${message.message}</div>
                            </div>
                        `).join('')}
                        
                        <div class="message-input">
                            <input type="text" id="newMessageInput" placeholder="Add a message...">
                            <button class="btn btn--primary btn--sm" onclick="app.addMessageToSubtask('${subtaskId}')">Send</button>
                        </div>
                    </div>
                </div>
            `;
            
            modal.classList.remove('hidden');
        }
    }

    async addMessageToSubtask(subtaskId) {
        const input = document.getElementById('newMessageInput');
        if (!input) return;

        const message = input.value.trim();
        if (!message) return;

        const subtask = this.subtasks.find(s => s.id === subtaskId);
        if (!subtask) return;

        const success = await this.addMessage(subtaskId, subtask.team_id, message, false);
        
        if (success) {
            input.value = '';
            this.showSubtaskDetails(subtaskId); // Refresh the modal
            alert('Message sent successfully!');
        } else {
            alert('Error sending message. Please try again.');
        }
    }

    populateAdminSubtasks() {
        const container = document.getElementById('adminSubtasksContainer');
        if (!container) return;

        if (this.subtasks.length === 0) {
            container.innerHTML = '<p>No subtasks created yet.</p>';
            return;
        }

        container.innerHTML = this.subtasks.map(subtask => {
            const team = this.teams.find(t => t.id === subtask.team_id);
            return `
                <div class="subtask-card">
                    <div class="subtask-header">
                        <div>
                            <div class="subtask-title">${subtask.title}</div>
                            <div class="subtask-description">${subtask.description || 'No description provided'}</div>
                            <div class="subtask-description"><strong>Team:</strong> ${team ? team.name : 'Unknown'}</div>
                        </div>
                        <div class="subtask-status ${subtask.status}">${subtask.status.replace('_', ' ')}</div>
                    </div>
                    
                    ${subtask.status === 'in_progress' ? `
                        <div class="subtask-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${subtask.completion_percentage}%"></div>
                            </div>
                            <div class="progress-text">${subtask.completion_percentage}% complete</div>
                        </div>
                    ` : ''}
                    
                    <div class="subtask-actions">
                        <button class="btn btn--outline btn--sm" onclick="app.showSubtaskDetails('${subtask.id}')">
                            View Details
                        </button>
                        <button class="btn btn--secondary btn--sm" onclick="app.deleteSubtask('${subtask.id}')">
                            Delete
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    async deleteSubtask(subtaskId) {
        if (!confirm('Are you sure you want to delete this subtask?')) return;

        try {
            const { error } = await this.supabase
                .from('subtasks')
                .delete()
                .eq('id', subtaskId);

            if (error) {
                console.error('Error deleting subtask:', error);
                alert('Error deleting subtask. Please try again.');
                return;
            }

            // Remove from local array
            this.subtasks = this.subtasks.filter(s => s.id !== subtaskId);
            
            // Refresh appropriate dashboard
            if (this.isAssociate) {
                this.populateAssociateDashboard();
            } else {
            this.populateAdminSubtasks();
            }
            alert('Subtask deleted successfully!');
        } catch (error) {
            console.error('Error deleting subtask:', error);
            alert('Error deleting subtask. Please try again.');
        }
    }

    async populateActivityLog() {
        const container = document.getElementById('activityLogContainer');
        if (!container) return;

        try {
            const { data: activities, error } = await this.supabase
                .from('team_activities')
                .select(`
                    *,
                    teams!inner(name)
                `)
                .order('created_at', { ascending: false })
                .limit(50);

            if (error) {
                console.error('Error loading activities:', error);
                container.innerHTML = '<p>Error loading activity log.</p>';
                return;
            }

            if (!activities || activities.length === 0) {
                container.innerHTML = '<p>No activities recorded yet.</p>';
                return;
            }

            container.innerHTML = activities.map(activity => `
                <div class="activity-item">
                    <div class="activity-icon">📝</div>
                    <div class="activity-content">
                        <div class="activity-description">${activity.description}</div>
                        <div class="activity-time">${new Date(activity.created_at).toLocaleString()}</div>
                        <div class="activity-metadata">Team: ${activity.teams.name} | Type: ${activity.activity_type}</div>
                    </div>
                </div>
            `).join('');
        } catch (error) {
            console.error('Error loading activities:', error);
            container.innerHTML = '<p>Error loading activity log.</p>';
        }
    }

    async init() {
        // Initialize database and load data
        await this.initializeDatabase();
        this.bindEvents();
        
        // Restore sessions after data is loaded
        this.restoreAssociateSession();
        this.restoreTeamSession();
        
        // Only show login page if we're on the original single-page app
        const isOriginalPage = document.getElementById('loginPage') && 
                              document.getElementById('teamDashboard') && 
                              document.getElementById('adminDashboard') && 
                              document.getElementById('associateDashboard');
        
        if (isOriginalPage) {
        this.showLoginPage();
        }
    }

    bindEvents() {
        // Team login - handle both old and new page structures
        const teamLoginBtn = document.getElementById('teamLoginBtn');
        if (teamLoginBtn) {
            teamLoginBtn.onclick = () => this.handleTeamLogin();
        }
        
        // Team login form (new separate page)
        const teamLoginForm = document.getElementById('teamLoginForm');
        if (teamLoginForm) {
            teamLoginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleTeamLogin();
            });
        }
        
        // Associate login - handle both old and new page structures
        const associateLoginBtn = document.getElementById('associateLoginBtn');
        if (associateLoginBtn) {
            associateLoginBtn.onclick = () => this.showAssociateModal();
        }
        
        const associateAuthBtn = document.getElementById('associateAuthBtn');
        if (associateAuthBtn) {
            associateAuthBtn.onclick = () => this.handleAssociateLogin();
        }
        
        // Associate login form (new separate page)
        const associateLoginForm = document.getElementById('associateLoginForm');
        if (associateLoginForm) {
            associateLoginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleAssociateLogin();
            });
        }
        
        // Admin login - handle both old and new page structures
        const adminLoginBtn = document.getElementById('adminLoginBtn');
        if (adminLoginBtn) {
            adminLoginBtn.onclick = () => this.showAdminModal();
        }
        
        const adminAuthBtn = document.getElementById('adminAuthBtn');
        if (adminAuthBtn) {
            adminAuthBtn.onclick = () => this.handleAdminLogin();
        }
        
        // Admin login form (new separate page)
        const adminLoginForm = document.getElementById('adminLoginForm');
        if (adminLoginForm) {
            adminLoginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleAdminLogin();
            });
        }
        
        // Modal close buttons
        const closeAssociateModal = document.getElementById('closeAssociateModal');
        if (closeAssociateModal) {
            closeAssociateModal.onclick = () => this.hideAllModals();
        }
        
        const closeAdminModal = document.getElementById('closeAdminModal');
        if (closeAdminModal) {
            closeAdminModal.onclick = () => this.hideAllModals();
        }
        
        const closeProgressModal = document.getElementById('closeProgressModal');
        if (closeProgressModal) {
            closeProgressModal.onclick = () => this.hideAllModals();
        }
        
        const closeAddTeamModal = document.getElementById('closeAddTeamModal');
        if (closeAddTeamModal) {
            closeAddTeamModal.onclick = () => this.hideAllModals();
        }
        
        const closeUploadModal = document.getElementById('closeUploadModal');
        if (closeUploadModal) {
            closeUploadModal.onclick = () => this.hideAllModals();
        }
        
        // Logout buttons
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.onclick = () => this.logout();
        }
        
        const associateLogoutBtn = document.getElementById('associateLogoutBtn');
        if (associateLogoutBtn) {
            associateLogoutBtn.onclick = () => this.logout();
        }
        
        const adminLogoutBtn = document.getElementById('adminLogoutBtn');
        if (adminLogoutBtn) {
            adminLogoutBtn.onclick = () => this.logout();
        }
        
        // Admin actions
        const addTeamBtn = document.getElementById('addTeamBtn');
        if (addTeamBtn) {
            addTeamBtn.onclick = () => this.showAddTeamModal();
        }
        
        const createTeamBtn = document.getElementById('createTeamBtn');
        if (createTeamBtn) {
            createTeamBtn.onclick = () => this.createNewTeam();
        }
        
        const uploadDocBtn = document.getElementById('uploadDocBtn');
        if (uploadDocBtn) {
            uploadDocBtn.onclick = () => this.showUploadModal();
        }
        
        const viewTeamProgress = document.getElementById('viewTeamProgress');
        if (viewTeamProgress) {
            viewTeamProgress.onclick = () => this.showTeamProgressModal();
        }
        
        const uploadFilesBtn = document.getElementById('uploadFilesBtn');
        if (uploadFilesBtn) {
            uploadFilesBtn.onclick = () => this.handleFileUpload();
        }
        
        // Subtasks management
        const createSubtaskBtn = document.getElementById('createSubtaskBtn');
        if (createSubtaskBtn) {
            createSubtaskBtn.onclick = () => this.showCreateSubtaskModal();
        }
        
        const createSubtaskSubmitBtn = document.getElementById('createSubtaskSubmitBtn');
        if (createSubtaskSubmitBtn) {
            createSubtaskSubmitBtn.onclick = () => this.createSubtaskFromForm();
        }
        
        const closeCreateSubtaskModal = document.getElementById('closeCreateSubtaskModal');
        if (closeCreateSubtaskModal) {
            closeCreateSubtaskModal.onclick = () => this.hideAllModals();
        }
        
        const closeSubtaskDetailsModal = document.getElementById('closeSubtaskDetailsModal');
        if (closeSubtaskDetailsModal) {
            closeSubtaskDetailsModal.onclick = () => this.hideAllModals();
        }
        
        const closeClientManagementModal = document.getElementById('closeClientManagementModal');
        if (closeClientManagementModal) {
            closeClientManagementModal.onclick = () => this.hideAllModals();
        }
        
        // Client management buttons
        const saveClientBtn = document.getElementById('saveClientBtn');
        if (saveClientBtn) {
            saveClientBtn.onclick = () => this.saveClientChanges();
        }
        
        const cancelClientBtn = document.getElementById('cancelClientBtn');
        if (cancelClientBtn) {
            cancelClientBtn.onclick = () => this.hideAllModals();
        }
        
        const addFastTrackToolBtn = document.getElementById('addFastTrackToolBtn');
        if (addFastTrackToolBtn) {
            addFastTrackToolBtn.onclick = () => this.addFastTrackTool();
        }
        
        // Add client modal buttons
        const addClientBtn = document.getElementById('addClientBtn');
        if (addClientBtn) {
            addClientBtn.onclick = () => this.createNewClient();
        }
        
        const closeAddClientModal = document.getElementById('closeAddClientModal');
        if (closeAddClientModal) {
            closeAddClientModal.onclick = () => this.hideAllModals();
        }
        
        // Tab switching for client management
        const tabButtons = document.querySelectorAll('.tab-btn');
        tabButtons.forEach(btn => {
            btn.onclick = () => this.switchClientManagementTab(btn.dataset.tab);
        });
        
        // Enter key support
        const accessCodeInput = document.getElementById('accessCode');
        if (accessCodeInput) {
            accessCodeInput.onkeypress = (e) => {
                if (e.key === 'Enter') {
                    this.handleTeamLogin();
                }
            };
        }
        
        const associateCodeInput = document.getElementById('associateCode');
        if (associateCodeInput) {
            associateCodeInput.onkeypress = (e) => {
                if (e.key === 'Enter') {
                    this.handleAssociateLogin();
                }
            };
        }
        
        const adminCodeInput = document.getElementById('adminCode');
        if (adminCodeInput) {
            adminCodeInput.onkeypress = (e) => {
                if (e.key === 'Enter') {
                    this.handleAdminLogin();
                }
            };
        }

        // File input
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.onchange = (e) => this.handleFileSelection(e);
        }

        // Upload area
        const uploadArea = document.querySelector('.upload-area');
        if (uploadArea) {
            uploadArea.onclick = () => {
                const fileInput = document.getElementById('fileInput');
                if (fileInput) fileInput.click();
            };
        }

        // Modal backdrop clicks
        window.onclick = (e) => {
            if (e.target.classList.contains('modal')) {
                this.hideAllModals();
            }
        };
    }

    showLoginPage() {
        this.hideAllPages();
        const loginPage = document.getElementById('loginPage');
        if (loginPage) {
            loginPage.classList.remove('hidden');
        }
    }

    showTeamDashboard() {
        this.hideAllPages();
        this.hideAllModals();
        const teamDashboard = document.getElementById('teamDashboard');
        if (teamDashboard) {
            teamDashboard.classList.remove('hidden');
            this.populateTeamDashboard();
        }
    }

    showAdminDashboard() {
        this.hideAllPages();
        this.hideAllModals();
        const adminDashboard = document.getElementById('adminDashboard');
        if (adminDashboard) {
            adminDashboard.classList.remove('hidden');
            this.populateAdminDashboard();
        }
    }

    showAssociateDashboard() {
        this.hideAllPages();
        this.hideAllModals();
        const associateDashboard = document.getElementById('associateDashboard');
        if (associateDashboard) {
            associateDashboard.classList.remove('hidden');
            // Add a small delay to ensure data is fully loaded
            setTimeout(() => {
                this.populateAssociateDashboard();
            }, 100);
        }
    }

    hideAllPages() {
        const pages = ['loginPage', 'teamDashboard', 'adminDashboard', 'associateDashboard'];
        pages.forEach(pageId => {
            const page = document.getElementById(pageId);
            if (page) {
                page.classList.add('hidden');
            }
        });
    }

    showAssociateModal() {
        const modal = document.getElementById('associateModal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    showAdminModal() {
        const modal = document.getElementById('adminModal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    showUploadModal() {
        const modal = document.getElementById('uploadModal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    showTeamProgressModal() {
        const modal = document.getElementById('teamProgressModal');
        if (modal) {
            modal.classList.remove('hidden');
            this.populateProgressModal();
        }
    }

    showAddTeamModal() {
        const modal = document.getElementById('addTeamModal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    hideAllModals() {
        console.log('hideAllModals called');
        const modals = ['associateModal', 'adminModal', 'teamProgressModal', 'addTeamModal', 'uploadModal', 'createSubtaskModal', 'subtaskDetailsModal', 'clientManagementModal', 'addClientModal', 'teamSprintModal'];
        modals.forEach(modalId => {
            const modal = document.getElementById(modalId);
            if (modal) {
                console.log(`Hiding modal: ${modalId}`);
                modal.classList.add('hidden');
            } else {
                console.log(`Modal not found: ${modalId}`);
            }
        });
    }

    async handleTeamLogin() {
        const accessCodeInput = document.getElementById('accessCode');
        if (!accessCodeInput) return;
        
        const accessCode = accessCodeInput.value.trim().toUpperCase();
        
        if (!accessCode) {
            this.showError('loginError', 'Please enter your access code');
            return;
        }

        const team = this.teams.find(t => t.accessCode === accessCode);
        
        if (team) {
            this.currentUser = team;
            this.isTeam = true;
            this.isAdmin = false;
            this.isAssociate = false;
            this.clearError('loginError');
            
            // Save team session to localStorage
            localStorage.setItem('currentUser', JSON.stringify(team));
            localStorage.setItem('isTeam', 'true');
            
            // Log team activity and update last login
            await this.logTeamActivity(team.id, 'login', 'Team logged in');
            await this.updateTeamLastLogin(team.id);
            
            this.showTeamDashboard();
        } else {
            this.showError('loginError', 'Invalid access code. Please check and try again.');
        }
    }

    handleAdminLogin() {
        const adminCodeInput = document.getElementById('adminCode');
        if (!adminCodeInput) return;
        
        const adminCode = adminCodeInput.value.trim();
        
        if (!adminCode) {
            this.showError('adminError', 'Please enter admin code');
            return;
        }

        if (this.adminCodes.includes(adminCode)) {
            this.isAdmin = true;
            this.currentUser = { name: 'Administrator', role: 'admin' };
            this.clearError('adminError');
            this.showAdminDashboard();
        } else {
            this.showError('adminError', 'Invalid admin code');
        }
    }

    // Set personal greeting for associate
    setPersonalGreeting() {
        const greetingElement = document.getElementById('personalGreeting');
        if (!greetingElement || !this.currentAssociate) return;

        const name = this.currentAssociate.name;
        const greetings = {
            'Elena': [
                '👋🏻 Hello Elena, have you been kicking ass today?',
                '👋🏻 Hey Elena, ready to crush some goals?',
                '👋🏻 Hello Elena, let\'s make today amazing!'
            ],
            'Vasil': [
                '👋🏻 Hey Vasko, love the shirt today!',
                '👋🏻 Hello Vasil, looking sharp as always!',
                '👋🏻 Hey Vasko, ready to dominate today?'
            ],
            'Ana-Maria': [
                '👋🏻 Hello Ani, happy you are here!',
                '👋🏻 Hey Ana-Maria, great to see you!',
                '👋🏻 Hello Ani, let\'s make magic happen!'
            ]
        };

        // Get random greeting for the associate
        const associateGreetings = greetings[name] || [`👋🏻 Hello ${name}, great to see you!`];
        const randomGreeting = associateGreetings[Math.floor(Math.random() * associateGreetings.length)];
        
        greetingElement.textContent = randomGreeting;
    }

    // Restore associate session from localStorage
    restoreAssociateSession() {
        try {
            const savedAssociate = localStorage.getItem('currentAssociate');
            const savedIsAssociate = localStorage.getItem('isAssociate');
            
            if (savedAssociate && savedIsAssociate === 'true') {
                this.currentAssociate = JSON.parse(savedAssociate);
                this.isAssociate = true;
                this.isAdmin = false;
                this.currentUser = null;
                console.log('Associate session restored:', this.currentAssociate.name);
                
                // Show associate dashboard if we're on the associate login page
                if (window.location.pathname.includes('associate-login.html') || 
                    document.getElementById('associateDashboard')) {
                    this.showAssociateDashboard();
                }
            }
        } catch (error) {
            console.error('Error restoring associate session:', error);
            // Clear invalid session data
            localStorage.removeItem('currentAssociate');
            localStorage.removeItem('isAssociate');
        }
    }

    // Restore team session from localStorage
    restoreTeamSession() {
        try {
            const savedUser = localStorage.getItem('currentUser');
            const savedIsTeam = localStorage.getItem('isTeam');
            
            if (savedUser && savedIsTeam === 'true') {
                this.currentUser = JSON.parse(savedUser);
                this.isTeam = true;
                this.isAdmin = false;
                this.isAssociate = false;
                console.log('Team session restored:', this.currentUser.name);
                
                // Show team dashboard if we're on the team login page
                if (window.location.pathname.includes('team-login.html') || 
                    document.getElementById('teamDashboard')) {
                    this.showTeamDashboard();
                }
            }
        } catch (error) {
            console.error('Error restoring team session:', error);
            // Clear invalid session data
            localStorage.removeItem('currentUser');
            localStorage.removeItem('isTeam');
        }
    }

    // Associate authentication methods
    async handleAssociateLogin() {
        const associateCodeInput = document.getElementById('associateCode');
        if (!associateCodeInput) return;
        
        const associateCode = associateCodeInput.value.trim().toUpperCase();
        
        if (!associateCode) {
            this.showError('associateError', 'Please enter associate code');
            return;
        }

        // Check database associates first
        let associate = this.associates.find(a => a.accessCode === associateCode);
        
        // If not found in database, create temporary associate for fallback
        if (!associate) {
            const tempAssociates = {
                'ELENA001': { id: 'elena-temp-id', name: 'Elena', accessCode: 'ELENA001' },
                'VASIL001': { id: 'vasil-temp-id', name: 'Vasil', accessCode: 'VASIL001' },
                'ANI001': { id: 'ani-temp-id', name: 'Ana-Maria', accessCode: 'ANI001' }
            };
            associate = tempAssociates[associateCode];
        }
        
        if (associate) {
            this.currentAssociate = associate;
            this.isAssociate = true;
            this.isAdmin = false;
            this.currentUser = null;
            this.clearError('associateError');
            
            // Save associate session to localStorage
            localStorage.setItem('currentAssociate', JSON.stringify(associate));
            localStorage.setItem('isAssociate', 'true');
            
            // Log associate activity (only if not temporary)
            if (!associate.id.includes('temp-id')) {
                await this.logAssociateActivity(associate.id, 'login', 'Associate logged in');
            }
            
            this.showAssociateDashboard();
        } else {
            this.showError('associateError', 'Invalid associate code');
        }
    }

    async logAssociateActivity(associateId, activityType, description, metadata = {}) {
        try {
            const { data, error } = await this.supabase
                .from('associate_activities')
                .insert([
                    {
                        associate_id: associateId,
                        activity_type: activityType,
                        description: description,
                        metadata: metadata
                    }
                ])
                .select();

            if (error) {
                console.error('Error logging associate activity:', error);
                return false;
            }
            return true;
        } catch (error) {
            console.error('Error logging associate activity:', error);
            return false;
        }
    }

    populateTeamDashboard() {
        if (!this.currentUser || this.isAdmin) return;

        // Set team name
        const currentTeamElement = document.getElementById('currentTeam');
        if (currentTeamElement) {
            currentTeamElement.textContent = this.currentUser.name;
        }

        // Performance chart removed from client panels

        // Populate progress cards
        const cardsContainer = document.getElementById('teamProgressCards');
        if (cardsContainer) {
            cardsContainer.innerHTML = `
                <div class="progress-card">
                    <div class="progress-card-label">Weekly Rank</div>
                    <div class="progress-card-value">${this.currentUser.weeklyScore}</div>
                    <div class="progress-card-subtitle">Current ranking: #${this.currentUser.position}</div>
                </div>
                <div class="progress-card">
                    <div class="progress-card-label">Starting Date</div>
                    <div class="progress-card-value">${this.currentUser.speed}</div>
                    <div class="progress-card-subtitle">Performance metric</div>
                </div>
                <div class="progress-card">
                    <div class="progress-card-label">Quality Score</div>
                    <div class="progress-card-value">${this.currentUser.qualityScore}</div>
                    <div class="progress-card-subtitle">Execution quality</div>
                </div>
                <div class="progress-card">
                    <div class="progress-card-label">Current Module</div>
                    <div class="progress-card-value">${this.currentUser.currentSprint}</div>
                    <div class="progress-card-subtitle">Module ${this.currentUser.currentModule}</div>
                </div>
            `;
        }

        // Populate team leaderboard
        this.populateClientLeaderboard();
        
        // Populate team ranking
        this.populateTeamRanking();
    }

    populateTeamSubtasks() {
        if (!this.currentUser || this.isAdmin) return;

        const subtasksContainer = document.getElementById('subtasksContainer');
        if (!subtasksContainer) return;

        const teamSubtasks = this.getSubtasksForTeam(this.currentUser.id);
        
        if (teamSubtasks.length === 0) {
            subtasksContainer.innerHTML = `
                <div class="subtask-card">
                    <div class="subtask-header">
                        <div>
                            <div class="subtask-title">No tasks assigned yet</div>
                            <div class="subtask-description">Your admin will assign tasks for your current sprint soon.</div>
                        </div>
                    </div>
                </div>
            `;
            return;
        }

        subtasksContainer.innerHTML = teamSubtasks.map(subtask => `
            <div class="subtask-card">
                <div class="subtask-header">
                    <div>
                        <div class="subtask-title">${subtask.title}</div>
                        <div class="subtask-description">${subtask.description || 'No description provided'}</div>
                    </div>
                    <div class="subtask-status ${subtask.status}">${subtask.status.replace('_', ' ')}</div>
                </div>
                
                ${subtask.status === 'in_progress' ? `
                    <div class="subtask-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${subtask.completion_percentage}%"></div>
                        </div>
                        <div class="progress-text">${subtask.completion_percentage}% complete</div>
                    </div>
                ` : ''}
                
                <div class="subtask-actions">
                    ${subtask.status === 'pending' ? `
                        <button class="btn btn--primary btn--sm" onclick="app.updateSubtaskStatusFromUI('${subtask.id}', 'in_progress', 0)">
                            Start Task
                        </button>
                    ` : ''}
                    
                    ${subtask.status === 'in_progress' ? `
                        <button class="btn btn--secondary btn--sm" onclick="app.showSubtaskProgressModal('${subtask.id}')">
                            Update Progress
                        </button>
                        <button class="btn btn--primary btn--sm" onclick="app.updateSubtaskStatusFromUI('${subtask.id}', 'completed', 100)">
                            Mark Complete
                        </button>
                    ` : ''}
                    
                    <button class="btn btn--outline btn--sm" onclick="app.showSubtaskDetails('${subtask.id}')">
                        View Details
                    </button>
                </div>
            </div>
        `).join('');
    }

    populateTeamRanking() {
        if (!this.currentUser || this.isAdmin) return;

        const rankingContainer = document.getElementById('teamRankingContainer');
        if (!rankingContainer) return;

        const sortedTeams = [...this.teams].sort((a, b) => a.position - b.position);
        const currentTeamIndex = sortedTeams.findIndex(team => team.id === this.currentUser.id);
        const currentTeam = sortedTeams[currentTeamIndex];

        // Calculate comparison metrics
        const totalTeams = sortedTeams.length;
        const betterTeams = currentTeamIndex;
        const worseTeams = totalTeams - currentTeamIndex - 1;
        const averageScore = Math.round(sortedTeams.reduce((sum, team) => sum + team.weeklyScore, 0) / totalTeams);
        const averageSpeed = Math.round(sortedTeams.reduce((sum, team) => sum + team.speed, 0) / totalTeams);

        rankingContainer.innerHTML = `
            <div class="ranking-card">
                <div class="ranking-position">#${currentTeam.position}</div>
                <div class="ranking-team-name">${currentTeam.name}</div>
                <div class="ranking-score">Weekly Rank: ${currentTeam.weeklyScore}</div>
            </div>
            
            <div class="ranking-comparison">
                <div class="comparison-item">
                    <div class="comparison-label">Teams Ahead</div>
                    <div class="comparison-value">${betterTeams}</div>
                </div>
                <div class="comparison-item">
                    <div class="comparison-label">Teams Behind</div>
                    <div class="comparison-value">${worseTeams}</div>
                </div>
                <div class="comparison-item">
                    <div class="comparison-label">Your Speed</div>
                    <div class="comparison-value">${currentTeam.speed}</div>
                </div>
                <div class="comparison-item">
                    <div class="comparison-label">Avg Speed</div>
                    <div class="comparison-value">${averageSpeed}</div>
                </div>
                <div class="comparison-item">
                    <div class="comparison-label">Your Score</div>
                    <div class="comparison-value">${currentTeam.weeklyScore}</div>
                </div>
                <div class="comparison-item">
                    <div class="comparison-label">Avg Score</div>
                    <div class="comparison-value">${averageScore}</div>
                </div>
            </div>
        `;
    }

    populateAdminDashboard() {
        if (!this.isAdmin) return;

        this.populatePodium();
        this.populateLeaderboard();
        this.populateAnalytics();
        this.populateCodeManagement();
        this.populateAdminSubtasks();
        this.populateActivityLog();
    }

    populateAssociateDashboard() {
        if (!this.isAssociate || !this.currentAssociate) {
            console.log('Cannot populate associate dashboard - not logged in as associate');
            return;
        }

        // Set associate name
        const associateNameElement = document.getElementById('associateName');
        if (associateNameElement) {
            associateNameElement.textContent = this.currentAssociate.name;
        }

        // Set personal greeting
        this.setPersonalGreeting();

        // Always ensure teams have associate IDs
        console.log('Ensuring teams have associate IDs...');
        this.addIdsToHardcodedTeams();

        // Get associate's clients
        const associateClients = this.teams.filter(team => team.associateId === this.currentAssociate.id);
        console.log('Current associate:', this.currentAssociate);
        console.log('All teams with associate IDs:', this.teams.map(t => ({ name: t.name, associateId: t.associateId })));
        console.log('Filtered clients for', this.currentAssociate.name, ':', associateClients);
        
        // If no clients found, try to refresh data and try again
        if (associateClients.length === 0) {
            console.log('No clients found, attempting to refresh data...');
            // Force refresh the teams data
            this.addIdsToHardcodedTeams();
            const retryClients = this.teams.filter(team => team.associateId === this.currentAssociate.id);
            console.log('Retry clients:', retryClients);
            
            if (retryClients.length > 0) {
                console.log('Found clients on retry, proceeding...');
                this.populateAssociateClients(retryClients);
                this.populateAssociateAnalytics(retryClients);
                this.populateAssociateLeaderboard(retryClients);
                this.populateAssociateCodeManagement(retryClients);
                this.populateAssociateSubtasks(retryClients);
                this.populateAssociateActivityLog(retryClients);
                return;
            }
        }
        
        // Populate associate's client list
        this.populateAssociateClients(associateClients);
        
        // Populate associate analytics
        this.populateAssociateAnalytics(associateClients);
        
        // Populate associate leaderboard
        this.populateAssociateLeaderboard(associateClients);
        
        // Populate associate code management
        this.populateAssociateCodeManagement(associateClients);
        
        // Populate associate subtasks management
        this.populateAssociateSubtasks(associateClients);
        
        // Populate associate activity log
        this.populateAssociateActivityLog(associateClients);
    }

    populateAssociateClients(clients) {
        const clientsContainer = document.getElementById('associateClientsContainer');
        const clientsHeader = document.getElementById('clientsHeader');
        if (!clientsContainer) return;

        // Update header with client count
        if (clientsHeader) {
            clientsHeader.textContent = `Your Clients (${clients.length})`;
        }

        if (clients.length === 0) {
            clientsContainer.innerHTML = `
                <div class="no-clients-message">
                    <p>No clients assigned yet.</p>
                    <button class="btn btn--primary" onclick="app.showAddClientModal()">
                        Add Your First Client
                    </button>
                </div>
            `;
            return;
        }

        clientsContainer.innerHTML = `
            <div class="clients-grid">
                ${clients.map(client => `
                    <div class="client-card">
                        <div class="client-header">
                            <div class="client-info">
                                <h3>${client.name}</h3>
                                <p class="client-country">${this.getCountryName(client.countryCode)}</p>
                                <p class="client-ceo">CEO: ${client.ceoName || 'Not specified'}</p>
                            </div>
                            <div class="client-status">
                                <span class="status-badge status-${String(client.status || '').replace(/[^a-zA-Z0-9]/g, '-')}">${this.formatStatus(client.status)}</span>
                            </div>
                        </div>
                        <div class="client-details">
                            <div class="client-metric">
                                <span class="metric-label">Current Module:</span>
                                <span class="metric-value">${client.currentSprint}</span>
                            </div>
                            <div class="client-metric">
                                <span class="metric-label">Speed Score:</span>
                                <span class="metric-value">${client.speed}</span>
                            </div>
                            <div class="client-metric">
                                <span class="metric-label">Module:</span>
                                <span class="metric-value">${client.currentModule}</span>
                            </div>
                        </div>
                        <div class="client-actions">
                            <button class="btn btn--primary btn--sm" onclick="app.viewClientDetails('${client.id}')">
                                Manage Client
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    populateAssociateAnalytics(clients) {
        const analyticsContainer = document.getElementById('associateAnalyticsContainer');
        if (!analyticsContainer) return;

        const totalClients = clients.length;
        const clientsOnTime = clients.filter(c => c.status === 'on-time').length;
        const clientsInDelay = clients.filter(c => c.status === 'in-delay').length;
        const clientsGraduated = clients.filter(c => c.status === 'graduated').length;
        const averageSpeed = clients.length > 0 ? Math.round(clients.reduce((sum, c) => sum + c.speed, 0) / clients.length) : 0;

        analyticsContainer.innerHTML = `
            <div class="analytics-grid">
                <div class="analytics-card">
                    <div class="analytics-label">Total Clients</div>
                    <div class="analytics-value">${totalClients}</div>
                </div>
                <div class="analytics-card">
                    <div class="analytics-label">On Time</div>
                    <div class="analytics-value">${clientsOnTime}</div>
                </div>
                <div class="analytics-card">
                    <div class="analytics-label">In Delay</div>
                    <div class="analytics-value">${clientsInDelay}</div>
                </div>
                <div class="analytics-card">
                    <div class="analytics-label">Graduated</div>
                    <div class="analytics-value">${clientsGraduated}</div>
                </div>
                <div class="analytics-card">
                    <div class="analytics-label">Avg Speed</div>
                    <div class="analytics-value">${averageSpeed}</div>
                </div>
            </div>
        `;
    }

    populateAssociateLeaderboard(clients) {
        const leaderboardContainer = document.getElementById('associateLeaderboardBody');
        if (!leaderboardContainer) return;

        const sortedClients = [...clients].sort((a, b) => a.position - b.position);
        
        // Debug: Log the client data to see what we're working with
        console.log('Associate leaderboard clients:', sortedClients.map(c => ({
            name: c.name,
            countryCode: c.countryCode,
            country: c.country,
            currentSprint: c.currentSprint,
            sprint: c.sprint,
            position: c.position
        })));

        if (sortedClients.length === 0) {
            leaderboardContainer.innerHTML = `
                <tr>
                    <td colspan="8" style="text-align: center; padding: 20px; color: #666;">
                        No clients found for this associate.
                    </td>
                </tr>
            `;
            return;
        }

        leaderboardContainer.innerHTML = sortedClients.map(client => {
            // Get sprint display and scores using helper functions
            const sprintDisplay = this.getSprintDisplay(client);
            const speedScore = this.getScoreDisplay(client, 'speed');
            const qualityScore = this.getScoreDisplay(client, 'quality');

            return `
                <tr>
                    <td class="position-cell">${client.position}</td>
                    <td><strong>${client.name}</strong></td>
                    <td>${this.getCountryName(client.countryCode || client.country)}</td>
                    <td>
                        <div class="sprint-progress sprint-${sprintDisplay.color}">
                            ${sprintDisplay.display}
                        </div>
                    </td>
                    <td>
                        <div class="speed-score">${speedScore}</div>
                    </td>
                    <td>${qualityScore}</td>
                    <td>
                        <span class="status-badge status-${String(client.status || '').replace(/[^a-zA-Z0-9]/g, '-')}">${this.formatStatus(client.status)}</span>
                    </td>
                    <td>
                        <button class="btn btn--outline btn--sm" onclick="app.viewClientDetails('${client.id}')">
                            VIEW
                        </button>
                    </td>
                </tr>
            `;
        }).join('');
    }

    populateAssociateCodeManagement(clients) {
        const codeList = document.getElementById('associateCodeList');
        if (!codeList) return;
        
        if (clients.length === 0) {
            codeList.innerHTML = '<p>No clients created yet. Add your first client to see access codes here.</p>';
            return;
        }

        codeList.innerHTML = clients.map(client => `
            <div class="code-item">
                <div class="code-info">
                    <div class="code-team-name">${client.name}</div>
                    <div class="code-value">${client.accessCode}</div>
                </div>
                <div class="code-actions">
                    <button class="btn btn--outline btn--sm" onclick="app.regenerateAssociateCode('${client.accessCode}')">
                        Regenerate
                    </button>
                    <button class="btn btn--secondary btn--sm" onclick="app.deactivateAssociateCode('${client.accessCode}')">
                        Deactivate
                    </button>
                </div>
            </div>
        `).join('');
    }

    populateAssociateSubtasks(clients) {
        const subtasksContainer = document.getElementById('associateSubtasksContainer');
        if (!subtasksContainer) return;

        // Get client IDs for filtering
        const clientIds = clients.map(client => client.id);
        
        // Filter subtasks to only show those for this associate's clients
        const associateSubtasks = this.subtasks.filter(subtask => 
            clientIds.includes(subtask.team_id)
        );

        if (associateSubtasks.length === 0) {
            subtasksContainer.innerHTML = `
                <div class="subtasks-management-section">
                    <h2>Subtasks Management</h2>
                    <div class="subtasks-actions">
                        <button class="btn btn--primary" onclick="app.showCreateSubtaskModal()">
                            Create New Subtask
                        </button>
                    </div>
                    <div class="no-subtasks-message">
                        <p>No subtasks created yet for your clients. Create your first subtask to get started.</p>
                    </div>
                </div>
            `;
            return;
        }

        subtasksContainer.innerHTML = `
            <div class="subtasks-management-section">
                <h2>Subtasks Management</h2>
                <div class="subtasks-actions">
                    <button class="btn btn--primary" onclick="app.showCreateSubtaskModal()">
                        Create New Subtask
                    </button>
                </div>
                <div class="associate-subtasks-container">
                    ${associateSubtasks.map(subtask => {
                        const team = this.teams.find(t => t.id === subtask.team_id);
                        return `
                            <div class="subtask-card">
                                <div class="subtask-header">
                                    <div>
                                        <div class="subtask-title">${subtask.title}</div>
                                        <div class="subtask-description">${subtask.description || 'No description provided'}</div>
                                        <div class="subtask-description"><strong>Client:</strong> ${team ? team.name : 'Unknown'}</div>
                                    </div>
                                    <div class="subtask-status ${subtask.status}">${subtask.status.replace('_', ' ')}</div>
                                </div>
                                
                                ${subtask.status === 'in_progress' ? `
                                    <div class="subtask-progress">
                                        <div class="progress-bar">
                                            <div class="progress-fill" style="width: ${subtask.completion_percentage}%"></div>
                                        </div>
                                        <div class="progress-text">${subtask.completion_percentage}% complete</div>
                                    </div>
                                ` : ''}
                                
                                <div class="subtask-actions">
                                    <button class="btn btn--outline btn--sm" onclick="app.showSubtaskDetails('${subtask.id}')">
                                        View Details
                                    </button>
                                    <button class="btn btn--secondary btn--sm" onclick="app.deleteSubtask('${subtask.id}')">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    getCountryName(countryCode) {
        const countryNames = {
            'MU': 'Mauritius', 'LV': 'Latvia', 'KE': 'Kenya', 'GT': 'Guatemala', 'IT': 'Italy', 'EE': 'Estonia',
            'LK': 'Sri Lanka', 'PL': 'Poland', 'MX': 'Mexico', 'AT': 'Austria', 'AE': 'UAE', 'RO': 'Romania'
        };
        return countryNames[countryCode] || 'Unknown';
    }

    async populateAssociateActivityLog(clients) {
        const container = document.getElementById('associateActivityLogContainer');
        if (!container) return;

        try {
            // Get client IDs for filtering
            const clientIds = clients.map(client => client.id);
            
            // Only show activities for clients created by this associate
            const { data: activities, error } = await this.supabase
                .from('team_activities')
                .select(`
                    *,
                    teams!inner(name)
                `)
                .in('team_id', clientIds)
                .order('created_at', { ascending: false })
                .limit(20); // Show last 20 activities

            if (error) {
                console.error('Error loading associate activities:', error);
                container.innerHTML = '<p>Error loading activity log.</p>';
                return;
            }

            if (!activities || activities.length === 0) {
                container.innerHTML = '<p>No activities recorded yet for your clients.</p>';
                return;
            }

            container.innerHTML = activities.map(activity => `
                <div class="activity-item">
                    <div class="activity-icon">📝</div>
                    <div class="activity-content">
                        <div class="activity-description">${activity.description}</div>
                        <div class="activity-time">${new Date(activity.created_at).toLocaleString()}</div>
                        <div class="activity-metadata">Client: ${activity.teams.name} | Type: ${activity.activity_type}</div>
                    </div>
                </div>
            `).join('');
        } catch (error) {
            console.error('Error loading associate activities:', error);
            container.innerHTML = '<p>Error loading activity log.</p>';
        }
    }

    calculateSprintProgress(team) {
        const totalSprints = 30;
        
        // If graduated, show 30/30
        if (team.status === 'graduated') {
            return {
                current: 30,
                total: 30,
                percentage: 100,
                angle: 360
            };
        }
        
        // Calculate based on current module and sprint
        let currentSprint = 0;
        
        // Map modules to sprint ranges
        const moduleSprintMap = {
            0: { start: 1, count: 1 },    // Program WOOP
            1: { start: 2, count: 5 },    // Individual and Company Identity
            2: { start: 7, count: 6 },    // Core Performance Elements
            3: { start: 13, count: 2 },   // Market Understanding
            4: { start: 15, count: 5 },   // Strategy Development (+2 interview weeks)
            5: { start: 20, count: 6 },   // Strategy Execution (+1 testing week)
            6: { start: 26, count: 3 },   // Organizational Structure
            7: { start: 29, count: 3 },   // People and Leadership
            8: { start: 32, count: 3 },   // Tech and AI
            9: { start: 35, count: 1 }    // Closing sprint
        };
        
        if (team.currentModule !== undefined && moduleSprintMap[team.currentModule]) {
            const moduleInfo = moduleSprintMap[team.currentModule];
            currentSprint = moduleInfo.start;
            
            // If they're in a specific sprint within the module, add offset
            if (team.currentSprint && team.currentSprint !== 'Program WOOP') {
                // This is a simplified calculation - in reality you'd map specific sprint names
                currentSprint = Math.min(currentSprint + 1, totalSprints);
            }
        } else {
            // Default to 1 if no module info
            currentSprint = 1;
        }
        
        const percentage = Math.round((currentSprint / totalSprints) * 100);
        const angle = Math.round((currentSprint / totalSprints) * 360);
        
        return {
            current: currentSprint,
            total: totalSprints,
            percentage: percentage,
            angle: angle
        };
    }

    generateSprintProgressHTML(team) {
        const progress = this.calculateSprintProgress(team);
        const statusClass = team.status.replace(/[^a-zA-Z0-9]/g, '-');
        
        return `
            <div class="sprint-progress ${statusClass}" style="--progress-angle: ${progress.angle}deg;">
                <div class="sprint-progress-circle">
                    <div class="sprint-progress-text">${progress.current}/${progress.total}</div>
                </div>
            </div>
        `;
    }

    // Client Management Methods
    viewClientDetails(clientId) {
        console.log('=== viewClientDetails called ===');
        console.log('Looking for client with ID:', clientId);
        console.log('Teams array length:', this.teams.length);
        console.log('Available teams:', this.teams.map(t => ({ id: t.id, name: t.name })));
        console.log('Supabase initialized:', !!this.supabase);
        console.log('Current user:', this.currentUser);
        
        const client = this.teams.find(t => t.id === clientId);
        if (!client) {
            console.error('Client not found with ID:', clientId);
            console.log('All team IDs:', this.teams.map(t => t.id));
            alert('Client not found. Please try again.');
            return;
        }

        console.log('Found client:', client);
        this.selectedTeamForModal = client;
        console.log('About to call showClientManagementModal...');
        this.showClientManagementModal();
    }

    viewTeamSprintDetails(teamId) {
        console.log('=== viewTeamSprintDetails called ===');
        console.log('Looking for team with ID:', teamId);
        
        const team = this.teams.find(t => t.id === teamId);
        if (!team) {
            console.error('Team not found with ID:', teamId);
            alert('Team not found. Please try again.');
            return;
        }

        console.log('Found team:', team);
        this.selectedTeamForModal = team;
        this.showTeamSprintModal();
    }

    showTeamSprintModal() {
        const modal = document.getElementById('teamSprintModal');
        console.log('Looking for team sprint modal:', modal);
        if (modal) {
            modal.classList.remove('hidden');
            this.populateTeamSprintModal();
        } else {
            console.error('Team sprint modal not found!');
            alert('Modal not found. Please refresh the page and try again.');
        }
    }

    populateTeamSprintModal() {
        const team = this.selectedTeamForModal;
        if (!team) return;

        console.log('Populating team sprint modal for:', team);

        // Update modal title
        const titleElement = document.querySelector('#teamSprintModal h3');
        if (titleElement) {
            titleElement.textContent = `${team.name} - Module Progress Details`;
        }

        // Update top metrics
        const speedScoreElement = document.getElementById('teamSpeedScore');
        if (speedScoreElement) {
            speedScoreElement.textContent = team.startingDate || 'Not set';
        }

        const graduationElement = document.getElementById('teamGraduationTimeline');
        if (graduationElement) {
            graduationElement.textContent = team.graduation || 'Not set';
        }

        const delayElement = document.getElementById('teamDelayTracker');
        if (delayElement) {
            delayElement.textContent = `${team.delay || 0} days`;
        }

        const guruElement = document.getElementById('teamAssignedGuru');
        if (guruElement) {
            guruElement.textContent = team.guru || 'Not assigned';
        }

        // Update current sprint
        const currentSprintElement = document.getElementById('teamCurrentSprint');
        if (currentSprintElement) {
            currentSprintElement.innerHTML = `
                <div class="current-sprint-module">MODULE ${team.currentModule || 0}</div>
                <div class="current-sprint-name">${team.currentSprint || 'Not set'}</div>
                <div class="current-sprint-guru">Guru: ${team.guru || 'Not assigned'}</div>
            `;
        }

        // Update program journey
        this.populateTeamProgramJourney(team);
    }

    populateTeamProgramJourney(team) {
        const journeyContainer = document.getElementById('teamProgramJourney');
        if (!journeyContainer) return;

        const modules = [
            { id: 0, name: 'Intro Module', description: 'Program WOOP - Welcome, Outcomes, Obstacles, Plan', sprints: ['Program WOOP'] },
            { id: 1, name: 'Individual and Company Identity', description: 'Building foundation of self and team understanding', sprints: ['Know Thyself', 'Dream', 'Values', 'Team', 'FIT'] },
            { id: 2, name: 'Core Performance Elements', description: 'Understanding and implementing performance fundamentals', sprints: ['Current Cash Position', 'Goals, Priorities and Planning', 'Focus, Discipline & Productivity', 'Performance & Accountability', 'Meeting Rhythm'] },
            { id: 3, name: 'Strategy - Market Understanding', description: 'Understanding your market and competition', sprints: ['Market Size', 'Segmentation & Target Market'] },
            { id: 4, name: 'Strategy - Strategy Development', description: 'Developing your strategic approach', sprints: ['Target Segment Deep Dive', 'Value Proposition', 'Value Proposition Testing'] },
            { id: 5, name: 'Strategy - Execution', description: 'Executing your strategic plan', sprints: ['Product Development', 'Strategy Driven Pricing', 'Brand and Marketing', 'Route to Market'] },
            { id: 6, name: 'Organization & People - Structure', description: 'Building organizational structure', sprints: ['Define Core Activities', 'Define core processes', 'FIT & ABC Analysis'] },
            { id: 7, name: 'Organization & People - Leadership', description: 'Developing people and leadership', sprints: ['Organizational redesign', 'Employer Branding', 'Set Agile Teams'] },
            { id: 8, name: 'Organization & People - Tech & AI', description: 'Leveraging technology and AI', sprints: ['Tech and AI Options', 'Digitalization Decisions', 'AI Transformation'] },
            { id: 9, name: 'Closing Module', description: 'Program overview and next steps', sprints: ['Program Overview', 'Next 12 months Plan'] }
        ];

        const currentModule = team.currentModule || 0;
        
        journeyContainer.innerHTML = modules.map(module => {
            const isCurrent = module.id === currentModule;
            const isCompleted = module.id < currentModule;
            const statusClass = isCurrent ? 'current' : isCompleted ? 'completed' : 'upcoming';
            const statusIcon = isCompleted ? '✓' : isCurrent ? '●' : '○';
            const statusColor = isCompleted ? 'green' : isCurrent ? 'black' : 'gray';
            
            return `
                <div class="program-journey-item ${statusClass}">
                    <div class="journey-icon" style="color: ${statusColor}">${statusIcon}</div>
                    <div class="journey-content">
                        <div class="journey-title">${module.id} ${module.name}</div>
                        <div class="journey-description">${module.description}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    showClientManagementModal() {
        console.log('showClientManagementModal called');
        console.log('Document ready state:', document.readyState);
        console.log('All elements with id containing "clientManagement":', document.querySelectorAll('[id*="clientManagement"]'));
        
        const modal = document.getElementById('clientManagementModal');
        console.log('Looking for modal:', modal);
        console.log('Modal element:', modal);
        
        if (modal) {
            console.log('Modal found, showing...');
            modal.classList.remove('hidden');
            this.populateClientManagementForm();
        } else {
            console.error('Client management modal not found!');
            console.log('Available modals:', document.querySelectorAll('.modal'));
            console.log('All elements with id:', document.querySelectorAll('[id]'));
            alert('Modal not found. Please refresh the page and try again.');
        }
    }

    populateClientManagementForm() {
        const client = this.selectedTeamForModal;
        if (!client) return;

        console.log('Populating form for client:', client);

        // Populate form fields with status-based logic
        const fields = {
            'clientName': client.name,
            'clientCountry': client.countryCode || 'MU',
            'clientCEO': client.ceoName || '',
            'clientStartingDate': client.startingDate || '',
            'clientGraduationDate': client.graduationDate || '',
            'clientDelayTracker': client.delay || 0,
            'clientAssignedGuru': client.guru || '',
            'clientContact': client.mainContact || '',
            'clientWebsite': client.website || '',
            'clientModule': client.currentModule || 0,
            'clientSprint': client.currentSprint || '',
            'clientSpeed': this.getScoreDisplay(client, 'speed'),
            'clientQuality': this.getScoreDisplay(client, 'quality'),
            'clientStatus': client.status || 'starting-soon',
            'clientIndustry': client.industryType || '',
            'clientSize': client.companySize || '',
            'clientPriority': client.priorityLevel || 'Medium',
            'clientNotes': client.notes || ''
        };

        Object.entries(fields).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) {
                element.value = value;
            }
        });

        // Populate sprint details
        this.populateSprintDetails(client);

        // Load Fast Track tools
        this.loadFastTrackTools(client.id);
    }

    populateSprintDetails(client) {
        // Populate current sprint information
        const currentSprintName = document.getElementById('currentSprintName');
        const currentSprintGuru = document.getElementById('currentSprintGuru');
        
        if (currentSprintName) {
            currentSprintName.textContent = client.currentSprint || '-';
        }
        
        if (currentSprintGuru) {
            currentSprintGuru.textContent = client.guru || '-';
        }

        // Populate module timeline
        this.populateModuleTimeline(client);
        
        // Populate sprint details grid
        this.populateSprintDetailsGrid(client);
    }

    populateModuleTimeline(client) {
        const timelineContainer = document.getElementById('moduleTimeline');
        if (!timelineContainer) return;

        const modules = [
            { id: 0, name: 'Intro Module', sprints: ['Program WOOP'] },
            { id: 1, name: 'Individual and Company Identity', sprints: ['Know Thyself', 'Company Identity', 'Vision & Mission'] },
            { id: 2, name: 'Core Performance Elements', sprints: ['Performance Metrics', 'KPI Dashboard', 'Goal Setting'] },
            { id: 3, name: 'Strategy - Understanding the Market', sprints: ['Market Analysis', 'Competitor Research', 'SWOT Analysis'] },
            { id: 4, name: 'Strategy - Strategy Development', sprints: ['Strategic Planning', 'Business Model', 'Value Proposition'] },
            { id: 5, name: 'Strategy - Execution', sprints: ['Action Plans', 'Implementation', 'Monitoring'] },
            { id: 6, name: 'Organization & People - Structure', sprints: ['Org Chart', 'Roles & Responsibilities', 'Processes'] },
            { id: 7, name: 'Organization & People - Leadership', sprints: ['Leadership Development', 'Team Building', 'Communication'] },
            { id: 8, name: 'Organization & People - Tech & AI', sprints: ['Digital Transformation', 'AI Integration', 'Automation'] },
            { id: 9, name: 'Closing Module', sprints: ['Final Review', 'Graduation', 'Next Steps'] }
        ];

        const currentModule = client.currentModule || 0;
        
        timelineContainer.innerHTML = modules.map(module => {
            const isCurrent = module.id === currentModule;
            const isCompleted = module.id < currentModule;
            const statusClass = isCurrent ? 'current' : isCompleted ? 'completed' : 'upcoming';
            
            return `
                <div class="module-item ${statusClass}">
                    <div class="module-header">
                        <span class="module-number">${module.id}</span>
                        <span class="module-name">${module.name}</span>
                    </div>
                    <div class="module-sprints">
                        ${module.sprints.map(sprint => `
                            <div class="sprint-item ${sprint === client.currentSprint ? 'current-sprint' : ''}">
                                ${sprint}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('');
    }

    populateSprintDetailsGrid(client) {
        const gridContainer = document.getElementById('sprintDetailsGrid');
        if (!gridContainer) return;

        const sprintProgress = this.calculateSprintProgress(client);
        
        gridContainer.innerHTML = `
            <div class="sprint-detail-card">
                <h5>Current Progress</h5>
                <div class="progress-info">
                    <span class="progress-text">${sprintProgress.current}/${sprintProgress.total} Sprints</span>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${sprintProgress.percentage}%"></div>
                    </div>
                </div>
            </div>
            <div class="sprint-detail-card">
                <h5>Status</h5>
                <span class="status-badge status-${client.status}">${String(client.status || '').replace('-', ' ').toUpperCase()}</span>
            </div>
            <div class="sprint-detail-card">
                <h5>Speed Score</h5>
                <span class="score-value">${client.speed || 0}</span>
            </div>
            <div class="sprint-detail-card">
                <h5>Quality Score</h5>
                <span class="score-value">${client.qualityScore || 0}</span>
            </div>
        `;
    }

    async loadFastTrackTools(clientId) {
        try {
            const { data: tools, error } = await this.supabase
                .from('fast_track_tools')
                .select('*')
                .eq('team_id', clientId)
                .order('created_at', { ascending: true });

            if (error) {
                console.error('Error loading Fast Track tools:', error);
                return;
            }

            this.populateFastTrackTools(tools || []);
        } catch (error) {
            console.error('Error loading Fast Track tools:', error);
        }
    }

    populateFastTrackTools(tools) {
        const container = document.getElementById('fastTrackToolsContainer');
        if (!container) return;

        if (tools.length === 0) {
            container.innerHTML = '<p>No Fast Track tools added yet. Click "Add New Tool" to get started.</p>';
            return;
        }

        container.innerHTML = tools.map(tool => `
            <div class="fast-track-tool-item">
                <div class="fast-track-tool-header">
                    <div class="fast-track-tool-sprint">${tool.sprint_name}</div>
                    <div class="fast-track-tool-actions">
                        <button class="btn btn--outline btn--sm" onclick="app.editFastTrackTool('${tool.id}')">Edit</button>
                        <button class="btn btn--secondary btn--sm" onclick="app.deleteFastTrackTool('${tool.id}')">Delete</button>
                    </div>
                </div>
                <textarea class="fast-track-tool-instructions" readonly>${tool.tool_instructions || ''}</textarea>
            </div>
        `).join('');
    }

    async saveClientChanges() {
        console.log('saveClientChanges called');
        const client = this.selectedTeamForModal;
        if (!client) {
            console.log('No client selected for modal');
            return;
        }
        if (!this.currentAssociate) {
            console.error('No associate logged in');
            console.log('Current state:', {
                isAssociate: this.isAssociate,
                currentAssociate: this.currentAssociate,
                currentUser: this.currentUser
            });
            alert('Error: No associate logged in. Please log in again.');
            return;
        }
        console.log('Saving changes for client:', client.name);

        const formData = {
            name: document.getElementById('clientName').value,
            country: document.getElementById('clientCountry').value,
            country_code: document.getElementById('clientCountry').value,
            ceo_name: document.getElementById('clientCEO').value,
            starting_date: document.getElementById('clientStartingDate').value || null,
            graduation_date: document.getElementById('clientGraduationDate').value || null,
            delay_days: parseInt(document.getElementById('clientDelayTracker').value) || 0,
            guru: document.getElementById('clientAssignedGuru').value,
            main_contact: document.getElementById('clientContact').value,
            website: document.getElementById('clientWebsite').value,
            current_module: parseInt(document.getElementById('clientModule').value),
            current_sprint: document.getElementById('clientSprint').value,
            status: parseInt(document.getElementById('clientSpeed').value) || 0, // speed score (numeric)
            quality_score: parseInt(document.getElementById('clientQuality').value) || 0,
            speed_score: document.getElementById('clientStatus').value, // status text (like "on-time")
            // Enhanced client profile fields
            industry_type: document.getElementById('clientIndustry').value,
            company_size: document.getElementById('clientSize').value,
            priority_level: document.getElementById('clientPriority').value,
            notes: document.getElementById('clientNotes').value
        };

        try {
            // Only update database if not using temporary ID
            if (!client.id.includes('temp-id')) {
                const { error } = await this.supabase
                    .from('teams')
                    .update(formData)
                    .eq('id', client.id);

                if (error) {
                    console.error('Error updating client:', error);
                    alert('Error updating client. Please try again.');
                    return;
                }
            }

            // Update local data
            Object.assign(client, formData);

            // Check if speed or quality scores were updated
            const speedChanged = formData.status !== undefined;
            const qualityChanged = formData.quality_score !== undefined;
            
            if (speedChanged || qualityChanged) {
                // Recalculate all team positions based on new scores
                this.recalculateTeamPositions();
                
                // Update positions in database if not temporary
                if (!client.id.includes('temp-id')) {
                    const updatedClient = this.teams.find(t => t.id === client.id);
                    await this.supabase
                        .from('teams')
                        .update({ 
                            weekly_rank: updatedClient.position,
                            previous_position: updatedClient.previousPosition
                        })
                        .eq('id', client.id);
                }
            }

            // Log activity (only if not temporary)
            if (this.currentAssociate && !this.currentAssociate.id.includes('temp-id')) {
                const logMessage = speedChanged || qualityChanged ? 
                    `Updated client ${client.name} - Scores changed, new position: ${client.position}` :
                    `Updated client ${client.name}`;
                    
                await this.logAssociateActivity(this.currentAssociate.id, 'client_updated', 
                    logMessage, { clientId: client.id, changes: formData });
                
                // Also log team activity
                await this.logTeamActivity(client.id, 'client_updated', 
                    `Client updated by ${this.currentAssociate.name}`, { 
                        clientName: client.name, 
                        associateId: this.currentAssociate.id,
                        changes: formData 
                    });
            }

            // Refresh the associate dashboard
            this.populateAssociateDashboard();

            // Update the performance chart if we're on the team dashboard
            if (this.currentUser && !this.isAdmin && !this.isAssociate) {
                this.populatePerformanceChart();
            }

            const successMessage = speedChanged || qualityChanged ? 
                `Client updated successfully!\nNew position: ${client.position}` :
                'Client updated successfully!';
                
            alert(successMessage);
            this.hideAllModals();
        } catch (error) {
            console.error('Error updating client:', error);
            alert('Error updating client. Please try again.');
        }
    }

    async deleteClient() {
        const client = this.selectedTeamForModal;
        if (!client) {
            console.log('No client selected for deletion');
            return;
        }
        
        if (!this.currentAssociate) {
            console.error('No associate logged in');
            alert('Error: No associate logged in. Please log in again.');
            return;
        }

        // Double confirmation for safety
        const confirmMessage = `Are you sure you want to delete "${client.name}"? This action cannot be undone.`;
        if (!confirm(confirmMessage)) {
            return;
        }

        const finalConfirm = `FINAL WARNING: This will permanently delete "${client.name}" and all associated data. Type "DELETE" to confirm:`;
        const userInput = prompt(finalConfirm);
        if (userInput !== "DELETE") {
            alert('Deletion cancelled.');
            return;
        }

        try {
            console.log('Deleting client:', client.name);

            // Delete from database if client has an ID
            if (client.id && !client.id.includes('temp-id')) {
                const { error } = await this.supabase
                    .from('teams')
                    .delete()
                    .eq('id', client.id);

                if (error) {
                    console.error('Error deleting client from database:', error);
                    alert('Error deleting client from database. Please try again.');
                    return;
                }
            }

            // Remove from local teams array
            const clientIndex = this.teams.findIndex(t => t.id === client.id || t.name === client.name);
            if (clientIndex !== -1) {
                this.teams.splice(clientIndex, 1);
            }

            // Log activity
            await this.logAssociateActivity(this.currentAssociate.id, 'client_deleted', 
                `Deleted client: ${client.name}`, { clientId: client.id, clientName: client.name });

            // Close modal and refresh dashboard
            this.hideAllModals();
            this.populateAssociateDashboard();
            
            alert(`Client "${client.name}" has been deleted successfully.`);
        } catch (error) {
            console.error('Error deleting client:', error);
            alert('Error deleting client. Please try again.');
        }
    }

    async addFastTrackTool() {
        const client = this.selectedTeamForModal;
        if (!client) return;

        const sprintName = prompt('Enter sprint name for this tool:');
        if (!sprintName) return;

        const instructions = prompt('Enter Fast Track tool instructions:');
        if (!instructions) return;

        try {
            // For hardcoded data, add to local array
            if (client.id.includes('temp-id') || client.id.includes('temp-client')) {
                const newInstruction = {
                    id: `instruction-${Date.now()}`,
                    sprintName: sprintName,
                    instructions: instructions,
                    createdAt: new Date().toISOString(),
                    createdBy: this.currentAssociate.name
                };
                
                if (!client.fastTrackInstructions) {
                    client.fastTrackInstructions = [];
                }
                client.fastTrackInstructions.push(newInstruction);
                
                // Refresh the tools display
                this.populateFastTrackTools(client.fastTrackInstructions);
                alert('Fast Track tool added successfully!');
                return;
            }

            // Database operation for real clients
            const { data, error } = await this.supabase
                .from('fast_track_tools')
                .insert([
                    {
                        team_id: client.id,
                        sprint_name: sprintName,
                        module_number: client.currentModule,
                        tool_instructions: instructions,
                        created_by: this.currentAssociate.id
                    }
                ])
                .select();

            if (error) {
                console.error('Error adding Fast Track tool:', error);
                alert('Error adding tool. Please try again.');
                return;
            }

            // Log activity
            await this.logAssociateActivity(this.currentAssociate.id, 'fast_track_tool_added', 
                `Added Fast Track tool for ${client.name} - ${sprintName}`, { clientId: client.id, toolId: data[0].id });
            
            // Also log team activity
            await this.logTeamActivity(client.id, 'fast_track_tool_added', 
                `Fast Track tool added by ${this.currentAssociate.name} - ${sprintName}`, { 
                    clientName: client.name, 
                    associateId: this.currentAssociate.id,
                    toolId: data[0].id,
                    sprintName: sprintName 
                });

            // Reload tools
            this.loadFastTrackTools(client.id);
            alert('Fast Track tool added successfully!');
        } catch (error) {
            console.error('Error adding Fast Track tool:', error);
            alert('Error adding tool. Please try again.');
        }
    }

    async deleteFastTrackTool(toolId) {
        if (!confirm('Are you sure you want to delete this Fast Track tool?')) return;

        try {
            const { error } = await this.supabase
                .from('fast_track_tools')
                .delete()
                .eq('id', toolId);

            if (error) {
                console.error('Error deleting Fast Track tool:', error);
                alert('Error deleting tool. Please try again.');
                return;
            }

            // Log activity
            await this.logAssociateActivity(this.currentAssociate.id, 'fast_track_tool_deleted', 
                `Deleted Fast Track tool`, { toolId });

            // Reload tools
            this.loadFastTrackTools(this.selectedTeamForModal.id);
            alert('Fast Track tool deleted successfully!');
        } catch (error) {
            console.error('Error deleting Fast Track tool:', error);
            alert('Error deleting tool. Please try again.');
        }
    }

    switchClientManagementTab(tabName) {
        // Remove active class from all tabs and buttons
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // Add active class to selected tab and button
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        document.getElementById(`${tabName}Tab`).classList.add('active');
    }

    // Add Client Modal Methods
    showAddClientModal() {
        const modal = document.getElementById('addClientModal');
        if (modal) {
            modal.classList.remove('hidden');
            this.populateAddClientForm();
        }
    }

    populateAddClientForm() {
        // Set default values
        const fields = {
            'newClientName': '',
            'newClientCountry': 'MU',
            'newClientCEO': '',
            'newClientContact': '',
            'newClientWebsite': '',
            'newClientStatus': 'starting-soon',
            'newClientModule': '0',
            'newClientSprint': 'Program WOOP',
            'newClientSpeed': '70'
        };

        Object.entries(fields).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) {
                element.value = value;
            }
        });
    }

    async createNewClient() {
        const formData = {
            name: document.getElementById('newClientName').value.trim(),
            country: document.getElementById('newClientCountry').value,
            ceoName: document.getElementById('newClientCEO').value.trim(),
            startingDate: document.getElementById('newClientStartingDate').value,
            mainContact: document.getElementById('newClientContact').value.trim(),
            website: document.getElementById('newClientWebsite').value.trim(),
            status: document.getElementById('newClientStatus').value,
            currentModule: parseInt(document.getElementById('newClientModule').value),
            currentSprint: document.getElementById('newClientSprint').value,
            speed: parseInt(document.getElementById('newClientSpeed').value)
        };

        if (!formData.name) {
            alert('Please enter a client name');
            return;
        }

        // Generate access code
        const accessCode = this.generateClientAccessCode(formData.name);
        
        // Get country info
        const countryCode = formData.country;
        const countryName = this.getCountryNameFromCode(countryCode);

        try {
            // First, try to save to Supabase database with all fields
            const { data, error } = await this.supabase
                .from('teams')
                .insert([
                    {
                        name: formData.name,
                        access_code: accessCode,
                        weekly_score: Math.floor(Math.random() * 40) + 60, // weekly_score unchanged
                        quality_score: Math.floor(Math.random() * 40) + 60, // quality_score unchanged
                        status: formData.speed, // speed renamed to status
                        sprint: formData.currentSprint,
                        speed_score: formData.status, // status renamed to speed_score
                        weekly_rank: this.teams.length + 1, // position renamed to weekly_rank
                        previous_position: this.teams.length + 1,
                        graduation: "TBD",
                        graduation_date: formData.startingDate || null,
                        delay_days: 0,
                        starting_date: formData.startingDate || null,
                        current_module: formData.currentModule,
                        current_sprint: formData.currentSprint,
                        completed_sprints: [],
                        guru: this.currentAssociate.name,
                        associate_id: this.currentAssociate.id,
                        country: countryName,
                        country_code: countryCode,
                        ceo_name: formData.ceoName,
                        main_contact: formData.mainContact,
                        website: formData.website,
                        industry_type: "Not specified",
                        company_size: "Small (1-50 employees)",
                        priority_level: "Medium",
                        notes: "New client created by " + this.currentAssociate.name
                    }
                ])
                .select();

            if (error) {
                console.error('Error saving client to database:', error);
                console.error('Error details:', error);
                
                // If database save fails, create client locally and show warning
                console.log('Creating client locally due to database error');
                
                const newClient = {
                    id: `temp-client-${Date.now()}`,
                    name: formData.name,
                    accessCode: accessCode,
                    weeklyScore: Math.floor(Math.random() * 40) + 60,
                    qualityScore: Math.floor(Math.random() * 40) + 60,
                    speed: formData.speed,
                    sprint: formData.currentSprint,
                    status: formData.status,
                    position: this.teams.length + 1,
                    previousPosition: this.teams.length + 1,
                    graduation: "TBD",
                    delay: 0,
                    currentModule: formData.currentModule,
                    currentSprint: formData.currentSprint,
                    completedSprints: [],
                    guru: this.currentAssociate.name,
                    associateId: this.currentAssociate.id,
                    country: countryName,
                    countryCode: countryCode,
                    ceoName: formData.ceoName,
                    startingDate: formData.startingDate || null,
                    mainContact: formData.mainContact,
                    website: formData.website,
                    industryType: "Not specified",
                    companySize: "Small (1-50 employees)",
                    priorityLevel: "Medium",
                    notes: "New client created by " + this.currentAssociate.name,
                    fastTrackInstructions: []
                };

                // Add to teams array
                this.teams.push(newClient);

                // Refresh the associate dashboard
                this.populateAssociateDashboard();

                alert(`Client "${formData.name}" created successfully!\nAccess Code: ${accessCode}\n\nNote: Client saved locally. Database connection issue detected.`);
                this.hideAllModals();
                return;
            }

            // If successful, create the client object with the database ID
            const newClient = {
                id: data[0].id, // Use the database ID
                name: formData.name,
                accessCode: accessCode,
                weeklyScore: data[0].weekly_score,
                qualityScore: data[0].quality_score,
                speed: formData.speed,
                sprint: formData.currentSprint,
                status: formData.status,
                position: data[0].position,
                previousPosition: data[0].previous_position,
                graduation: "TBD",
                delay: 0,
                currentModule: formData.currentModule,
                currentSprint: formData.currentSprint,
                completedSprints: [],
                guru: this.currentAssociate.name,
                associateId: this.currentAssociate.id,
                country: countryName,
                countryCode: countryCode,
                ceoName: formData.ceoName,
                mainContact: formData.mainContact,
                website: formData.website,
                // Enhanced client profile fields
                industryType: "Not specified",
                companySize: "Small (1-50 employees)",
                priorityLevel: "Medium",
                notes: "New client created by " + this.currentAssociate.name,
                fastTrackInstructions: []
            };

            // Add to teams array
            this.teams.push(newClient);

            // Recalculate positions for all teams (including the new one)
            this.recalculateTeamPositions();

            // Update positions in database for all teams
            for (const team of this.teams) {
                if (!team.id.includes('temp-id')) {
                    await this.supabase
                        .from('teams')
                        .update({ 
                            weekly_rank: team.position,
                            previous_position: team.previousPosition
                        })
                        .eq('id', team.id);
                }
            }

            // Log the activity
            await this.logAssociateActivity(this.currentAssociate.id, 'client_created', `Created new client: ${formData.name}`, {
                clientId: data[0].id,
                clientName: formData.name,
                accessCode: accessCode
            });
            await this.logTeamActivity(data[0].id, 'client_created', `New client created by ${this.currentAssociate.name}`, { 
                clientName: formData.name, 
                associateId: this.currentAssociate.id 
            });

            // Refresh the associate dashboard
            this.populateAssociateDashboard();

            alert(`Client "${formData.name}" created successfully!\nAccess Code: ${accessCode}\n\nClient can now log in using this access code.`);
            this.hideAllModals();

        } catch (error) {
            console.error('Error creating client:', error);
            console.error('Error details:', {
                message: error.message,
                details: error.details,
                hint: error.hint,
                code: error.code
            });
            
            // Create client locally as fallback
            const newClient = {
                id: `temp-client-${Date.now()}`,
                name: formData.name,
                accessCode: accessCode,
                weeklyScore: Math.floor(Math.random() * 40) + 60,
                qualityScore: Math.floor(Math.random() * 40) + 60,
                speed: formData.speed,
                sprint: formData.currentSprint,
                status: formData.status,
                position: this.teams.length + 1,
                previousPosition: this.teams.length + 1,
                graduation: "TBD",
                delay: 0,
                currentModule: formData.currentModule,
                currentSprint: formData.currentSprint,
                completedSprints: [],
                guru: this.currentAssociate.name,
                associateId: this.currentAssociate.id,
                country: countryName,
                countryCode: countryCode,
                ceoName: formData.ceoName,
                startingDate: formData.startingDate || null,
                mainContact: formData.mainContact,
                website: formData.website,
                industryType: "Not specified",
                companySize: "Small (1-50 employees)",
                priorityLevel: "Medium",
                notes: "New client created by " + this.currentAssociate.name,
                fastTrackInstructions: []
            };

            // Add to teams array
            this.teams.push(newClient);

            // Refresh the associate dashboard
            this.populateAssociateDashboard();

            alert(`Client "${formData.name}" created successfully!\nAccess Code: ${accessCode}\n\nNote: Client saved locally due to database connection issues.`);
            this.hideAllModals();
        }
    }

    generateClientAccessCode(clientName) {
        // Generate a simple access code based on client name
        const prefix = clientName.replace(/[^a-zA-Z0-9]/g, '').substring(0, 3).toUpperCase();
        const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        return `${prefix}${random}`;
    }

    getCountryNameFromCode(countryCode) {
        const countryMap = {
            'MU': 'Mauritius', 'LV': 'Latvia', 'KE': 'Kenya', 'GT': 'Guatemala', 'IT': 'Italy', 'EE': 'Estonia',
            'LK': 'Sri Lanka', 'PL': 'Poland', 'MX': 'Mexico', 'AT': 'Austria', 'AE': 'UAE', 'RO': 'Romania'
        };
        return countryMap[countryCode] || 'Mauritius';
    }

    recalculateTeamPositions() {
        console.log('Recalculating team positions based on scores...');
        
        // Store previous positions for trend calculation
        this.teams.forEach(team => {
            team.previousPosition = team.position;
        });

        // Sort teams by combined score (speed + quality) in descending order
        // Higher scores = better position (lower position number)
        const sortedTeams = [...this.teams].sort((a, b) => {
            const scoreA = (a.speed || 0) + (a.qualityScore || 0);
            const scoreB = (b.speed || 0) + (b.qualityScore || 0);
            
            // If scores are equal, sort by speed as tiebreaker
            if (scoreA === scoreB) {
                return (b.speed || 0) - (a.speed || 0);
            }
            
            return scoreB - scoreA;
        });

        // Assign new positions
        sortedTeams.forEach((team, index) => {
            team.position = index + 1;
        });

        console.log('New positions calculated:', sortedTeams.map(t => `${t.name}: ${t.position} (Score: ${(t.speed || 0) + (t.qualityScore || 0)})`));
        
        return sortedTeams;
    }

    // Manual function to recalculate all positions (useful for testing or admin use)
    async recalculateAllPositions() {
        console.log('Manually recalculating all team positions...');
        
        // Recalculate positions
        this.recalculateTeamPositions();
        
        // Update all positions in database
        for (const team of this.teams) {
            if (!team.id.includes('temp-id')) {
                try {
                    await this.supabase
                        .from('teams')
                        .update({ 
                            weekly_rank: team.position,
                            previous_position: team.previousPosition
                        })
                        .eq('id', team.id);
                } catch (error) {
                    console.error(`Error updating position for team ${team.name}:`, error);
                }
            }
        }
        
        // Refresh all dashboards
        this.populateAssociateDashboard();
        this.populateAdminDashboard();
        
        console.log('All positions recalculated and updated in database');
        alert('All team positions have been recalculated based on current scores!');
    }

    quickUpdateScores(team) {
        const newSpeed = prompt(`Update Speed Score for ${team.name} (current: ${team.speed}):`, team.speed);
        if (newSpeed === null) return;
        
        const newQuality = prompt(`Update Quality Score for ${team.name} (current: ${team.qualityScore}):`, team.qualityScore);
        if (newQuality === null) return;

        const speedNum = parseInt(newSpeed);
        const qualityNum = parseInt(newQuality);

        if (isNaN(speedNum) || isNaN(qualityNum) || speedNum < 0 || speedNum > 100 || qualityNum < 0 || qualityNum > 100) {
            alert('Please enter valid scores between 0 and 100');
            return;
        }

        // Update the team data
        team.speed = speedNum;
        team.qualityScore = qualityNum;

        // Recalculate all team positions based on new scores
        this.recalculateTeamPositions();

        // Update in database if not temporary
        if (!team.id.includes('temp-id')) {
            // Update scores and positions in database
            const updatedTeam = this.teams.find(t => t.id === team.id);
            this.supabase
                .from('teams')
                .update({ 
                    status: speedNum, // speed renamed to status
                    quality_score: qualityNum,
                    weekly_rank: updatedTeam.position, // position renamed to weekly_rank
                    previous_position: updatedTeam.previousPosition
                })
                .eq('id', team.id)
                .then(({ error }) => {
                    if (error) {
                        console.error('Error updating scores:', error);
                        alert('Error updating scores in database');
                        return;
                    }
                    
                    // Log activity
                    this.logTeamActivity(team.id, 'scores_updated', 
                        `Scores updated by ${this.currentAssociate.name} - Speed: ${speedNum}, Quality: ${qualityNum}, New Position: ${updatedTeam.position}`, { 
                            clientName: team.name, 
                            associateId: this.currentAssociate.id,
                            newSpeed: speedNum,
                            newQuality: qualityNum,
                            newPosition: updatedTeam.position,
                            previousPosition: updatedTeam.previousPosition
                        });
                });
        }

        // Update the chart
        this.populatePerformanceChart();
        
        // Refresh associate dashboard
        this.populateAssociateDashboard();

        const updatedTeam = this.teams.find(t => t.id === team.id);
        const positionChange = updatedTeam.previousPosition - updatedTeam.position;
        const positionText = positionChange > 0 ? `↑${positionChange}` : positionChange < 0 ? `↓${Math.abs(positionChange)}` : '→';
        
        alert(`Scores updated for ${team.name}!\nSpeed: ${speedNum}\nQuality: ${qualityNum}\nNew Position: ${updatedTeam.position} ${positionText}`);
    }

    populatePodium() {
        const podiumContainer = document.getElementById('podiumContainer');
        if (!podiumContainer) return;

        const topThree = [...this.teams]
            .sort((a, b) => a.position - b.position)
            .slice(0, 3);

        podiumContainer.innerHTML = topThree.map((team, index) => {
            const classes = ['podium-first', 'podium-second', 'podium-third'];
            const medals = ['🥇', '🥈', '🥉'];
            
            return `
                <div class="podium-item ${classes[index]}">
                    <div class="podium-position">${medals[index]}</div>
                    <div class="podium-team">${team.name}</div>
                    <div class="podium-score">Score: ${team.weeklyScore}</div>
                </div>
            `;
        }).join('');
    }

    populatePerformanceChart() {
        const canvas = document.getElementById('performanceChart');
        if (!canvas) return;

        // Destroy existing chart if it exists
        if (this.performanceChart) {
            this.performanceChart.destroy();
        }

        // Sort teams by position for better visualization
        const sortedTeams = [...this.teams].sort((a, b) => a.position - b.position);
        
        // Prepare data for the chart
        const labels = sortedTeams.map(team => team.name);
        const speedData = sortedTeams.map(team => team.speed);
        const qualityData = sortedTeams.map(team => team.qualityScore);
        const statusData = sortedTeams.map(team => team.status);
        const positionData = sortedTeams.map(team => team.position);

        // Color mapping for status
        const statusColors = {
            'on-time': '#10B981',      // Green
            'in-delay': '#EF4444',     // Red
            'graduated': '#4B5563',    // Dark Grey
            'starting-soon': '#D1D5DB' // Light Grey
        };

        // Create background colors based on status
        const speedBackgroundColors = statusData.map(status => statusColors[status] + '80'); // 50% opacity
        const qualityBackgroundColors = statusData.map(status => statusColors[status] + '40'); // 25% opacity

        // Create the chart
        const ctx = canvas.getContext('2d');
        this.performanceChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Speed Score',
                        data: speedData,
                        backgroundColor: speedBackgroundColors,
                        borderColor: statusData.map(status => statusColors[status]),
                        borderWidth: 2,
                        borderRadius: 4,
                        borderSkipped: false,
                    },
                    {
                        label: 'Quality Score',
                        data: qualityData,
                        backgroundColor: qualityBackgroundColors,
                        borderColor: statusData.map(status => statusColors[status]),
                        borderWidth: 2,
                        borderRadius: 4,
                        borderSkipped: false,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Client Performance Overview',
                        font: {
                            size: 18,
                            weight: 'bold'
                        },
                        color: '#1F2937',
                        padding: 20
                    },
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 20,
                            font: {
                                size: 14
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            title: function(context) {
                                return context[0].label;
                            },
                            label: function(context) {
                                const teamIndex = context.dataIndex;
                                const team = sortedTeams[teamIndex];
                                return [
                                    `Position: #${team.position}`,
                                    `Speed: ${context.parsed.y}`,
                                    `Quality: ${context.datasetIndex === 0 ? team.qualityScore : team.speed}`,
                                    `Status: ${team.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}`
                                ];
                            }
                        },
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        borderColor: '#374151',
                        borderWidth: 1,
                        cornerRadius: 8
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Clients',
                            font: {
                                size: 14,
                                weight: 'bold'
                            },
                            color: '#374151'
                        },
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#6B7280',
                            maxRotation: 45,
                            minRotation: 45
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Score (0-100)',
                            font: {
                                size: 14,
                                weight: 'bold'
                            },
                            color: '#374151'
                        },
                        min: 0,
                        max: 100,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            color: '#6B7280',
                            stepSize: 20
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                onClick: (event, elements) => {
                    if (elements.length > 0) {
                        const element = elements[0];
                        const teamIndex = element.index;
                        const team = sortedTeams[teamIndex];
                        if (team) {
                            this.viewClientDetails(team.id);
                        }
                    }
                },
                onDoubleClick: (event, elements) => {
                    if (elements.length > 0) {
                        const element = elements[0];
                        const teamIndex = element.index;
                        const team = sortedTeams[teamIndex];
                        if (team && this.isAssociate) {
                            this.quickUpdateScores(team);
                        }
                    }
                },
                layout: {
                    padding: {
                        top: 20,
                        bottom: 20
                    }
                }
            }
        });
    }

    populateClientLeaderboard() {
        const tbody = document.getElementById('clientLeaderboardBody');
        if (!tbody) return;
        
        // Sort teams: active teams by position, then starting-soon teams at bottom
        const sortedTeams = [...this.teams].sort((a, b) => {
            // If both are starting-soon, sort by position
            if (a.status === 'starting-soon' && b.status === 'starting-soon') {
                return a.position - b.position;
            }
            // If only a is starting-soon, put it at bottom
            if (a.status === 'starting-soon') {
                return 1;
            }
            // If only b is starting-soon, put it at bottom
            if (b.status === 'starting-soon') {
                return -1;
            }
            // Both are active teams, sort by position
            return a.position - b.position;
        });

        tbody.innerHTML = sortedTeams.map(team => {
            const trendClass = team.position < team.previousPosition ? 'position-trend-up' : 
                              team.position > team.previousPosition ? 'position-trend-down' : 'position-trend-same';
            const trendSymbol = team.position < team.previousPosition ? '↑' : 
                               team.position > team.previousPosition ? '↓' : '→';

            // Get sprint display and scores using helper functions
            const sprintDisplay = this.getSprintDisplay(team);
            const speedScore = this.getScoreDisplay(team, 'speed');
            const qualityScore = this.getScoreDisplay(team, 'quality');

            return `
                <tr>
                    <td class="position-cell ${trendClass}">
                        ${team.position} ${trendSymbol}
                    </td>
                    <td>
                        <strong>${team.name}</strong>
                    </td>
                    <td>${this.getCountryName(team.countryCode)}</td>
                    <td>
                        <div class="sprint-progress sprint-${sprintDisplay.color}">
                            ${sprintDisplay.display}
                        </div>
                    </td>
                    <td>
                        <div class="speed-score">${speedScore}</div>
                    </td>
                    <td>${qualityScore}</td>
                    <td>
                        <span class="status-badge status-${team.status.replace(/[^a-zA-Z0-9]/g, '-')}">${this.formatStatus(team.status)}</span>
                    </td>
                    <td>
                        ${team.id === this.currentUser?.id ? 
                            '<button class="btn btn--outline btn--sm" onclick="console.log(\'VIEW button clicked for:\', \'' + team.id + '\'); app.viewTeamSprintDetails(\'' + team.id + '\')">VIEW</button>' : 
                            '<span class="text-muted">-</span>'
                        }
                    </td>
                </tr>
            `;
        }).join('');
    }

    populateLeaderboard() {
        const tbody = document.getElementById('leaderboardBody');
        if (!tbody) return;
        
        // Sort teams: active teams by position, then starting-soon teams at bottom
        const sortedTeams = [...this.teams].sort((a, b) => {
            // If both are starting-soon, sort by position
            if (a.status === 'starting-soon' && b.status === 'starting-soon') {
                return a.position - b.position;
            }
            // If only a is starting-soon, put it at bottom
            if (a.status === 'starting-soon') {
                return 1;
            }
            // If only b is starting-soon, put it at bottom
            if (b.status === 'starting-soon') {
                return -1;
            }
            // Both are active teams, sort by position
            return a.position - b.position;
        });

        tbody.innerHTML = sortedTeams.map(team => {
            const trendClass = team.position < team.previousPosition ? 'position-trend-up' : 
                              team.position > team.previousPosition ? 'position-trend-down' : 'position-trend-same';
            const trendSymbol = team.position < team.previousPosition ? '↑' : 
                               team.position > team.previousPosition ? '↓' : '→';

            // Get sprint display and scores using helper functions
            const sprintDisplay = this.getSprintDisplay(team);
            const speedScore = this.getScoreDisplay(team, 'speed');
            const qualityScore = this.getScoreDisplay(team, 'quality');

            return `
                <tr>
                    <td class="position-cell ${trendClass}">
                        ${team.position} ${trendSymbol}
                    </td>
                    <td>
                        <strong>${team.name}</strong>
                    </td>
                    <td>${this.getCountryName(team.countryCode || team.country)}</td>
                    <td>
                        <div class="sprint-progress sprint-${sprintDisplay.color}">
                            ${sprintDisplay.display}
                        </div>
                    </td>
                    <td>
                        <div class="speed-score">${speedScore}</div>
                    </td>
                    <td>${qualityScore}</td>
                    <td>
                        <span class="status-badge status-${String(team.status || '').replace(/[^a-zA-Z0-9]/g, '-')}">${this.formatStatus(team.status)}</span>
                    </td>
                    <td>
                        <button class="btn btn--outline btn--sm" onclick="app.viewTeamDetails('${team.accessCode}')">
                            VIEW
                        </button>
                    </td>
                </tr>
            `;
        }).join('');
    }

    populateAnalytics() {
        const teamsOnTrack = this.teams.filter(t => t.status === 'on-time' || t.status === 'progress-meeting').length;
        const teamsInDelay = this.teams.filter(t => t.status === 'in-delay').length;
        const averageSpeed = (this.teams.reduce((sum, team) => sum + team.speed, 0) / this.teams.length).toFixed(1);
        const newTeamsJoining = this.newTeamsJoiningCount || 0;

        const elements = {
            'teamsOnTrack': teamsOnTrack,
            'averageSpeed': averageSpeed,
            'teamsInDelay': teamsInDelay,
            'newTeamsJoining': newTeamsJoining
        };

        Object.entries(elements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) {
                if (id === 'newTeamsJoining') {
                    // Make "New Teams Joining" editable for admin
                    element.innerHTML = `
                        <span id="newTeamsJoiningDisplay">${value}</span>
                        <button class="btn btn--outline btn--sm" onclick="app.editNewTeamsJoining()" style="margin-left: 8px;">
                            Edit
                        </button>
                    `;
                } else {
                    element.textContent = value;
                }
            }
        });
    }

    populateCodeManagement() {
        const codeList = document.getElementById('codeList');
        if (!codeList) return;
        
        codeList.innerHTML = this.teams.map(team => `
            <div class="code-item">
                <div class="code-info">
                    <div class="code-team-name">${team.name}</div>
                    <div class="code-value">${team.accessCode}</div>
                </div>
                <div class="code-actions">
                    <button class="btn btn--outline btn--sm" onclick="app.regenerateCode('${team.accessCode}')">
                        Regenerate
                    </button>
                    <button class="btn btn--secondary btn--sm" onclick="app.deactivateCode('${team.accessCode}')">
                        Deactivate
                    </button>
                </div>
            </div>
        `).join('');
    }

    populateProgressModal() {
        const team = this.selectedTeamForModal || this.currentUser;
        if (!team) return;

        // Set basic info
        const elements = {
            'modalTeamName': `${team.name} - Program Progress Details`,
            'modalSpeed': team.speed,
            'modalGraduation': team.graduation,
            'modalDelay': team.delay > 0 ? `${team.delay} days` : '0 days',
            'modalGuru': team.guru,
            'currentModuleNum': team.currentModule,
            'currentSprintName': team.currentSprint,
            'currentSprintGuru': team.guru
        };

        Object.entries(elements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) element.textContent = value;
        });

        this.generateModuleTimeline(team);
        this.generateSprintDetails(team);
    }

    generateModuleTimeline(team) {
        const timelineContainer = document.getElementById('moduleTimeline');
        if (!timelineContainer) return;
        
        timelineContainer.innerHTML = this.moduleStructure.map(module => {
            let status = 'upcoming';
            if (module.number < team.currentModule) {
                status = 'completed';
            } else if (module.number === team.currentModule) {
                status = 'current';
            }

            return `
                <div class="module-item ${status}">
                    <div class="module-number">${module.number}</div>
                    <div class="module-content">
                        <div class="module-title">${module.title}</div>
                        <div class="module-description">${module.description}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    generateSprintDetails(team) {
        const sprintContainer = document.getElementById('sprintDetailsGrid');
        if (!sprintContainer) return;

        let allSprints = [];
        
        this.moduleStructure.forEach(module => {
            if (module.number <= team.currentModule) {
                module.sprints.forEach(sprint => {
                    let status = 'upcoming';
                    if (team.completedSprints.includes(sprint)) {
                        status = 'completed';
                    } else if (sprint === team.currentSprint) {
                        status = 'current';
                    }

                    allSprints.push({
                        name: sprint,
                        module: module.number,
                        moduleTitle: module.title,
                        guru: module.gurus[0] || 'TBA',
                        status: status
                    });
                });
            }
        });

        sprintContainer.innerHTML = allSprints.map(sprint => `
            <div class="sprint-detail-card">
                <div class="sprint-detail-header">
                    <div>
                        <div class="sprint-detail-title">${sprint.name}</div>
                        <div class="sprint-detail-guru">Module ${sprint.module}: ${sprint.moduleTitle}</div>
                        <div class="sprint-detail-guru">Guru: ${sprint.guru}</div>
                    </div>
                    <div class="sprint-status ${sprint.status}">${sprint.status}</div>
                </div>
            </div>
        `).join('');
    }

    viewTeamDetails(accessCode) {
        const team = this.teams.find(t => t.accessCode === accessCode);
        if (team) {
            this.selectedTeamForModal = team;
            this.showTeamProgressModal();
        }
    }

    async createNewTeam() {
        const inputs = {
            name: document.getElementById('newTeamName'),
            sprint: document.getElementById('newTeamSprint'),
            status: document.getElementById('newTeamStatus'),
            guru: document.getElementById('newTeamGuru')
        };
        
        if (!inputs.name || !inputs.sprint || !inputs.status || !inputs.guru) return;
        
        const values = {
            name: inputs.name.value.trim(),
            sprint: inputs.sprint.value.trim(),
            status: inputs.status.value,
            guru: inputs.guru.value.trim()
        };

        if (!values.name || !values.sprint || !values.guru) {
            alert('Please fill in all required fields');
            return;
        }

        const newCode = this.generateAccessCode();

        const newTeam = {
            name: values.name,
            access_code: newCode,
            weekly_score: Math.floor(Math.random() * 40) + 60,
            quality_score: Math.floor(Math.random() * 40) + 60,
            status: Math.floor(Math.random() * 30) + 70, // speed renamed to status
            sprint: values.sprint,
            speed_score: values.status, // status renamed to speed_score
            weekly_rank: this.teams.length + 1, // position renamed to weekly_rank
            previous_position: this.teams.length + 1,
            graduation: "TBD",
            delay_days: 0,
            current_module: 0,
            current_sprint: "Program WOOP",
            completed_sprints: [],
            guru: values.guru
        };

        try {
            const { data, error } = await this.supabase
                .from('teams')
                .insert([newTeam])
                .select();

            if (error) {
                console.error('Error creating team:', error);
                alert('Error creating team. Please try again.');
                return;
            }

            if (data && data.length > 0) {
                // Add to local teams array
                const teamData = data[0];
                this.teams.push({
                    id: teamData.id,
                    name: teamData.name,
                    accessCode: teamData.access_code,
                    weeklyScore: teamData.weekly_score,
                    qualityScore: teamData.quality_score,
                    speed: teamData.speed,
                    sprint: teamData.sprint,
                    status: teamData.status,
                    position: teamData.position,
                    previousPosition: teamData.previous_position,
                    graduation: teamData.graduation,
                    delay: teamData.delay_days,
                    currentModule: teamData.current_module,
                    currentSprint: teamData.current_sprint,
                    completedSprints: teamData.completed_sprints || [],
                    guru: teamData.guru,
                    lastLogin: teamData.last_login
                });

        this.hideAllModals();
        this.populateAdminDashboard();
        alert(`Team "${values.name}" created successfully!\nAccess Code: ${newCode}`);
            }
        } catch (error) {
            console.error('Error creating team:', error);
            alert('Error creating team. Please try again.');
        }
    }

    generateAccessCode() {
        // Generate a unique access code
        const prefix = 'FT';
        const timestamp = Date.now().toString().slice(-6);
        const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        return `${prefix}${timestamp}${random}`.toUpperCase();
    }

    regenerateCode(oldCode) {
        const team = this.teams.find(t => t.accessCode === oldCode);
        if (team) {
            const newCode = `FT${String(this.teams.length + 1).padStart(3, '0')}R`;
            team.accessCode = newCode;
            this.populateCodeManagement();
            alert(`New access code for ${team.name}: ${newCode}`);
        }
    }

    deactivateCode(code) {
        if (confirm('Are you sure you want to deactivate this access code?')) {
            const teamIndex = this.teams.findIndex(t => t.accessCode === code);
            if (teamIndex !== -1) {
                this.teams[teamIndex].accessCode = 'DEACTIVATED';
                this.populateCodeManagement();
                alert('Access code has been deactivated.');
            }
        }
    }

    editNewTeamsJoining() {
        const newValue = prompt('Enter new count for "New Teams Joining":', this.newTeamsJoiningCount);
        if (newValue !== null) {
            const numValue = parseInt(newValue);
            if (!isNaN(numValue) && numValue >= 0) {
                this.newTeamsJoiningCount = numValue;
                this.populateAnalytics();
                alert(`New Teams Joining count updated to ${numValue}`);
            } else {
                alert('Please enter a valid number (0 or greater)');
            }
        }
    }

    regenerateAssociateCode(oldCode) {
        const team = this.teams.find(t => t.accessCode === oldCode);
        if (team) {
            // Check if this is the associate's client
            if (team.associateId !== this.currentAssociate.id) {
                alert('You can only manage access codes for your own clients.');
                return;
            }
            
            const newCode = this.generateClientAccessCode(team.name);
            team.accessCode = newCode;
            
            // Refresh associate dashboard
            this.populateAssociateDashboard();
            alert(`New access code for ${team.name}: ${newCode}`);
        }
    }

    deactivateAssociateCode(code) {
        const team = this.teams.find(t => t.accessCode === code);
        if (!team) return;
        
        // Check if this is the associate's client
        if (team.associateId !== this.currentAssociate.id) {
            alert('You can only manage access codes for your own clients.');
            return;
        }
        
        if (confirm('Are you sure you want to deactivate this access code?')) {
            team.accessCode = 'DEACTIVATED';
            this.populateAssociateDashboard();
            alert('Access code has been deactivated.');
        }
    }

    handleFileSelection(event) {
        const files = event.target.files;
        this.displaySelectedFiles(files);
    }

    displaySelectedFiles(files) {
        const fileList = document.getElementById('fileList');
        if (!fileList) return;

        fileList.innerHTML = '';
        
        for (let file of files) {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            fileItem.innerHTML = `
                <span>${file.name} (${this.formatFileSize(file.size)})</span>
                <button class="btn btn--outline btn--sm" onclick="this.parentNode.remove()">Remove</button>
            `;
            fileList.appendChild(fileItem);
        }
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    handleFileUpload() {
        const fileList = document.getElementById('fileList');
        if (fileList && fileList.children.length > 0) {
            alert(`Successfully uploaded ${fileList.children.length} files for team distribution.`);
            this.hideAllModals();
        } else {
            alert('Please select files to upload.');
        }
    }

    formatStatus(status) {
        if (!status || typeof status !== 'string') {
            return 'Unknown';
        }
        return status.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }

    // Helper function for sprint display logic
    getSprintDisplay(team) {
        // Normalize status to handle different formats
        let status = team.status || 'starting-soon';
        if (typeof status === 'string') {
            status = status.toLowerCase().replace(/\s+/g, '-');
        }
        const currentSprint = parseInt(team.sprint) || 0;
        
        console.log(`getSprintDisplay for ${team.name}:`, {
            status: status,
            currentSprint: currentSprint,
            teamSprint: team.sprint,
            rawStatus: team.status,
            rawSpeedScore: team.speed_score
        });
        
        if (status === 'graduated') {
            return { display: '30/30', color: 'green' };
        } else if (status === 'starting-soon') {
            return { display: '0/30', color: 'grey' };
        } else if (status === 'in-delay') {
            const cappedSprint = Math.min(currentSprint, 30);
            return { display: `${cappedSprint}/30`, color: 'red' };
        } else {
            const cappedSprint = Math.min(currentSprint, 30);
            return { display: `${cappedSprint}/30`, color: 'green' };
        }
    }

    // Helper function for score display logic
    getScoreDisplay(team, scoreType) {
        const status = team.status || 'starting-soon';
        
        console.log(`getScoreDisplay for ${team.name} (${scoreType}):`, {
            status: status,
            speed: team.speed,
            qualityScore: team.qualityScore
        });
        
        if (status === 'starting-soon') {
            return 0;
        } else {
            return scoreType === 'speed' ? (team.speed || 0) : (team.qualityScore || 0);
        }
    }

    showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.remove('hidden');
        }
    }

    clearError(elementId) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.classList.add('hidden');
        }
    }

    logout() {
        this.currentUser = null;
        this.isAdmin = false;
        this.isAssociate = false;
        this.isTeam = false;
        this.currentAssociate = null;
        this.selectedTeamForModal = null;
        
        // Clear localStorage
        localStorage.removeItem('currentAssociate');
        localStorage.removeItem('isAssociate');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isTeam');
        
        // Clear inputs
        const inputs = ['accessCode', 'adminCode', 'associateCode', 'newTeamName', 'newTeamSprint', 'newTeamGuru'];
        inputs.forEach(id => {
            const element = document.getElementById(id);
            if (element) element.value = '';
        });
        
        const statusSelect = document.getElementById('newTeamStatus');
        if (statusSelect) statusSelect.value = 'starting-soon';

        const fileList = document.getElementById('fileList');
        if (fileList) fileList.innerHTML = '';

        const fileInput = document.getElementById('fileInput');
        if (fileInput) fileInput.value = '';
        
        this.clearError('loginError');
        this.clearError('adminError');
        this.clearError('associateError');
        this.hideAllModals();
        this.showLoginPage();
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.app = new FastTrackApp();
    window.app.init();
});

// Backup initialization for already loaded documents
if (document.readyState !== 'loading') {
    window.app = new FastTrackApp();
    window.app.init();
}