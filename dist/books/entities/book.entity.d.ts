import { User } from '../../users/entities/user.entity';
export declare class Book {
    id: string;
    name: string;
    userId: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    user: User;
}
