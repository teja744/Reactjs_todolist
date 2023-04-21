require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://' +  process.env.IDOFUSER + process.env.PASSWORD + process.env.LASTDATA + '/todolistDataBase',{ useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connect('mongodb://127.0.0.1:27017/reactToDoList', {useNewUrlParser: true,useUnifiedTopology: true,});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const itemsSchema = new mongoose.Schema({
  text: String
});

const Item = mongoose.model('Item', itemsSchema);

app.get("/",function(req,res){
  res.send("hai");
});

app.get('/note', async (req, res) => {
  const todoItems = await Item.find();
  res.send(todoItems);
});

app.post('/note', async (req, res) => {
  const { text } = req.body;
  const todoItem = new Item({ text });
  await todoItem.save();
  res.send(todoItem);
});

app.delete('/note/:id', async (req, res) => {
  const { id } = req.params;
  await Item.deleteOne({ _id: id });
  res.send({ message: 'Item deleted successfully' });
});


app.listen(3001, () => {
  console.log('Server started on port 3001');
});
