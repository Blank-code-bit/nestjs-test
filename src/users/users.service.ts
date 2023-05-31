import { Injectable } from '@nestjs/common';
import { UsersEntity } from './users.entity';
import { Repository } from 'typeorm';
import { UserInput } from './dto/users.input';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity) private userRepo: Repository<UsersEntity>,
  ) {}

  async createOneUser(userInput: UserInput): Promise<UsersEntity> {
    let createUser = this.userRepo.create(userInput);
    return this.userRepo.save(createUser);
  }

  async findAll(): Promise<UsersEntity[]> {
    return this.userRepo.find();
  }
}
