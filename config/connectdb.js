const mongoose = require("mongoose");


const connectdb = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(
      `MongoDB Connected: ${connection.connection.host}`.green.underline.bold
    );
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
};

module.exports = connectdb;
  