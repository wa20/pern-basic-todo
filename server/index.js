const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
port = 5440


//middleware
app.use(cors());
app.use(express.json());
app.use(express.json()) //this is how we request data from the client side


//Routes

//create a todo

//get all todos

//get a todo

//update a todo

//delete a todo

app.listen(port, () => { 
    console.log(`Server is running on port ${port}`);
})