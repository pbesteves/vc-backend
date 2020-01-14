import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class CategoryType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}