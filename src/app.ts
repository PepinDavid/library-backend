import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize } from "./config/db.config";
import { errorHandlerMiddleware } from "./errors/errorsHandler";
import { apiRouter } from "./routes";
import authRouter from "./routes/auth.route";

dotenv.config();

const app = express();
const corsOptions = {
    origin: '*',
};

app.use([
    cors(corsOptions),
    express.json(),
    errorHandlerMiddleware,
]);

app.use('/connexion', authRouter);
app.use('/api', apiRouter);

export async function startConnectionDatabase() {
    try {
        await sequelize.authenticate();
        console.log(`Connection to the database: ${sequelize.config.database} established successfully`);

        await sequelize.sync({ force: false });
        console.log('Database synchronized.');
        
    } catch (error) {
        console.error('Unable to connect to the database', error);
    }
}

export default app;
