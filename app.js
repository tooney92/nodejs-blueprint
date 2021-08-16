if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: __dirname + "/.env" });
}

const express = require("express");
const app = express();
const cors = require("cors");
const config = require('better-config')
const path = require("path");
const mongoose = require("mongoose")
const routes = require('./src/routes')
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

// dynamically prepends "/api" to your routes.
app.use('/api', routes)

config.set('./config.json');
  

// mongoDB server connection
mongoose.connect(process.env.databaseUrl, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
const db = mongoose.connection
db.on("open", ()=>{
    console.log("mongodb connected");
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})
  
module.exports = app;