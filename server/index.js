import express from 'express';
import dotenv from 'dotenv';
import Connection from './databse/db.js';
import DefaultData from './default.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from "./routes/routes.js";

dotenv.config();
const app = express();
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',Routes);


const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username,password);

app.listen(PORT,() => console.log(`Server started at ${PORT}`));

DefaultData();