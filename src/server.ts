import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import propertyRouter from './routers/property.router';
import userRouter from './routers/user.router';
import { databaseConnect } from './configs/database.config';

dotenv.config();

const server = express();
server.use(express.json());

server.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}));

server.use("/property", propertyRouter);
server.use("/user", userRouter);

databaseConnect();

const port = 3000;

server.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
});