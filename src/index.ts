import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import { routes } from './routes';
import { connect } from './database';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connect();

app.use(routes);

app.listen(process.env.PORT, () => console.log(`APP Server is running -> localhost:${process.env.PORT}`));
