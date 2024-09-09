import { Controller, Route, Get } from "tsoa";

export interface IItem {
  name: string;
  category: string;
  price: number;
}

@Route("/v1/products")
export class ProductController extends Controller {
  @Get("/")
  public getAllProducts(): Promise<IItem[]> {
    return Promise.resolve([
      { id: 1, name: "Cherrie", category: "fruit", price: 10.2 },
    ]);
  }
}

// import Products from "@/src/models/productsModel";
// import { Request, Response, NextFunction } from "express";
// // import mongoose from "mongoose";

// //get all products
// export async function getAllProducts(_req: Request, res: Response) {
//   const product = await Products.find({});
//   res.status(200).json(product);
// }

// //get single product
// export async function getSingleProduct(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   try {
//     // if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     //   const error = new Error("Product not found") as AppError;
//     //   error.statusCode = 404;
//     //   throw error;
//     // }
//     const id = req.params.id;
//     const product = await Products.findById(id);
//     // if (!product) {
//     //   return res.status(404).json({ error: "Product not found" });
//     // }
//     res.status(200).json(product);
//   } catch (error) {
//     // res.status(500).json({ message: (error as any).message });
//     // res.status(500).json({ message: "Server error" });
//     next(error);
//   }
// }

// //create product
// export async function createProduct(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   try {
//     const { Pname, Pprice, Pcategory, Pstock } = req.body;
//     const product = await Products.create({ Pname, Pprice, Pcategory, Pstock });
//     res.status(200).json(product);
//   } catch (error) {
//     // if (error instanceof MongoError && error.code === 11000) {
//     //   return res.status(400).json({ message: "Error this name already exist" });
//     // }
//     // res.status(500).json({ error: "Server error" });
//     next(error);
//   }
//   // try {
//   //   const newProduct = new Products(req.body);
//   //   const savedProduct = await newProduct.save();
//   //   res.status(201).json(savedProduct);
//   // } catch (error) {
//   //   res.status(400).json({ message: (error as any).message });
//   // }
// }

// //update all product
// export async function updateAllProduct(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   try {
//     const { id } = req.params;
//     const UpdateProduct = req.body;
//     const product = await Products.findByIdAndUpdate(
//       { _id: id },
//       UpdateProduct,
//       {
//         new: true,
//       }
//     );
//     if (!product) {
//       return res.status(400).json({ error: "Item not found" });
//     }
//     res.status(200).json(product);
//   } catch (error) {
//     next(error);
//   }
// }

// //update single product
// export async function updateSingleProduct(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   try {
//     const { id } = req.params;
//     const product = await Products.findByIdAndUpdate(
//       { _id: id },
//       { ...req.body },
//       { new: true }
//     );
//     if (!product) {
//       return res.status(400).json({ error: "Item not found" });
//     }
//     res.status(200).json(product);
//   } catch (error) {
//     next(error);
//   }
// }

// //delete product
// export async function deleteProduct(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   try {
//     const { id } = req.params;
//     const product = await Products.findByIdAndDelete({ _id: id });
//     if (!product) {
//       return res.status(400).json({ error: "Item not found" });
//     }
//     res.status(200).json({ message: "Product delete success" });
//   } catch (error) {
//     next(error);
//   }
// }
