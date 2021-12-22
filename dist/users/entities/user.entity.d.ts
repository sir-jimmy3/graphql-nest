import { Book } from '../../books/entities/book.entity';
export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    books: Book[];
}
