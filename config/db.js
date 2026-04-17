import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const { Pool } = pg;

const databaseUrl = process.env.DATABASE_URL;

export const db = new Pool({
  connectionString: databaseUrl,
  ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false,
});

