import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { RemoveBookInput } from './dto/remove-book.input';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {}

  create(createBookInput: CreateBookInput) {
    const newBook = this.bookRepository.create(createBookInput);
    return this.bookRepository.save(newBook);
  }

  findAll(data) {
    return this.bookRepository.find({
      relations: ['user'],
      ...data,
    });
  }

  async remove(removeBookInput: RemoveBookInput) {
    const book = await this.bookRepository.findOne(removeBookInput.id);
    await this.bookRepository.softRemove(removeBookInput);
    return book;
  }
}
