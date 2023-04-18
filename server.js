import * as dotenv from 'dotenv'

import express from "express";
import morgan from 'morgan';

import authUserRouter from './app/auth/auth.routes.js'
import prisma from './app/prisma.js'

dotenv.config()

const app = express();
const PORT = 5050;

async function start() {
    if (process.env.MODE === 'dev') {
        app.use(morgan('dev'));
    }
    app.use(authUserRouter);
        
    app.listen(PORT, () => {
        if (process.env.MODE === 'dev') {
            console.log(`🧑‍💻 Started in DEV MODE`);
        }
        app.use(express.json());
        console.log(`🚀 Server started on port ${PORT}`);
    })
}

start()
    .then(async() => {
        await prisma.$disconnect();
    })
    .catch(async e => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1)
    })