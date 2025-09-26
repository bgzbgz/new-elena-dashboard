// Build script to replace environment variables in env-config.js
const fs = require('fs');
const path = require('path');

// Read the template file
const templatePath = path.join(__dirname, 'env-config.js');
let content = fs.readFileSync(templatePath, 'utf8');

// Replace with environment variables (these will be set by Netlify)
const supabaseUrl = process.env.SUPABASE_DATABASE_URL || 'https://xkapxnhwubhfbatekqhz.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrYXB4bmh3dWJoZmJhdGVrcWh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzNDE1MTEsImV4cCI6MjA3MzkxNzUxMX0.8GWh7P8ENNZqbH4P0ho6tVspG9tkonS559LoB0t0yjQ';

content = content.replace(
  "window.SUPABASE_DATABASE_URL = 'https://xkapxnhwubhfbatekqhz.supabase.co';",
  `window.SUPABASE_DATABASE_URL = '${supabaseUrl}';`
);

content = content.replace(
  "window.SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrYXB4bmh3dWJoZmJhdGVrcWh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzNDE1MTEsImV4cCI6MjA3MzkxNzUxMX0.8GWh7P8ENNZqbH4P0ho6tVspG9tkonS559LoB0t0yjQ';",
  `window.SUPABASE_ANON_KEY = '${supabaseKey}';`
);

// Write the updated file
fs.writeFileSync(templatePath, content);

console.log('Environment variables updated in env-config.js');
console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key (first 20 chars):', supabaseKey.substring(0, 20) + '...');
