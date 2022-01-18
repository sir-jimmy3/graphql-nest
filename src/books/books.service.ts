import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { RemoveBookInput } from './dto/remove-book.input';
// import { fieldsMap } from 'graphql-fields-list';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {}

  create(createBookInput: CreateBookInput) {
    const newBook = this.bookRepository.create(createBookInput);
    return this.bookRepository.save(newBook);
  }

  findAll({ findBookInput, info }) {
    const fields = info.fieldNodes[0].selectionSet.selections.map(
      (item) => item.name.value,
    );
    // const map = fieldsMap(info);
    // console.log(map);
    const userRelationCheck = fields.indexOf('user');
    if (userRelationCheck === -1)
      return this.bookRepository.find({ ...findBookInput, select: fields });
    return this.bookRepository.find({
      relations: ['user'],
      ...findBookInput,
      select: fields,
    });

    // return this.bookRepository
    //   .createQueryBuilder('Book')
    //   .leftJoin(null, null)
    //   .select(['Book.id', 'Book.name'])
    //   .getMany();
  }

  async remove(removeBookInput: RemoveBookInput) {
    const book = await this.bookRepository.findOne(removeBookInput.id);
    await this.bookRepository.softRemove(removeBookInput);
    return book;
  }
}
