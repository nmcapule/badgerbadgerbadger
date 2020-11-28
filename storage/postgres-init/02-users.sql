-------------------------------------------------------------------------------
-- Artifacts from when we are still using PostgREST
-------------------------------------------------------------------------------
-- Setup web_anon login
CREATE role web_anon nologin;
GRANT USAGE ON schema api TO web_anon;
GRANT SELECT, INSERT ON api.badges TO web_anon;
GRANT SELECT, INSERT ON api.badge_grants TO web_anon;
GRANT SELECT ON api.users TO web_anon;
GRANT USAGE, SELECT ON sequence api.badges_id_seq TO web_anon;

-- Setup web_anon auth
CREATE role authenticator noinherit login PASSWORD 'mysecretpassword';
GRANT web_anon TO authenticator;

-- Setup trusted user
CREATE role badger_user nologin;
GRANT badger_user TO authenticator;
GRANT USAGE ON schema api TO badger_user;
GRANT ALL ON api.badges TO badger_user;
GRANT USAGE,
    SELECT ON sequence api.badges_id_seq TO badger_user;

-- Auth
create schema auth;
grant usage on schema auth to web_anon, badger_user;

create or replace function auth.check_token() returns void
  language plpgsql
  as $$
begin
  if current_setting('request.jwt.claim.email', true) =
     'disgruntled@mycompany.com' then
    raise insufficient_privilege
      using hint = 'Nope, we are on to you';
  end if;
end
$$;
