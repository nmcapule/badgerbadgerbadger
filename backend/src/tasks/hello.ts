// tasks/hello.js
export default async (payload, helpers) => {
  const { name } = payload;
  helpers.logger.info(`Hello, ${name}`);
};
