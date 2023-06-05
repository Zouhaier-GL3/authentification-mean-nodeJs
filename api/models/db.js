require('./users');
const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/authentication';


// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true});

// mongoose.connection.on('connected', () => {
//   console.log(`Mongoose connected to ${dbURI}`);
// });
// mongoose.connection.on('error', (err) => {
//   console.log(`Mongoose connection error: ${err}`);
// });
// mongoose.connection.on('disconnected', () => {
//   console.log('Mongoose disconnected');
// });


const connectToMongo = async () => {
  await mongoose.connect(dbURI);
  console.log("Connected to MongoDB");
};

connectToMongo();