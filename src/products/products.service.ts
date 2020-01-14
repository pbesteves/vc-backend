import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductType } from './dto/new-product.dto';
import { Product } from './interfaces/product.interface';
import { ProductInput } from './inputs/new-product.input';

@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') private productModel: Model<Product>) { }

    async create(createItemDto: ProductInput): Promise<ProductType> {
        const createdProduct = new this.productModel(createItemDto)
        return await createdProduct.save()
    }

    async findAll(): Promise<ProductType[]> {
        return await this.productModel.find().exec();
    }

    async findOne(id: string): Promise<ProductType> {
        return await this.productModel.findOne({ _id: id })
    }

    async delete(id: string): Promise<ProductType> {
        return await this.productModel.findByIdAndRemove(id)
    }

    async update(id: string, product: Product): Promise<ProductType> {
        return await this.productModel.findByIdAndUpdate(id, product, { new: true })
    }
}
