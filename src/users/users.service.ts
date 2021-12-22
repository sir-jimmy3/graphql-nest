import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { RemoveUserInput } from './dto/remove-user.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(createUserInput: CreateUserInput) {
    const newUser = this.userRepository.create(createUserInput);
    return this.userRepository.save(newUser);
  }

  findAll(data) {
    return this.userRepository.find({ relations: ['books'], ...data });
  }

  findOne(email: string) {
    return this.userRepository.findOne({ email });
  }

  async remove(removeUserInput: RemoveUserInput) {
    const user = await this.userRepository.findOne(removeUserInput.id);
    await this.userRepository.softRemove(removeUserInput);
    return user;
  }
}
