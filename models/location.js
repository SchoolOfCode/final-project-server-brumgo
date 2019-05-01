const mongoose = require("mongoose");
const locationsSchema = new mongoose.Schema(
  {
  id: String,
  locationName: String,
  category: String,
  location: {
    type: { type: String, enum: ["Point"], required: true },
    coordinates: { type: [Number], required: true }
  },
  trivia: String,
  imageUrl: String,
  audioURL: String,
  videoURL: String
});

module.exports = mongoose.model("Location", locationsSchema);
