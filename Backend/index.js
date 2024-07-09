import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import { usersRouter } from './src/Routes/UsersRoute.js';
import 'dotenv/config'
import { authRouter } from './src/Routes/AuthRoute.js';



const app = express();
app.use(express.json());

app.use(cors());



app.use('/users',usersRouter);
app.use('/',authRouter)



// 

const saraylarSchema = new mongoose.Schema({
  image: String,
  location: String,
  title: String,
  tutum: Number,  
  price: Number
});


const restoranlarSchema = new mongoose.Schema({
  image: String,
  location: String,
  title: String,
  tutum: Number,  
  price:Number
});


const fotovideoSchema = new mongoose.Schema({
  image: String,
  title: String,
  text: String,
  price: Number
});


const djSchema = new mongoose.Schema({
  image: String,
  title: String,
  price: Number
});


const apariciSchema = new mongoose.Schema({
  image: String,
  title: String,
  price: Number
});


const musiqiqrupuSchema = new mongoose.Schema({
  image: String,
  title: String,
  price: Number
});


const gelinlikSchema = new mongoose.Schema({
  image: String,
  title: String,
  location: String,
  price: Number
});


const avtomobilSchema = new mongoose.Schema({
  image: String,
  title: String,
  price: Number
});


const gozelliksalonuSchema = new mongoose.Schema({
  image: String,
  title: String,
  price: Number
});


const toytortlariSchema = new mongoose.Schema({
  image: String,
  title: String,
  price: Number
});



const ciceklerSchema = new mongoose.Schema({
  image: String,
  title: String,
  price: Number
});


// 



// 
const productModel = mongoose.model("saraylar", saraylarSchema);

const restoranlarModel = mongoose.model("restoranlar", restoranlarSchema);

const fotovideoModel = mongoose.model("fotovideo", fotovideoSchema);

const djModel = mongoose.model("dj", djSchema);

const apariciModel = mongoose.model("aparici", apariciSchema);

const musiqiqrupuModel = mongoose.model("musiqiqrupu", musiqiqrupuSchema);

const gelinlikModel = mongoose.model("gelinlik", gelinlikSchema);

const avtomobilModel = mongoose.model("avtomobil", avtomobilSchema);

const gozelliksalonuModel = mongoose.model("gozelliksalonu", gozelliksalonuSchema);

const toytortlariModel = mongoose.model("toytortlari", toytortlariSchema);

const ciceklerModel = mongoose.model("cicekler", ciceklerSchema);
// 
app.get("/restoranlar", async (req, res) => {
  const product = await restoranlarModel.find();
  res.send(product);
});
app.get("/saraylar", async (req, res) => {
  const product = await productModel.find();
  res.send(product);
});
app.get("/fotovideo", async (req, res) => {
  const product = await fotovideoModel.find();
  res.send(product);
});
app.get("/dj", async (req, res) => {
  const product = await djModel.find();
  res.send(product);
});
app.get("/aparici", async (req, res) => {
  const product = await apariciModel.find();
  res.send(product);
});
app.get("/musiqiqrupu", async (req, res) => {
  const product = await musiqiqrupuModel.find();
  res.send(product);
});
app.get("/gelinlik", async (req, res) => {
  const product = await gelinlikModel.find();
  res.send(product);
});
app.get("/avtomobil", async (req, res) => {
  const product = await avtomobilModel.find();
  res.send(product);
});
app.get("/gozelliksalonu", async (req, res) => {
  const product = await gozelliksalonuModel.find();
  res.send(product);
});
app.get("/toytortlari", async (req, res) => {
  const product = await toytortlariModel.find();
  res.send(product);
});
app.get("/cicekler", async (req, res) => {
  const product = await ciceklerModel.find();
  res.send(product);
});
// 


app.get("/saraylar/:id", async (req, res) => {
  const { id } = req.params;
  const product = await productModel.findById(id);
  res.send(product);
});

app.delete("/saraylar/:id", async (req, res) => {
  const { id } = req.params;
  const product = await productModel.findByIdAndDelete(id);
  res.send(product);
});

app.put("/saraylar/:id", async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  const product = await productModel.findByIdAndUpdate(id, body);
  res.send(product);
});

app.post("/saraylar", async (req, res) => {
  const body = req.body;
  const product = new productModel(body);
  await product.save();
  res.send(product);
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB', err));
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });