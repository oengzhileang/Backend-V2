import mongoose, { Schema, Document } from "mongoose";
import { productType } from "../types/productsType";
const productSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

const Products = mongoose.model<productType & Document>(
  "Products",
  productSchema
);
export default Products;
