-- Note: Role web_gateway is already created upon initialization.

-- Create Role: web_anon
CREATE ROLE web_anon;
GRANT web_anon TO web_gateway;

-- Create Role: web_user (role of a logged-in user)
CREATE ROLE web_user;
GRANT web_user TO web_gateway;

ALTER DEFAULT PRIVILEGES REVOKE EXECUTE ON functions FROM public;

-- Setup permissions to web_anon and web_user
GRANT USAGE ON SCHEMA api TO web_anon, web_user;
GRANT USAGE ON SCHEMA api_private TO web_anon, web_user;
GRANT EXECUTE ON FUNCTION api.authenticate_account(text, text) TO web_anon, web_user;
GRANT EXECUTE ON FUNCTION api.current_account() TO web_anon, web_user;

-- Setup permissions to web_anon
GRANT SELECT ON TABLE api.accounts TO web_anon;
GRANT SELECT ON TABLE api.badges TO web_anon;
GRANT SELECT ON TABLE api.badge_grants TO web_anon;
GRANT EXECUTE ON FUNCTION api.register_account(text, text) TO web_anon;

-- Setup permissions to web_user
GRANT SELECT ON TABLE api.accounts TO web_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE api.badges TO web_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE api.badge_grants TO web_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE api.badge_permissions TO web_user;
GRANT SELECT ON TABLE api_private.accounts TO web_user;

-- Setup role-level security
ALTER TABLE api.accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE api.badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE api.badge_grants ENABLE ROW LEVEL SECURITY;
ALTER TABLE api.badge_permissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY select_accounts ON api.accounts FOR SELECT USING (true);
CREATE POLICY select_badges ON api.badges FOR SELECT USING (true);
CREATE POLICY select_badge_grants ON api.badge_grants FOR SELECT USING (true);
CREATE POLICY select_badge_permissions ON api.badge_permissions FOR SELECT USING (true);

-- Allow editing account row if matches current logged-in user.
CREATE POLICY policy_accounts ON api.accounts
USING (id = nullif(current_setting('jwt.claims.account_id', true), '')::integer);
-- Allow editing badges if has edit badge_permission for current user.
CREATE POLICY policy_badges ON api.badges
USING (EXISTS(
    SELECT 1
    FROM api.badge_permissions AS p
    WHERE p.can_edit
      AND p.badge_id = id
      AND (account_id IS NULL OR account_id = nullif(current_setting('jwt.claims.account_id', true), '')::integer)
));
-- Allow editing badge grants if has grant badge_permission for or granted by current user.
CREATE POLICY policy_badge_grants ON api.badge_grants
USING (EXISTS(
    SELECT 1
    FROM api.badge_permissions AS p
    WHERE p.can_grant
      AND p.badge_id = badge_id
      AND (account_id IS NULL 
        OR account_id = nullif(current_setting('jwt.claims.account_id', true), '')::integer
        OR granted_by = nullif(current_setting('jwt.claims.account_id', true), '')::integer)
));
-- Allow editing badge permissions if matches current user.
CREATE POLICY policy_badge_permissions ON api.badge_permissions
USING (account_id = nullif(current_setting('jwt.claims.account_id', true), '')::integer);
