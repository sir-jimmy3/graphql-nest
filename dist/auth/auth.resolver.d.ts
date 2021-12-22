import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/login-user.input';
import { User } from '../users/entities/user.entity';
import { CreateUserInput } from '../users/dto/create-user.input';
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    login(loginUserInput: LoginUserInput, context: any): Promise<{
        access_token: string;
        user: User;
    }>;
    signup(createUserInput: CreateUserInput): Promise<User>;
}
