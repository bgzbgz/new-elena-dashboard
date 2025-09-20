// Fast Track Team Leaderboard Application - Supabase Integration
class FastTrackApp {
    constructor() {
        // Initialize Supabase
        this.supabaseUrl = 'https://xkapxnhwubhfbatekqhz.supabase.co';
        this.supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrYXB4bmh3dWJoZmJhdGVrcWh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzNDE1MTEsImV4cCI6MjA3MzkxNzUxMX0.8GWh7P8ENNZqbH4P0ho6tVspG9tkonS559LoB0t0yjQ';
        this.corsProxyUrl = 'https://xkapxnhwubhfbatekqhz.supabase.co/functions/v1/cors-proxy';
        this.supabase = supabase.createClient(this.supabaseUrl, this.supabaseKey);
        
        // Enhanced team data with detailed sprint information
        this.teams = [
            {
                name: "SECOM",
                weeklyScore: 94,
                qualityScore: 89,
                speed: 91.5,
                sprint: "Week 4",
                status: "on-time",
                position: 1,
                previousPosition: 2,
                accessCode: "FT001",
                graduation: "Dec 2024",
                delay: 0,
                currentModule: 1,
                currentSprint: "Know Thyself",
                completedSprints: ["Program WOOP"],
                guru: "Diliara"
            },
            {
                name: "APF", 
                weeklyScore: 88,
                qualityScore: 92,
                speed: 90,
                sprint: "Week 3", 
                status: "on-time",
                position: 2,
                previousPosition: 3,
                accessCode: "FT002",
                graduation: "Jan 2025",
                delay: 2,
                currentModule: 2,
                currentSprint: "Current Cash Position",
                completedSprints: ["Program WOOP", "Know Thyself", "Dream", "Values", "Team", "FIT"],
                guru: "Mihails - Diliara"
            },
            {
                name: "CHROMAVIS",
                weeklyScore: 91,
                qualityScore: 87, 
                speed: 89,
                sprint: "Week 5",
                status: "progress-meeting",
                position: 3,
                previousPosition: 3,
                accessCode: "FT003",
                graduation: "Nov 2024",
                delay: 0,
                currentModule: 3,
                currentSprint: "Market Size",
                completedSprints: ["Program WOOP", "Know Thyself", "Dream", "Values", "Team", "FIT", "Current Cash Position", "Goals, Priorities and Planning"],
                guru: "Janis & Olga"
            },
            {
                name: "GRUPO PDC",
                weeklyScore: 85,
                qualityScore: 90,
                speed: 87.5,
                sprint: "Week 2",
                status: "in-delay", 
                position: 4,
                previousPosition: 5,
                accessCode: "FT004",
                graduation: "Feb 2025",
                delay: 5,
                currentModule: 1,
                currentSprint: "Dream",
                completedSprints: ["Program WOOP", "Know Thyself"],
                guru: "Jurijs"
            },
            {
                name: "LEAL AUTO",
                weeklyScore: 92,
                qualityScore: 82,
                speed: 87,
                sprint: "Week 6",
                status: "graduated",
                position: 5,
                previousPosition: 4,
                accessCode: "FT005",
                graduation: "Completed",
                delay: 0,
                currentModule: 9,
                currentSprint: "Completed",
                completedSprints: ["All Modules Completed"],
                guru: "Graduated"
            }
        ];

        // Comprehensive module structure
        this.moduleStructure = [
            {
                number: 0,
                title: "Intro Sprint",
                description: "Program WOOP - Welcome, Outcomes, Obstacles, Plan",
                sprints: ["Program WOOP"],
                gurus: ["Program Team"],
                duration: "1 week"
            },
            {
                number: 1,
                title: "Individual and Company Identity",
                description: "Building foundation of self and team understanding",
                sprints: ["Know Thyself", "Dream", "Values", "Team", "FIT"],
                gurus: ["Diliara", "Jurijs"],
                duration: "5 weeks"
            },
            {
                number: 2,
                title: "Core Performance Elements",
                description: "Essential business performance and accountability systems",
                sprints: ["Current Cash Position", "Goals, Priorities and Planning", "Focus/Discipline", "Performance/Accountability", "Meeting Rhythm"],
                gurus: ["Mihails", "Diliara"],
                duration: "5 weeks"
            },
            {
                number: 3,
                title: "Market Understanding",
                description: "Deep dive into market dynamics and opportunities",
                sprints: ["Market Size", "Market Segmentation", "Target Market Analysis"],
                gurus: ["Janis", "Olga"],
                duration: "3 weeks"
            },
            {
                number: 4,
                title: "Strategy Development",
                description: "Crafting and testing your strategic approach",
                sprints: ["Target Segment Deep Dive", "Value Proposition", "VP Testing"],
                gurus: ["Strategy Team"],
                duration: "3 weeks"
            },
            {
                number: 5,
                title: "Strategy Execution",
                description: "Bringing strategy to life through execution",
                sprints: ["Product Development", "Pricing Strategy", "Brand/Marketing", "Route to Market"],
                gurus: ["Execution Team"],
                duration: "4 weeks"
            },
            {
                number: 6,
                title: "Organizational Structure",
                description: "Building efficient organizational systems",
                sprints: ["Core Activities", "Process Design", "Team Analysis"],
                gurus: ["Operations Team"],
                duration: "3 weeks"
            },
            {
                number: 7,
                title: "People & Leadership",
                description: "Developing leadership and team capabilities",
                sprints: ["Personal Development Plan", "Recruitment Strategy", "Agile Teams"],
                gurus: ["Leadership Team"],
                duration: "3 weeks"
            },
            {
                number: 8,
                title: "Tech & AI Implementation",
                description: "Leveraging technology and AI for competitive advantage",
                sprints: ["Process Digitalization", "AI Options Assessment", "Implementation Plan"],
                gurus: ["Tech Team"],
                duration: "3 weeks"
            }
        ];

        this.adminCodes = ['ADMIN001', 'FASTTRACK_ADMIN', 'FT_SUPER_ADMIN'];
        this.currentUser = null;
        this.isAdmin = false;
        this.selectedTeamForModal = null;
        this.subtasks = [];
        this.messages = [];
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
                const targetUrl = `${this.supabaseUrl}/rest/v1/sprints?select=id&limit=1`;
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
            id: `temp-id-${index + 1}` // Temporary ID for hardcoded teams
        }));
        console.log('Added temporary IDs to hardcoded teams:', this.teams);
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
            // Load teams
            const { data: teamsData, error: teamsError } = await this.supabase
                .from('teams')
                .select('*')
                .order('position', { ascending: true });

            if (teamsError) {
                console.error('Error loading teams:', teamsError);
                return;
            }

            if (teamsData && teamsData.length > 0) {
                this.teams = teamsData.map(team => ({
                    id: team.id,
                    name: team.name,
                    accessCode: team.access_code,
                    weeklyScore: team.weekly_score,
                    qualityScore: team.quality_score,
                    speed: team.speed,
                    sprint: team.sprint,
                    status: team.status,
                    position: team.position,
                    previousPosition: team.previous_position,
                    graduation: team.graduation,
                    delay: team.delay_days,
                    currentModule: team.current_module,
                    currentSprint: team.current_sprint,
                    completedSprints: team.completed_sprints || [],
                    guru: team.guru,
                    lastLogin: team.last_login
                }));
            }

            // Load subtasks
            const { data: subtasksData, error: subtasksError } = await this.supabase
                .from('subtasks')
                .select('*');

            if (!subtasksError && subtasksData) {
                this.subtasks = subtasksData;
            }

            // Load messages
            const { data: messagesData, error: messagesError } = await this.supabase
                .from('messages')
                .select('*');

            if (!messagesError && messagesData) {
                this.messages = messagesData;
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
            teamSelect.innerHTML = '<option value="">Select Team</option>' +
                this.teams.map(team => `<option value="${team.id}">${team.name}</option>`).join('');
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
                this.populateAdminDashboard();
                
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
            this.populateAdminSubtasks();
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
        this.showLoginPage();
    }

    bindEvents() {
        // Team login
        const teamLoginBtn = document.getElementById('teamLoginBtn');
        if (teamLoginBtn) {
            teamLoginBtn.onclick = () => this.handleTeamLogin();
        }
        
        // Admin login
        const adminLoginBtn = document.getElementById('adminLoginBtn');
        if (adminLoginBtn) {
            adminLoginBtn.onclick = () => this.showAdminModal();
        }
        
        const adminAuthBtn = document.getElementById('adminAuthBtn');
        if (adminAuthBtn) {
            adminAuthBtn.onclick = () => this.handleAdminLogin();
        }
        
        // Modal close buttons
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
        
        // Enter key support
        const accessCodeInput = document.getElementById('accessCode');
        if (accessCodeInput) {
            accessCodeInput.onkeypress = (e) => {
                if (e.key === 'Enter') {
                    this.handleTeamLogin();
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

    hideAllPages() {
        const pages = ['loginPage', 'teamDashboard', 'adminDashboard'];
        pages.forEach(pageId => {
            const page = document.getElementById(pageId);
            if (page) {
                page.classList.add('hidden');
            }
        });
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
        const modals = ['adminModal', 'teamProgressModal', 'addTeamModal', 'uploadModal', 'createSubtaskModal', 'subtaskDetailsModal'];
        modals.forEach(modalId => {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('hidden');
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
            this.isAdmin = false;
            this.clearError('loginError');
            
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

    populateTeamDashboard() {
        if (!this.currentUser || this.isAdmin) return;

        // Set team name
        const currentTeamElement = document.getElementById('currentTeam');
        if (currentTeamElement) {
            currentTeamElement.textContent = this.currentUser.name;
        }

        // Populate progress cards
        const cardsContainer = document.getElementById('teamProgressCards');
        if (cardsContainer) {
            cardsContainer.innerHTML = `
                <div class="progress-card">
                    <div class="progress-card-label">Weekly Score</div>
                    <div class="progress-card-value">${this.currentUser.weeklyScore}</div>
                    <div class="progress-card-subtitle">Current ranking: #${this.currentUser.position}</div>
                </div>
                <div class="progress-card">
                    <div class="progress-card-label">Speed Score</div>
                    <div class="progress-card-value">${this.currentUser.speed}</div>
                    <div class="progress-card-subtitle">Performance metric</div>
                </div>
                <div class="progress-card">
                    <div class="progress-card-label">Quality Score</div>
                    <div class="progress-card-value">${this.currentUser.qualityScore}</div>
                    <div class="progress-card-subtitle">Execution quality</div>
                </div>
                <div class="progress-card">
                    <div class="progress-card-label">Current Sprint</div>
                    <div class="progress-card-value">${this.currentUser.currentSprint}</div>
                    <div class="progress-card-subtitle">Module ${this.currentUser.currentModule}</div>
                </div>
            `;
        }

        // Populate subtasks
        this.populateTeamSubtasks();
        
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
                <div class="ranking-score">Weekly Score: ${currentTeam.weeklyScore}</div>
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

    populateLeaderboard() {
        const tbody = document.getElementById('leaderboardBody');
        if (!tbody) return;
        
        const sortedTeams = [...this.teams].sort((a, b) => a.position - b.position);

        tbody.innerHTML = sortedTeams.map(team => {
            const trendClass = team.position < team.previousPosition ? 'position-trend-up' : 
                              team.position > team.previousPosition ? 'position-trend-down' : 'position-trend-same';
            const trendSymbol = team.position < team.previousPosition ? '↑' : 
                               team.position > team.previousPosition ? '↓' : '→';

            return `
                <tr>
                    <td class="position-cell ${trendClass}">
                        ${team.position} ${trendSymbol}
                    </td>
                    <td>
                        <strong>${team.name}</strong>
                    </td>
                    <td>${team.sprint}</td>
                    <td>
                        <div class="speed-score">${team.speed}</div>
                    </td>
                    <td>${team.qualityScore}</td>
                    <td>
                        <span class="status-badge status-${team.status.replace(/[^a-zA-Z0-9]/g, '-')}">${this.formatStatus(team.status)}</span>
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
        const graduationRate = ((this.teams.filter(t => t.status === 'graduated').length / this.teams.length) * 100).toFixed(0);

        const elements = {
            'teamsOnTrack': teamsOnTrack,
            'averageSpeed': averageSpeed,
            'teamsInDelay': teamsInDelay,
            'graduationRate': `${graduationRate}%`
        };

        Object.entries(elements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) element.textContent = value;
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
            'modalTeamName': `${team.name} - Sprint Progress Details`,
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
            speed: Math.floor(Math.random() * 30) + 70,
            sprint: values.sprint,
            status: values.status,
            position: this.teams.length + 1,
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
        return status.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
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
        this.selectedTeamForModal = null;
        
        // Clear inputs
        const inputs = ['accessCode', 'adminCode', 'newTeamName', 'newTeamSprint', 'newTeamGuru'];
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