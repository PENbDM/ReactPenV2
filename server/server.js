import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import Items from "./models/Items.js";
import cartItems from "./models/cartItems.js";
import favItems from "./models/favItems.js";
import userRoutes from "./routes/user.js";
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected"))
  .catch((err) => console.log("DB Error", err));

const app = express();
app.use(express.json());

//routes
app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server started on 4000 port");
});

app.post("/item", async (req, res) => {
  try {
    const item = await Items.create(req.body);
    res.status(200).json(item);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/item", async (req, res) => {
  try {
    const item = await Items.find({});
    res.status(200).json(item);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.post("/cartItem", async (req, res) => {
  try {
    const cartItem = await cartItems.create(req.body);
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/getcartItems", async (req, res) => {
  try {
    const cartItem = await cartItems.find({});
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).then({ message: error.message });
  }
});

app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletCard = await cartItems.findByIdAndRemove(id);
    res.status(200).json(deletCard);
  } catch (error) {
    res.status(500).then({ message: error.message });
  }
});

app.post("/favItem", async (req, res) => {
  try {
    const favItem = await favItems.create(req.body);
    res.status(200).json(favItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/getfavItem", async (req, res) => {
  try {
    const favItem = await favItems.find({});
    res.status(200).json(favItem);
  } catch (error) {
    res.status(500).then({ message: error.message });
  }
});

app.delete("/deletee/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletFav = await favItems.findByIdAndRemove(id);
    res.status(200).json(deletFav);
  } catch (error) {
    res.status(500).then({ message: error.message });
  }
});
