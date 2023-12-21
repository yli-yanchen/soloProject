import express from 'express';
import bodyParser  from 'body-parser';
import mongoose from 'mongoose';
import cors from "cors";

import homeRoutes from './routes/home.js';

const app = express();

app.use("/", homeRoutes);

app.use(bodyParser.json( {limit: "30mb", extended: true } ));
app.use(bodyParser.urlencoded( {limit: "30mb", extended: true } ));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://yliyanchen:Liyi19961013@cluster0.1oawmot.mongodb.net/?retryWrites=true&w=majority";
const PORT  = process.env.PORT || 8080;

mongoose.connect(CONNECTION_URL
    // , { useNewUrlParser: true, useUnifiedTopology: true }
    )
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false)