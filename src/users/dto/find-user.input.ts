import { Field, InputType } from '@nestjs/graphql';
import { UserFilterInput } from './user-filter.input';
import { UserPaginationInput } from './user-pagination.input';
import { UserSortInput } from './user-sort.input';

@InputType()
export class FindUserInput {
  @Field({ nullable: true })
  pagination: UserPaginationInput;

  @Field({ nullable: true })
  filter: UserFilterInput;

  @Field({ nullable: true })
  order: UserSortInput;
}
