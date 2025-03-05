import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import pg from "pg";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World! au ", port });
});

app.use("/api", router);

app.listen(port, () => {
  console.log("serveur lancé " + port);
});

const { Client } = pg;

const product = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

product.on("error", (error) => {
  console.log("Une erreur est survenue ", error);
});

const query = (text, param) => product.query(text, param);

// Connexion à la base de données
product
  .connect()
  .then(() => {
    console.log("Connexion à la base de données réussie !");
  })
  .catch((error) => {
    console.error("Erreur de connexion à la base de données :", error);
  });

export default query;
