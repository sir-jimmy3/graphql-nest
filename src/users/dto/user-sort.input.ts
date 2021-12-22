import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserSortInput {
  @Field({ nullable: true })
  id: 'ASC' | 'DESC';

  @Field({ nullable: true })
  name: 'ASC' | 'DESC';
}
