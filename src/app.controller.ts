import { Controller, Get, Body, Delete, Param, UsePipes, ValidationPipe, Post, Put } from '@nestjs/common';
import { ProductApi } from './app.service';
import { CreateProductDto } from 'DTO/create.dto.products';

@Controller()
export class ProductController {
  constructor(private readonly appService: ProductApi) {}

  @Get()
  getAllProducts(): Promise<CreateProductDto[]> {
    return this.appService.getProducts();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createProduct(@Body() producto : CreateProductDto) : Promise<CreateProductDto> {
    return this.appService.createProducts(producto);
  }

  @Put(':id')
  updateProduct(
    @Param('id') idProduct : string,
    @Body() data : CreateProductDto,
  ): Promise<CreateProductDto> {
    return this.appService.updateProduct(idProduct,data);
  }

  @Delete(':id')
  deleteProduct(@Param('id') idProd : string) : Promise<void> {
    return this.appService.deleteProduct(idProd);
  }
}
