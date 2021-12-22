import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { RemoveUserInput } from './dto/remove-user.input';
import { FindUserInput } from './dto/find-user.input';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(input: FindUserInput, findUserInput: FindUserInput): Promise<User[]>;
    removeUser(removeUserInput: RemoveUserInput): Promise<User>;
}
