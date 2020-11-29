-- Setup schema
CREATE schema api_private;

-- Accounts (private)
CREATE TABLE api_private.accounts (
    id int NOT NULL REFERENCES api.accounts(id) ON DELETE CASCADE,
    email text NOT NULL UNIQUE,
    password_hash text NOT NULL,
    verified boolean NOT NULL DEFAULT false
);

-- JWT Token Type
CREATE TYPE api_private.jwt_token AS (
    -- Role is a reserved word to define role used to query.
    role text,
    -- Exp is a reserved word to define expiry of the generated token.
    exp integer,
    -- Custom properties.
    account_id int,
    account_email text,
    account_is_admin boolean
);
