export const development = {
  client: "sqlite3",
  connection: {
    filename: "./src/database/dev.sqlite3"
  },
  migrations: {
    directory: "./src/database/migrations",
  },
  useNullAsDefault: true,
};
