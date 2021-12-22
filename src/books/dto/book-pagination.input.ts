import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BookPaginationInput {
  @Field({ nullable: true })
  take: number;

  @Field({ nullable: true })
  skip: number;
}
