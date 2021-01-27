const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const TMPModel = require('./Models/tmptable')
 
app.use(cors());
app.use(express.json());
 
mongoose.connect('mongodb+srv://lauren:-8x24prt@cluster0.k1n3i.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
 
app.get('/insert', async (reg, res) => {
  const tmp = new TMPModel({ name: 'Lauren', age: 16, degree: 'Math' });
  await tmp.save();
  res.send('Inserted Data');
});
 
app.get('/get-all', async (reg, res) => {
  await TMPModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
 
app.listen(3002, () => {
  console.log("Server is listening");
});