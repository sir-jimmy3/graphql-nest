import { CreateBookInput } from './dto/create-book.input';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { RemoveBookInput } from './dto/remove-book.input';
export declare class BooksService {
    private bookRepository;
    constructor(bookRepository: Repository<Book>);
    create(createBookInput: CreateBookInput): Promise<Book>;
    findAll(data: any): Promise<Book[]>;
    remove(removeBookInput: RemoveBookInput): Promise<Book>;
}
