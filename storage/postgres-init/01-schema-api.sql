-- Setup schema
CREATE schema api;

-- Account
CREATE TABLE api.accounts (
    id serial PRIMARY KEY,
    name text NOT NULL DEFAULT 'User',
    profile text DEFAULT ''
);
-- Badges
CREATE TABLE api.badges (
    id serial PRIMARY KEY,
    name text NOT NULL,
    description text,
    image_url text,
    fallback_text text
);
-- Badge Grants
CREATE TABLE api.badge_grants (
    badge_id int NOT NULL REFERENCES api.badges(id),
    granted_by int NOT NULL REFERENCES api.accounts(id),
    granted_to int NOT NULL REFERENCES api.accounts(id),
    created timestamp DEFAULT now()
);
CREATE INDEX ON api.badge_grants (badge_id);
CREATE INDEX ON api.badge_grants (granted_by);
CREATE INDEX ON api.badge_grants (granted_to);
-- Badge Permissions
CREATE TABLE api.badge_permissions (
    badge_id int NOT NULL REFERENCES api.badges(id),
    user_id int REFERENCES api.accounts(id),
    can_read boolean NOT NULL DEFAULT true,
    can_edit boolean NOT NULL DEFAULT false,
    can_grant boolean NOT NULL DEFAULT false
);
CREATE INDEX ON api.badge_permissions (badge_id);
CREATE INDEX ON api.badge_permissions (user_id);
