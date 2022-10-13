import { Module } from '@nestjs/common';
import { ProductController } from './app.controller';
import { ProductApi } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import config
 from 'config';
import { ProductSchema } from 'DTO/products.schema';
@Module({
  imports: [
    MongooseModule.forRoot(config.MONGO_LOCAL_DBNAME),
    MongooseModule.forFeature([ { name : 'Products', schema : ProductSchema}])
  ],
  controllers: [ProductController],
  providers: [ProductApi],
})
export class AppModule {}
