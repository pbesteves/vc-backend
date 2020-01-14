import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryType } from './dto/new-category.dto';
import { CategoryInput } from './inputs/new-category.inputs';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel('Category') private categoryModel: Model<Category>) { }

  async create(createCategoryDto: CategoryInput): Promise<CategoryType> {
    const createCategory = new this.categoryModel(createCategoryDto)
    return await createCategory.save()
  }

  async findAll(): Promise<CategoryType[]> {
    return await this.categoryModel.find().exec();
  }

  async findOne(id: string): Promise<CategoryType> {
    return await this.categoryModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<CategoryType> {
    return await this.categoryModel.findByIdAndRemove(id);
  }

  async update(id: string, category: Category): Promise<CategoryType> {
    return await this.categoryModel.findByIdAndUpdate(id, category, { new: true })
  }
}