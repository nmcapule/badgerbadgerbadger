-- Setup web_anon login
CREATE role web_anon nologin;
GRANT USAGE ON schema api TO web_anon;
GRANT SELECT ON api.todos TO web_anon;
-- Setup web_anon auth
CREATE role authenticator noinherit login PASSWORD 'mysecretpassword';
GRANT web_anon TO authenticator;
-- Setup trusted user
CREATE role todo_user nologin;
GRANT todo_user TO authenticator;
GRANT USAGE ON schema api TO todo_user;
GRANT ALL ON api.todos TO todo_user;
GRANT USAGE,
    SELECT ON sequence api.todos_id_seq TO todo_user;
