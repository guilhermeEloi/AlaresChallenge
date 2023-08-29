const mongoose = require("mongoose");

const PlanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  prefix: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  signatureWifi: {
    type: Boolean,
    required: false,
  },
  signatureGames: {
    type: Boolean,
    required: false,
  },
  signatureMovies: {
    type: Boolean,
    required: false,
  },
  costBenefit: {
    type: Boolean,
    required: false,
  },
  status: {
    type: Boolean,
    required: true,
    default: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Plan = mongoose.model("Plan", PlanSchema);

module.exports = Plan;
