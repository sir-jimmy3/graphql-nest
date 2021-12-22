import { Field, InputType } from '@nestjs/graphql';
import { BookFilterInput } from './book-filter.input';
import { BookPaginationInput } from './book-pagination.input';
import { BookSortInput } from './book-sort.input';

@InputType()
export class FindBookInput {
  @Field({ nullable: true })
  pagination: BookPaginationInput;

  @Field({ nullable: true })
  filter: BookFilterInput;

  @Field({ nullable: true })
  order: BookSortInput;
}
