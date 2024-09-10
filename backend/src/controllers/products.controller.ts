import { Controller, Route, Get, Post, Body, Path, Delete, Patch } from "tsoa";
import { productType } from "../types/productsType";
import Products from "../models/productsModel";

@Route("/v1/products")
export class ProductController extends Controller {
  // Get all products
  @Get("/")
  public async getAllProducts(): Promise<productType[]> {
    // Fetch all products from the database
    return Products.find().exec();
  }

  //get one product by id
  @Get("/:id")
  public async getOneProductByID(
    @Path() id: string
  ): Promise<productType | null> {
    const product = await Products.findById(id).exec();
    if (!product) {
      this.setStatus(404); // Not Found
      return null;
    }
    return product;
  }

  // Create a new product
  @Post("/")
  public async createProduct(
    @Body() requestBody: productType
  ): Promise<productType> {
    // Save a new product to the database
    return new Products(requestBody).save();
  }

  //update product by id use patch method
  @Patch("/:id")
  public async updateProductById(
    @Path() id: String,
    @Body() requestBody: Partial<productType>
  ): Promise<productType | null> {
    const updateProduct = await Products.findByIdAndUpdate(id, requestBody, {
      new: true,
      runValidators: true,
    }).exec();
    if (!updateProduct) {
      this.setStatus(404);
      return null;
    }
    return updateProduct;
  }

  //delete product by id
  @Delete("/:id")
  public async deleteProductById(
    @Path() id: String
  ): Promise<productType | null> {
    const deleteProduct = await Products.findByIdAndDelete(id).exec();
    if (!deleteProduct) {
      this.setStatus(404); //not found
      return null;
    }
    this.setStatus(200);
    return deleteProduct;
  }
}
