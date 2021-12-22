import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { CreateUserInput } from '../users/dto/create-user.input';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<{
        id: string;
        name: string;
        email: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        books: import("../books/entities/book.entity").Book[];
    }>;
    login(user: User): Promise<{
        access_token: string;
        user: User;
    }>;
    signup(createUserInput: CreateUserInput): Promise<User>;
}
