import mongoose from 'mongoose';

const EcommerceSchema = new mongoose.Schema({
 id: String,
  title: String,
  category: String,
  description: String,
  image: String,
  price: Number,
  rating: Number,
  quantity: Number
})

const Ecommerce = mongoose.models.Ecommerce || mongoose.model("Ecommerce", EcommerceSchema);

export { Ecommerce };