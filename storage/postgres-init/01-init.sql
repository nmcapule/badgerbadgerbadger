-- Setup 'api' schema
CREATE schema api;

-- Users
CREATE TABLE api.users (
    id serial PRIMARY KEY,
    email text NOT NULL UNIQUE,
    name text NOT NULL,
    password_sha text NOT NULL,
    password_salt text NOT NULL,
    verified boolean NOT NULL DEFAULT false
);
-- Badges
CREATE TABLE api.badges (
    id serial PRIMARY KEY,
    name text NOT NULL,
    description text,
    image_url text
);
INSERT INTO api.badges (name, description, image_url)
VALUES
    ('best programmer', 'yes you are', ''),
    ('best girlfrend', 'woohoo!', '');
