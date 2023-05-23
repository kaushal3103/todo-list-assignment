require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const cors = require('cors');

const connectDB = require('./db/connect')
const router = require('./routes/todolist');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/api/v1',router);

const start = async()=>{
    try{
    await connectDB(process.env.MONGO_URI);
   app.listen(port,console.log(`Server is listening on Port ${port}....`));
    }
    catch(error){
      console.log(error);
    }
}

start();