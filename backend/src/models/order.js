const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true,
  },
  clientEmail: {
    type: String,
    required: true,
  },
  clientPhone: {
    type: String,
    required: true,
  },
  planId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Plan",
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "IN PROGRESS",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
