import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoryType } from './dto/new-category.dto';
import { CategoriesService } from './categories.service';
import { CategoryInput } from './inputs/new-category.inputs';

@Resolver('Categories')
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) { }

  @Query(() => [CategoryType])
  async categories(): Promise<CategoryType[]> {
    return await this.categoriesService.findAll();
  }

  @Mutation(() => CategoryType)
  async createCategory(@Args('input') input: CategoryInput): Promise<CategoryInput> {
    return this.categoriesService.create(input);
  }

  @Mutation(() => CategoryType)
  async updateCategory(
    @Args('id') id: string,
    @Args('input') input: CategoryInput
  ): Promise<CategoryInput> {
    return this.categoriesService.update(id, input);
  }

  @Mutation(() => CategoryType)
  async deleteCategory(@Args('id') id: string): Promise<CategoryInput> {
    return this.categoriesService.delete(id);
  }
}
