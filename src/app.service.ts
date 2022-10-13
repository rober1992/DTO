import { Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import { CreateProductDto } from 'DTO/create.dto.products';
import { Model } from 'mongoose';
@Injectable()
export class ProductApi {
  constructor(
    @InjectModel('Products') private readonly productModel: Model<CreateProductDto>, ) {
  };

  async getProducts() : Promise<CreateProductDto[]> {
    return this.productModel.find();
  }

  async createProducts ( productoNuevo : CreateProductDto) : Promise<CreateProductDto> {
    const newProduct = new this.productModel(productoNuevo);

    return await newProduct.save();
  }

  async updateProduct (idProd : string, data : CreateProductDto) : Promise<CreateProductDto> {
    return await this.productModel.findByIdAndUpdate(idProd, data, {
      new : true,
    });
  }

  async deleteProduct(idProd : string) : Promise<void> {
    await this.productModel.findByIdAndDelete(idProd);
  }


}
