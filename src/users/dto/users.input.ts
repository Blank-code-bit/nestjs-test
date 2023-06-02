import { Field, InputType, PartialType, PickType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType('UserInput')
export class UserInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @Field(() => String)
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  password: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  phoneNumber: number;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  address: string;
}

@InputType('UserCreateInput')
export class UserCreateInput extends UserInput {}

@InputType('UserUpdateInput')
export class UserUpdateInput extends PartialType(UserCreateInput) {}
