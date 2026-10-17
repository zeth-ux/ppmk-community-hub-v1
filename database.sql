-- PPMK Community Hub Database Schema
-- Run this in your Supabase SQL editor to set up the required tables for MVP

-- Students table (for MVP - student registration and directory)
create table if not exists students (
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