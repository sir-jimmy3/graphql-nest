import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { RemoveUserInput } from './dto/remove-user.input';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserInput: CreateUserInput): Promise<User>;
    findAll(data: any): Promise<User[]>;
    findOne(email: string): Promise<User>;
    remove(removeUserInput: RemoveUserInput): Promise<User>;
}
