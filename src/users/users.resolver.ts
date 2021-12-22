import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { RemoveUserInput } from './dto/remove-user.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { FindUserInput } from './dto/find-user.input';
import { UseFilter } from '../decorators/use-filter.decorator';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  @UseGuards(JwtAuthGuard)
  findAll(
    @Args('findUserInput', { nullable: true }) input: FindUserInput,
    @UseFilter('findUserInput') findUserInput: FindUserInput,
  ) {
    return this.usersService.findAll(findUserInput);
  }

  @Mutation(() => User)
  @UseGuards(JwtAuthGuard)
  removeUser(@Args('removeUserInput') removeUserInput: RemoveUserInput) {
    return this.usersService.remove(removeUserInput);
  }
}
