import mongoose, { model } from "mongoose";
import { productType } from "../utils/productsType";

const Schema = mongoose.Schema;

const productSchema = new Schema<productType>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

const Products = model<productType>("Products", productSchema);

export default Products;
