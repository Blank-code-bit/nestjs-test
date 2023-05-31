import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UsersDto {
  @Field()
  fullName: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  phoneNumber: number;

  @Field()
  address: string;
}
