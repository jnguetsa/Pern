import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
const { Client } = pg;

const product = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

product.on("error", (error) => {
  console.log("Une erreur est survenu ", error);
});

const query = (text, param) => product.query(text, param);

product.connect();

export default query;
