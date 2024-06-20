const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require('../src/user/routes/userRoutes');

const {password,user} = require('../config.json')

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.rfcopg5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then( ()=> {
  console.log('MongoDB connection established');
})
.catch(err => console.error('Could not connect to MongoDB ...', err));

app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1/users',userRoutes)

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
