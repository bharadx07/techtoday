const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },

  pfp: {
    type: String,
    default: "",
  },

  topics: {
    type: Array,
    default: ["Software", "Hardware", "Finance", "Buisness"],
  },

  jobDefaultCount: {
      type: Number,
      default: 9
  },

  newsDefaultCount: {
      type: Number,
      default: 9
  },

  date: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model('User', UserSchema)