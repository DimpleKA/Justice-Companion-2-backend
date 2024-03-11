// models/formData.js

const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  fatherName: String,
  age: Number,
  policeStation: String,
  residencePoliceStation: String,
  isDifferentPoliceStation: Boolean,
  eventDistrict: String,
  position: {
    latitude: Number,
    longitude: Number
  }
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
