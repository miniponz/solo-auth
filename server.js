require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./lib/app');
const PORT = process.env.PORT || 7890;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true 
});

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});

