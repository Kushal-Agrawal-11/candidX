const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const userRoutes = require('./routes/userRoute');

const app = express();

// Enable CORS for all routes
app.use(cors());


app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(express.json());

app.use('/api', userRoutes);

const port = process.env.PORT;

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo connected ${conn.connection.host}`)
    } catch (error) {
        console.log(`error ${error.message}`);
    }
}

connectDB();