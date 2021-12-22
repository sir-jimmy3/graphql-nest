import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BookSortInput {
  @Field({ nullable: true })
  id: 'ASC' | 'DESC';

  @Field({ nullable: true })
  name: 'ASC' | 'DESC';
}
