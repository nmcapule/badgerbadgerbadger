-- Setup schema
CREATE schema api;

-- Account
CREATE TABLE api.accounts (
    id serial PRIMARY KEY,
    display_name text NOT NULL DEFAULT 'User',
    profile text DEFAULT ''
);
-- Badges
CREATE TABLE api.badges (
    id serial PRIMARY KEY,
    unique_name text NOT NULL UNIQUE,
    display_name text NOT NULL,
    description text,
    image_url text,
    fallback_text text
);
-- Badge Grants
CREATE TABLE api.badge_grants (
    id serial PRIMARY KEY,
    badge_id int NOT NULL REFERENCES api.badges(id),
    granted_by int NOT NULL REFERENCES api.accounts(id),
    granted_to int NOT NULL REFERENCES api.accounts(id),
    notes text DEFAULT '',
    created timestamp DEFAULT now()
);
CREATE INDEX ON api.badge_grants (badge_id);
CREATE INDEX ON api.badge_grants (granted_by);
CREATE INDEX ON api.badge_grants (granted_to);
-- Badge Permissions
CREATE TABLE api.badge_permissions (
    badge_id int NOT NULL REFERENCES api.badges(id),
    account_id int REFERENCES api.accounts(id),
    can_edit boolean NOT NULL DEFAULT false,
    can_grant boolean NOT NULL DEFAULT false
);
CREATE INDEX ON api.badge_permissions (badge_id);
CREATE INDEX ON api.badge_permissions (account_id);
