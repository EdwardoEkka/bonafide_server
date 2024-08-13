const mongoose = require("mongoose");

const bonafideSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  parent_name: {
    type: String,
    required: true,
  },
  regd_no: {
    type: String,
    required: true,
    unique: true,
  },
  branch: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  programme: {
    type: String,
    required: true,
  },
});

const Bonafide = mongoose.model("Bonafide", bonafideSchema);

module.exports = Bonafide;
