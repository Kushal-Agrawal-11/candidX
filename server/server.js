const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require("body-parser");

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(express.json());

const port = process.env.PORT;

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connrection successful");
        console.log(`Mongo connected ${conn.connection.host}`)
    } catch (error) {
        console.log(`error ${error.message}`);
    }
}

connectDB();