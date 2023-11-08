const mongoose = require('mongoose');

const initializeMongoose = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { initializeMongoose };
