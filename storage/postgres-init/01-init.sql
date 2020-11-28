-- Setup 'api' schema
CREATE schema api;
-- Initial tables
CREATE TABLE api.todos (
    id serial PRIMARY KEY,
    done boolean NOT NULL DEFAULT false,
    task text NOT NULL,
    due timestamptz
);
INSERT INTO api.todos (task)
VALUES ('finish tutorial 0'),
    ('pat self on back');
