import express from 'express';
import Route from './routes/routes.js'
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Route);

Connection();

const PORT = 8000;

app.listen(PORT ,() => console.log(`Server is Running successfully on PORT ${PORT}`));