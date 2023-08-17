import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
  database: "some_db",
  dialect: "sqlite",
  username: "root",
  password: "",
  storage: ":memory:",
  models: [],
  repositoryMode: true,
  dialectOptions: {
    ssl: process.env.DB_ENABLE_SSL == "true" && {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
