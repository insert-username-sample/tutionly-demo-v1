-- Setup Script for Tutorly Waitlist Database
-- Run this SQL in your Netlify Neon database dashboard

-- Create the waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(50),
    role TEXT NOT NULL,
    primary_use TEXT NOT NULL,
    willingness_to_pay TEXT NOT NULL,
    preferred_tutor_format TEXT NOT NULL,
    learning_style TEXT NOT NULL,
    biggest_frustration TEXT,
    join_waitlist_perks TEXT NOT NULL,
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Create an index on submitted_at for sorting by newest first
CREATE INDEX IF NOT EXISTS idx_waitlist_submitted_at ON waitlist(submitted_at DESC);

-- Optional: Create a view for easy querying
CREATE OR REPLACE VIEW waitlist_summary AS
SELECT
    id,
    name,
    email,
    role,
    primary_use,
    willingness_to_pay,
    submitted_at
FROM waitlist
ORDER BY submitted_at DESC;

-- Grant necessary permissions (if needed)
-- GRANT ALL PRIVILEGES ON TABLE waitlist TO project_owner;
-- GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO project_owner;
