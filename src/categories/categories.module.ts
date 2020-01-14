import { Module } from '@nestjs/common';
import { CategoriesResolver } from './categories.resolver';
import { CategorySchema } from './category.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesService } from './categories.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Category', schema: CategorySchema }])
    ],
    providers: [CategoriesResolver, CategoriesService],
})
export class CategorysModule {}