-- Reference:
-- https://www.graphile.org/postgraphile/postgresql-schema-design/#storing-emails-and-passwords

-- Function: Authentication
-- JWT Authentication (https://www.graphile.org/postgraphile/security/)
CREATE FUNCTION api.authenticate_account(
    email text,
    password text
) RETURNS api_private.jwt_token AS $$
DECLARE
    account api_private.accounts;
BEGIN
    SELECT u.* INTO account
        FROM api_private.accounts AS u
        WHERE u.email = authenticate_account.email;
    
    IF account.password_hash = crypt(password, account.password_hash) THEN
        RETURN (
            'web_user',
            extract(epoch from now() + interval '7 days'),
            account.id,
            account.email,
            false
        )::api_private.jwt_token;
    ELSE
        RETURN NULL;
    END IF;
END;
$$ LANGUAGE plpgsql strict security definer;

-- Function: Register / Sign-up
CREATE FUNCTION api.register_account(
    email text,
    password text
) RETURNS api.accounts AS $$
DECLARE
    account api.accounts;
BEGIN
    INSERT INTO api.accounts (name)
        VALUES ('User')
        RETURNING * INTO account;

    INSERT INTO api_private.accounts (id, email, password_hash)
        VALUES (account.id, email, crypt(password, gen_salt('md5')));

    RETURN account;
END;
$$ LANGUAGE plpgsql strict security definer;

-- Function: Get Current Person
CREATE FUNCTION api.current_account(OUT id int, OUT name text, OUT profile text, OUT email text)
AS $$
    SELECT a.*, b.email
    FROM api.accounts AS a
    LEFT JOIN api_private.accounts AS b
        ON a.id = b.id
    WHERE a.id = nullif(current_setting('jwt.claims.account_id', true), '')::integer
$$ language sql stable;
