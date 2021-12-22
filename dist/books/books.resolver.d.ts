import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { RemoveBookInput } from './dto/remove-book.input';
import { FindBookInput } from './dto/find-book.input';
export declare class BooksResolver {
    private readonly booksService;
    constructor(booksService: BooksService);
    createBook(createBookInput: CreateBookInput): Promise<Book>;
    findAll(input: FindBookInput, findBookInput: FindBookInput): Promise<Book[]>;
    removeBook(removeBookInput: RemoveBookInput): Promise<Book>;
}
