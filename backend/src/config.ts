import * as dotenv from 'dotenv';
import { PostGraphileOptions } from 'postgraphile';

dotenv.config({ path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env' });

export default {
  api: {
    port: process.env.PORT,
    root: process.env.API_ROOT,
    useSwagger:
      (process.env.USE_SWAGGER && process.env.USE_SWAGGER.toLowerCase() === 'true') || false,
    useCompression:
      (process.env.USE_COMPRESSION && process.env.USE_COMPRESSION.toLowerCase() === 'true') ||
      false,
  },

  db: {
    url: process.env.STORAGE_POSTGRES_URL,
  },

  postgraphile: {
    url: process.env.STORAGE_POSTGRES_URL,
    schema: process.env.POSTGRAPHILE_SCHEMA,
    options: {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
      pgDefaultRole: process.env.POSTGRAPHILE_DEFAULT_ROLE,
      jwtPgTypeIdentifier: process.env.POSTGRAPHILE_JWT_TOKEN_ID,
      jwtSecret: process.env.POSTGRAPHILE_JWT_SECRET,
    } as PostGraphileOptions,
  },
};
