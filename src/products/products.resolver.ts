import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductType } from './dto/new-product.dto';
import { ProductsService } from './products.service';
import { ProductInput } from './inputs/new-product.input';

@Resolver('Products')
export class ProductsResolver {
    constructor(private readonly productsService: ProductsService) { }

    @Query(() => [ProductType])
    async products(): Promise<ProductType[]> {
        return await this.productsService.findAll();
    }

    @Mutation(() => ProductType)
    async createProduct(@Args('input') input: ProductInput): Promise<ProductInput> {
        return this.productsService.create(input);
    }

    @Mutation(() => ProductType)
    async updateProduct(
        @Args('id') id: string,
        @Args('input') input: ProductInput
    ): Promise<ProductInput> {
        return this.productsService.update(id, input);
    }

    @Mutation(() => ProductType)
    async deleteProduct(@Args('id') id: string): Promise<ProductInput> {
        return this.productsService.delete(id);
    }
}
