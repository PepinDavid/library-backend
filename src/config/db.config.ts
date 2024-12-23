import { Sequelize } from "sequelize-typescript";
import { schemas } from "../schemas";
import { config } from "./config";

export const sequelize = new Sequelize({
    database: config.database.name || 'some_db',
    dialect: 'sqlite',
    username: config.database.username || 'admin',
    password: config.database.password || '',
    storage: ':memory:',
    models: schemas,
});
