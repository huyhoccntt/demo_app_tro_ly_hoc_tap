BEGIN;

ALTER TABLE users
  ADD COLUMN IF NOT EXISTS teacher_certificate_image TEXT,
  ADD COLUMN IF NOT EXISTS teacher_verification_code VARCHAR(12),
  ADD COLUMN IF NOT EXISTS teacher_verified_at TIMESTAMPTZ;

COMMIT;
