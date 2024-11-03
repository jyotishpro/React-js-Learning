const mongoose = require('mongoose');


const mongoURI = 'mongodb+srv://Jyotishkumar:Jyotish123@dev-clustor.1mynx.mongodb.net/stagevibes';

mongoose.connect(mongoURI)
  .then(() => {
    console.log(`Connected to MongoDB: stagevibes ${mongoose.connection.host}`);
  })
  .catch(err => {
    console.error('Error connecting to MongoDB', err);
  });



const FormSchema = new mongoose.Schema(
    {
        name: String,
        clas: String,
        roll: Number
    }
)

module.exports = mongoose.model('form', FormSchema);
