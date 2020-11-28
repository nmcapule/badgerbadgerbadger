-- Setup 'api' schema
CREATE schema api;
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Users
CREATE TABLE api.users (
    id serial PRIMARY KEY,
    email text NOT NULL UNIQUE,
    name text NOT NULL DEFAULT 'User',
    password_hash text NOT NULL,
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
-- Badge Grants
CREATE TABLE api.badge_grants (
    badge_id int NOT NULL REFERENCES api.badges(id),
    granted_by int NOT NULL REFERENCES api.users(id),
    granted_to int NOT NULL REFERENCES api.users(id),
    created timestamp DEFAULT now()
);
CREATE INDEX ON api.badge_grants (badge_id);
CREATE INDEX ON api.badge_grants (granted_by);
CREATE INDEX ON api.badge_grants (granted_to);

-- JWT Token Type
CREATE TYPE api.jwt_token AS (
    role text,
    expiry integer,
    username text,
    is_admin boolean
);
-- JWT Authentication (https://www.graphile.org/postgraphile/security/)
CREATE FUNCTION api.user_authenticate(
    email text,
    password text
) RETURNS api.jwt_token AS $$
DECLARE
    badger_user api.users;
BEGIN
    SELECT u.* INTO badger_user
        FROM api.users AS u
        WHERE u.email = authenticate.email;
    
    IF badger_user.password_hash = crypt(password, badger_user.password_hash) THEN
        RETURN (
            'USER',
            extract(epoch from now() + interval '7 days'),
            badger_user.email,
            false
        )::api.jwt_token;
    ELSE
        RETURN NULL;
    END IF;
END;
$$ LANGUAGE plpgsql strict security definer;

CREATE FUNCTION api.user_signup(
    email text,
    password text
) RETURNS VOID AS $$
BEGIN
    INSERT INTO api.users (email, password_hash)
    VALUES (email, crypt(password, gen_salt('md5')));
END;
$$ LANGUAGE plpgsql strict security definer;
