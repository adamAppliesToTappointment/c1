import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import memoryRoutes from './src/routes/calculatorMemory';
import corsMiddleware from './src/middlewares/corsMiddleware';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(corsMiddleware);
app.use('/memory', memoryRoutes);

module.exports = app;
