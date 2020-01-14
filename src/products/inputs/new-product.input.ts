import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class ProductInput {
    @Field()
    readonly name: string;

    @Field()
    readonly description: string;

    @Field(() => Int)
    readonly qty: number;

    @Field()
    readonly imageUrl: string;
}