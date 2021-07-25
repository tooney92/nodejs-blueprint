if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: __dirname + "/.env" });
}

// const config = require('better-config');
const express = require("express");
const app = express();
const cors = require("cors");
const config = require('better-config')
const path = require("path");
const mongoose = require("mongoose")

  //redis connection
//   const redis = require("redis");
//   const port = process.env.PORT || 3000;
//   const redisPort = 6379
//   const redisClient = redis.createClient({
//     port: 6379,
//     host: '127.0.0.1',
//     retry_strategy: (options) =>{
//       if(options.attempt > 5){
//         return new Error('Retry attempts exhausted')
//       }
  
//       return (options.attempt * 1000)
//     }
//   });

config.set('./config.json');

const routes = require('./src/routes')

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use('/api', routes)
  
// redis server
// redisClient.on("error", function (error) {
// console.error("redis error");
// });

// redisClient.on("connect", function (error) {
// console.log("redis client connected")
// });

// redisClient.on('reconnecting', (o) => {
// console.log('Attempting to reconnect to Redis:');
// console.log(o);
// });

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