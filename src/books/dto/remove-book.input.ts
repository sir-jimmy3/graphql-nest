import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class RemoveBookInput {
  @Field(() => ID)
  id: string;
}
