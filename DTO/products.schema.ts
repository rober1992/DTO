import { Schema } from 'mongoose';
import { CreateProductDto } from './create.dto.products';

export const ProductSchema = new Schema<CreateProductDto> ({
    name : {type : String, required : true},
    description : {type : String, required : true},
    price :  {type : Number, required : true},
    stock : {type : Number, required : true},
})