import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { CreateUserInput } from '../users/dto/create-user.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findOne(email);
    const valid = await bcrypt.compare(password, user?.password);
    if (user && valid) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    return {
      access_token: this.jwtService.sign({ email: user.email, sub: user.id }),
      user,
    };
  }

  async signup(createUserInput: CreateUserInput) {
    const user = await this.usersService.findOne(createUserInput.email);

    if (user) {
      throw new Error('User already exists');
    }

    createUserInput.password = await bcrypt.hash(createUserInput.password, 10);
    return this.usersService.create(createUserInput);
  }
}
