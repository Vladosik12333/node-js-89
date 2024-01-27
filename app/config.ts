import { config as makeConfig } from "dotenv";

makeConfig();

const { DB_HOST = "" } = process.env;

export { DB_HOST };
