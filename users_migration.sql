BEGIN;

CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(180) NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  role VARCHAR(20) NOT NULL,
  avatar TEXT,
  school VARCHAR(180),
  class_name VARCHAR(80),
  teaching_grade VARCHAR(80),
  rank VARCHAR(80),
  teacher_status VARCHAR(20),
  teacher_certificate_image TEXT,
  teacher_verification_code VARCHAR(12),
  teacher_verified_at TIMESTAMPTZ,
  login_days INTEGER NOT NULL DEFAULT 0,
  posts_count INTEGER NOT NULL DEFAULT 0,
  status VARCHAR(20) NOT NULL DEFAULT 'active',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE users
  ADD COLUMN IF NOT EXISTS school VARCHAR(180),
  ADD COLUMN IF NOT EXISTS class_name VARCHAR(80),
  ADD COLUMN IF NOT EXISTS teaching_grade VARCHAR(80),
  ADD COLUMN IF NOT EXISTS rank VARCHAR(80),
  ADD COLUMN IF NOT EXISTS teacher_status VARCHAR(20),
  ADD COLUMN IF NOT EXISTS teacher_certificate_image TEXT,
  ADD COLUMN IF NOT EXISTS teacher_verification_code VARCHAR(12),
  ADD COLUMN IF NOT EXISTS teacher_verified_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS login_days INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS posts_count INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

INSERT INTO users (id, name, email, password_hash, role, avatar, status, created_at)
VALUES
(1776477736438, 'Test User', 'test@example.com', '$2b$10$h1.VQRe5YVRYrstc9FrXOe9MM2tIJ24t6UvQBFUZ46ZrJC0amtxIq', 'student', 'https://ui-avatars.com/api/?background=0284c7&color=fff&name=Test%20User', 'active', '2026-04-18T02:02:16.438Z'),
(1776477752261, 'Nguyen Van Teacher', 'teacher@example.com', '$2b$10$2QdNB.He38l87gN6datIXeTUOmZffLZx3htGZBMQ/dhfrUWOvhe42', 'teacher', 'https://ui-avatars.com/api/?background=0284c7&color=fff&name=Nguyen%20Van%20Teacher', 'active', '2026-04-18T02:02:32.261Z'),
(1776477932856, 'Test Admin', 'admin@test.com', '$2b$10$4.oUVMmZE0.SJdWc04HSlOA.9DOCBHAew2I6.t1vAy2Pdg7xfQSw2', 'admin', 'https://ui-avatars.com/api/?background=0284c7&color=fff&name=Test%20Admin', 'active', '2026-04-18T02:05:32.856Z'),
(1776477942550, 'Test Admin', 'admin2@test.com', '$2b$10$ZW3omjd/gwHRsBPkjYU5/.zLVenr8C690p5/kL0u9GVpmbOe.cyN.', 'admin', 'https://ui-avatars.com/api/?background=0284c7&color=fff&name=Test%20Admin', 'active', '2026-04-18T02:05:42.550Z'),
(1776477958613, 'New Student', 'student@test.com', '$2b$10$YoPetIUiMpBRBPluiqZAoefa4c6z4IwUP7r89X4URvieQT7ZM0pxO', 'student', 'https://ui-avatars.com/api/?background=0284c7&color=fff&name=New%20Student', 'active', '2026-04-18T02:05:58.613Z'),
(177647796234, 'New Teacher', 'teacher@test.com', '$2b$10$sQBGttHrQqklg32fIZQMn.VjGdDHk2usQopjYbrMyqhn8dgr5M5Z6', 'teacher', 'https://ui-avatars.com/api/?background=0284c7&color=fff&name=New%20Teacher', 'active', '2026-04-18T02:06:01.234Z')
ON CONFLICT (email) DO UPDATE SET
  name = EXCLUDED.name,
  password_hash = EXCLUDED.password_hash,
  role = EXCLUDED.role,
  avatar = EXCLUDED.avatar,
  status = EXCLUDED.status,
  created_at = EXCLUDED.created_at;

SELECT setval(pg_get_serial_sequence('users', 'id'), COALESCE((SELECT MAX(id) FROM users), 1), true);

COMMIT;
