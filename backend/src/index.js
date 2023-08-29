const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const Order = require("./models/order");
const Plan = require("./models/plans");

const validateFields = require("./middleware");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/plans", async (req, res) => {
  const plans = await Plan.find();
  return res.status(200).json(plans);
});

app.post(
  "/plans",
  validateFields(["name", "speed", "prefix", "price"]),
  async (req, res) => {
    const newPlan = new Plan({ ...req.body });

    const createdPlan = await newPlan.save();
    return res.status(201).json(createdPlan);
  }
);

app.put(
  "/plans/:id",
  validateFields(["name", "speed", "prefix", "price"]),
  async (req, res) => {
    const { id } = req.params;
    await Plan.updateOne({ _id: id }, req.body);
    const updatedPlan = await Plan.findById(id);
    return res.status(200).json(updatedPlan);
  }
);

app.delete("/plans/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPlan = await Plan.findByIdAndDelete(id);
  return res.status(200).json(deletedPlan);
});

app.get("/orders", async (req, res) => {
  const orders = await Order.find();
  return res.status(200).json(orders);
});

app.post(
  "/orders",
  validateFields(["clientName", "clientEmail", "clientPhone", "planId"]),
  async (req, res) => {
    const newOrder = new Order({ ...req.body });

    const createdOrder = await newOrder.save();
    return res.status(201).json(createdOrder);
  }
);

app.put(
  "/orders/:id",
  validateFields(["clientName", "clientEmail", "clientPhone", "planId"]),
  async (req, res) => {
    const { id } = req.params;
    await Order.updateOne({ _id: id }, req.body);
    const updatedOrder = await Order.findById(id);
    return res.status(200).json(updatedOrder);
  }
);

app.delete("/orders/:id", async (req, res) => {
  const { id } = req.params;
  const deletedOrder = await Order.findByIdAndDelete(id);
  return res.status(200).json(deletedOrder);
});

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://guieloisilva:tf4dBMTq4rDeDBSc@alareschallenge.qgokl4t.mongodb.net/?retryWrites=true&w=majority"
    );

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
