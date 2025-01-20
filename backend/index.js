require('dotenv').config();
const express = require('express')
const mongoose = require("mongoose");
const cors = require("cors");
const { UserModel } = require('./model/UserModel'); 


const { HoldingsModel } = require("./model/HoldingsModel")
const { PositionModel } = require("./model/PositionModel")
const {OrderModel} = require("./model/OrderModel")
const bcrypt = require('bcrypt'); 
const PORT = process.env.PORT || 3000;
const URL = process.env.MONGO_URL;

const app = express()
mongoose.connect(URL);

app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());




// MongoDB connection
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error(err));


  app.post('/api/signup', async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new UserModel({
        username,
        email,
        password: hashedPassword, 
      });
  
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
      console.error('Error signing up:', error);
      res.status(500).json({ message: 'Error signing up user', error });
    }
  });


// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful!' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Error logging in', error });
  }
});




app.get('/allHoldings', async(req,res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/allPositions', async(req,res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
});


app.post('/newOrder', async(req,res) => {
  let neewOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode:req.body.mode,
  });

  neewOrder.save();

  res.send("order saved!");
})

app.listen(PORT, () => {
  console.log("App Started")
  mongoose.connect(URL);
  console.log("DB Connected")
})