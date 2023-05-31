import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UsersEntity } from './users.entity';
import { UsersDto } from './dto/users.dto';
import { UserCreateInput } from './dto/users.input';

@Resolver()
export class UsersResolver {
  constructor(readonly userService: UsersService) {}

  @Mutation(() => UsersDto)
  async signUp(@Args('input') input: UserCreateInput): Promise<UsersDto> {
    return await this.userService.createOneUser(input);
  }

  @Query(() => UsersEntity, { name: 'getAllUsers' })
  findAll() {
    return this.userService.findAll();
  }
}
