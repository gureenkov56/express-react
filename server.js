import * as dotenv from 'dotenv'
dotenv.config()

import express from "express";
import morgan from 'morgan';

import authUserRouter from './app/auth/auth.routes.js'

const app = express();
const PORT = 5050;

app.use(morgan('dev'));
app.use(authUserRouter);

app.listen(PORT, () => {
    if (process.env.MODE === 'dev') {
        console.log(`🧑‍💻 Started in DEV MODE`);
    }
    app.use(express.json());
    console.log(`🚀 Server started on port ${PORT}`);
})