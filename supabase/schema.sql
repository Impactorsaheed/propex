-- ========================================================
-- PropEx — Supabase Database Schema & Initial Data
-- Run this in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/qjrfqcemgqiqabrhwpmp/sql/new
-- ========================================================

-- 1. Properties Table
CREATE TABLE IF NOT EXISTS properties (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT DEFAULT 'residential',
    budget NUMERIC DEFAULT 500000,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Expense Categories Table
CREATE TABLE IF NOT EXISTS categories (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    budget NUMERIC DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Expenses Table
CREATE TABLE IF NOT EXISTS expenses (
    id TEXT PRIMARY KEY,
    amount NUMERIC NOT NULL,
    date TEXT NOT NULL,
    category TEXT NOT NULL,
    property_id TEXT,
    property_name TEXT,
    description TEXT,
    payment_method TEXT DEFAULT 'Bank Transfer',
    vendor TEXT,
    receipt_url TEXT,
    source TEXT DEFAULT 'manual',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Enable Row Level Security (RLS) & Allow Anonymous Access for PropEx Web App
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE expenses ENABLE ROW LEVEL SECURITY;

-- Allow public read/write policies
DROP POLICY IF EXISTS "Allow public all properties" ON properties;
CREATE POLICY "Allow public all properties" ON properties FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public all categories" ON categories;
CREATE POLICY "Allow public all categories" ON categories FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public all expenses" ON expenses;
CREATE POLICY "Allow public all expenses" ON expenses FOR ALL USING (true) WITH CHECK (true);

-- 5. Seed Initial Nigerian Real Estate Properties
INSERT INTO properties (id, name, type, budget) VALUES
    ('prop-1', 'Block 4, Lekki Phase 1', 'residential', 1500000),
    ('prop-2', 'Ikeja GRA 3-Bed Terrace', 'residential', 800000),
    ('prop-3', 'Maitama Luxury Duplex', 'residential', 2000000),
    ('prop-4', 'Victoria Island Commercial Hub', 'commercial', 3000000)
ON CONFLICT (id) DO NOTHING;

-- 6. Seed Initial Operational Categories
INSERT INTO categories (id, name, budget) VALUES
    ('cat-1', 'Diesel & Generator Fuel', 600000),
    ('cat-2', 'Artisans & Plumbing Repairs', 300000),
    ('cat-3', 'Estate Security & Gate Dues', 400000),
    ('cat-4', 'Borehole & Water Treatment', 200000),
    ('cat-5', 'Waste Disposal & LAWMA / AEPB', 80000),
    ('cat-6', 'IKEDC / EKEDC Power Tokens', 350000),
    ('cat-7', 'Tenancy Legal & Deed Prep', 250000),
    ('cat-8', 'Caretaker Allowance & Agency', 300000)
ON CONFLICT (id) DO NOTHING;

-- 7. Seed Initial Sample Expenses (₦ NGN)
INSERT INTO expenses (id, amount, date, category, property_id, property_name, description, source) VALUES
    ('exp-1', 180000, '2026-10-14', 'Diesel & Generator Fuel', 'prop-1', 'Block 4, Lekki Phase 1', '150 Liters diesel delivery for 50kVA standby generator', 'voice'),
    ('exp-2', 45000, '2026-10-12', 'Artisans & Plumbing Repairs', 'prop-2', 'Ikeja GRA 3-Bed Terrace', 'Plumber fee for leaking ceiling pipe & toilet ball valve repair', 'manual'),
    ('exp-3', 350000, '2026-10-10', 'Estate Security & Gate Dues', 'prop-3', 'Maitama Luxury Duplex', 'Quarterly resident association gate security levy and patrol', 'voice'),
    ('exp-4', 85000, '2026-10-08', 'Borehole & Water Treatment', 'prop-4', 'Victoria Island Commercial Hub', '1.5HP submersible water pump replacement and filter flush', 'voice'),
    ('exp-5', 25000, '2026-10-06', 'Waste Disposal & LAWMA / AEPB', 'prop-1', 'Block 4, Lekki Phase 1', 'Monthly private waste management service charge (LAWMA)', 'manual'),
    ('exp-6', 120000, '2026-10-04', 'IKEDC / EKEDC Power Tokens', 'prop-2', 'Ikeja GRA 3-Bed Terrace', 'IKEDC prepaid commercial electricity token recharge', 'voice')
ON CONFLICT (id) DO NOTHING;
