# PPMK Community Hub - Setup Guide

## Overview
This guide will help you set up and deploy the PPMK Community Hub application using Next.js, Supabase, and Vercel.

## Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Supabase](https://supabase.com/) account
- [Vercel](https://vercel.com/) account
- Git (for version control)

## Step 1: Set Up Supabase

1. Create a new Supabase project at [supabase.com](https://supabase.com/)
2. Once your project is ready, go to **Settings > API** to find:
   - **Project URL** (this will be your `NEXT_PUBLIC_SUPABASE_URL`)
   - **anon public** key (this will be your `NEXT_PUBLIC_SUPABASE_ANON_KEY`)

3. Create the `students` table by running this SQL in the Supabase SQL editor:

```sql
create table students (
  id uuid default uuid_generate_v4() primary key,
  student_id text unique not null,
  name text not null,
  batch text not null,
  age integer not null,
  phone text not null,
  course text not null,
  residence text not null,
  email text unique not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table students enable row level security;

-- Create policy for inserting new students (public can insert)
create policy "Allow public to insert students"
  on students for insert
  to public
  with check (true);

-- Create policy for selecting students (public can view)
create policy "Allow public to view students"
  on students for select
  to public
  using (true);
```

## Step 2: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```

## Step 3: Install Dependencies and Run Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Step 4: Deploy to Vercel

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com/) and click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Next.js project
5. Add the same environment variables (`NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`) in the Vercel project settings
6. Click "Deploy"

## Features Implemented (MVP)

✅ Student registration form  
✅ Student directory listing  
✅ Supabase integration for data storage  
✅ Basic navigation and UI  
✅ Responsive design with Tailwind CSS  

## Next Steps (Future Development)

- Event creation and management
- Targeted invitations system
- RSVP functionality
- Calendar view of events
- Club directory
- External events board
- Admin/dashboard features
- Authentication system (beyond basic public access)

## Troubleshooting

### Supabase Connection Issues
- Double-check your Supabase URL and anon key in `.env.local`
- Ensure the `students` table exists and has the correct schema
- Verify that RLS policies allow public read/write access (for MVP)

### Deployment Issues
- Make sure environment variables are set correctly in Vercel
- Check Vercel deployment logs for specific error messages
- Ensure your Git repository is connected correctly

## Technology Stack

- **Frontend**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (Hosted PostgreSQL)
- **Authentication**: Supabase Auth (planned for future)
- **Deployment**: Vercel

## License
This project is created for the PPMK community at Hanyang University ERICA.