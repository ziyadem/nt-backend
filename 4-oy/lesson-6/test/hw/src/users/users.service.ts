import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repo';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async getUsers() {
    return this.usersRepository.getUsers();
  }

  async createUser(user) {
    let newUser = this.usersRepository.createUser(user);

    return {
      msg: 'Create course',
      data: newUser,
    };
  }

  async deleteUser(user_id) {
    let foundedUser = this.usersRepository.getOne(user_id);
    if (!foundedUser) {
      return {
        msg: 'User note found',
      };
    }
    this.usersRepository.deleteUser(user_id);
    return {
      msg: 'user deleted!',
    };
  }

  async updateUser(user_id, updateUser) {
    let foundedUser = this.usersRepository.getOne(user_id);
    console.log(foundedUser);

    if (!foundedUser) {
      return {
        msg: 'Course not found!',
      };
    }

    let res = this.usersRepository.updateUser(user_id, updateUser);

    return {
      msg: 'Course updated!',
      res
    };
  }
}
