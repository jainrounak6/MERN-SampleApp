const config = require('config.json');
require('dotenv').config();
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };

const retryAttempts = 2;
let retryCount = 0;

const connectWithRetry = () => {
  mongoose.connect(process.env.MONGODB_URI, connectionOptions)
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => {
      console.error("Error connecting to database:", error.message);
      if (retryCount < retryAttempts) {
        retryCount++;
        console.log(`Retrying connection, attempt ${retryCount}/${retryAttempts}...`);
        setTimeout(connectWithRetry, 5000); // Retry after 5 seconds
      } else {
        console.error(`Max retry attempts (${retryAttempts}) reached. Exiting.`);
        process.exit(1); // Exit the application if max retries are reached
      }
    });
};

connectWithRetry();

mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};
