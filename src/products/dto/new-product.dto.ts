import { Field, ID, ObjectType, Int } from 'type-graphql';

@ObjectType()
export class ProductType {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    description: string;

    @Field(() => Int)
    qty: number;

    @Field()
    creationDate: Date;

    @Field()
    imageUrl: string;
}