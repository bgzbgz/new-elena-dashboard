# Fast Track Team Leaderboard - Associate Management System

## Overview
This is a comprehensive team leaderboard and associate management system built with vanilla JavaScript and Supabase.

## Features

### 🔐 Authentication
- **Team Access**: Teams can log in with their access codes
- **Associate Access**: Associates can manage their clients
- **Admin Access**: Full system administration

### 👥 Associate Management
- **Elena** (ELENA001): 9 clients
- **Vasil** (VASIL001): 2 clients  
- **Ani** (ANI001): 8 clients

### 🌍 Client Features
- Country flags for visual identification
- Client profiles with CEO, contact, and website info
- Real-time sprint progress tracking
- Status indicators (On Time, In Delay, Graduated, Starting Soon)

## Access Codes

### Associate Access Codes
- **ELENA001** - Elena's dashboard (9 clients)
- **VASIL001** - Vasil's dashboard (2 clients)
- **ANI001** - Ani's dashboard (8 clients)

### Admin Access Codes
- **ADMIN001** - Full admin access
- **FASTTRACK_ADMIN** - Admin access
- **FT_SUPER_ADMIN** - Super admin access

## Client Assignments

### Elena's Clients
- MAX CITY (🇲🇺 Mauritius)
- PHARMACIE NOUVELLE (🇲🇺 Mauritius)
- LEAL GROUP (AUTO) (🇲🇺 Mauritius)
- APF (🇱🇻 Latvia)
- CFL (🇰🇪 Kenya)
- VIZULO (🇱🇻 Latvia)
- GRUPO PDC (🇬🇹 Guatemala)
- Chromavis (🇮🇹 Italy)
- Industra Bank (🇪🇪 Estonia)

### Vasil's Clients
- Capital Alliance (🇱🇰 Sri Lanka)
- Rockland (🇱🇰 Sri Lanka)

### Ani's Clients
- Hemas (🇱🇰 Sri Lanka)
- ENSON (🇵🇱 Poland)
- PGO (🇵🇱 Poland)
- FORMIKA (🇵🇱 Poland)
- Plazteca (🇲🇽 Mexico)
- AMEX (🇦🇹 Austria)
- MOBO (🇲🇽 Mexico)
- CRAFT (🇲🇽 Mexico)

## Database Schema
- **teams**: Client information and progress
- **associates**: Associate profiles and access codes
- **client_profiles**: Extended client information
- **fast_track_tools**: Sprint-specific instructions
- **associate_activities**: Activity logging

## Deployment
This application is deployed on Netlify and connects to Supabase for data persistence.

## Development
- **Frontend**: Vanilla JavaScript, HTML, CSS
- **Backend**: Supabase (PostgreSQL)
- **Deployment**: Netlify