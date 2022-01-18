import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { RemoveBookInput } from './dto/remove-book.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UseFilter } from '../decorators/use-filter.decorator';
import { FindBookInput } from './dto/find-book.input';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Mutation(() => Book)
  @UseGuards(JwtAuthGuard)
  createBook(
    @Args('createBookInput')
    createBookInput: CreateBookInput,
  ) {
    return this.booksService.create(createBookInput);
  }

  @Query(() => [Book], { name: 'books' })
  @UseGuards(JwtAuthGuard)
  findAll(
    @Args('findBookInput', { nullable: true }) input: FindBookInput,
    @UseFilter('findBookInput') findBookInput: FindBookInput,
    @Info() info,
  ) {
    return this.booksService.findAll({ findBookInput, info });
  }

  @Mutation(() => Book)
  @UseGuards(JwtAuthGuard)
  removeBook(
    @Args('removeBookInput')
    removeBookInput: RemoveBookInput,
  ) {
    return this.booksService.remove(removeBookInput);
  }
}
