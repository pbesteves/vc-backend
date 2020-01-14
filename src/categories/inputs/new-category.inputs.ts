import { InputType, Field } from 'type-graphql';

@InputType()
export class CategoryInput {
    @Field()
    readonly name: string;
}