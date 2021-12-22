import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserPaginationInput {
  @Field({ nullable: true })
  take: number;

  @Field({ nullable: true })
  skip: number;
}
