import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { User } from './interfaces/user.interface';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
  private users: User[] = [];

  async createUser(CreateUserDTO: CreateUserDTO): Promise<User> {
    const passwordHashed = await argon2.hash(CreateUserDTO.password);

    const user: User = {
      ...CreateUserDTO,
      id: this.users.length + 1,
      password: passwordHashed,
    };

    this.users.push(user);

    return user;
  }

  async getAllUser(): Promise<User[]> {
    return this.users;
  }
}
