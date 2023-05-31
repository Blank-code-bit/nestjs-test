import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class OrderInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  food: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  drink: string;

  @Field(() => Int)
  @IsString()
  @IsNotEmpty()
  foodAmount: number;

  @Field(() => Int)
  @IsString()
  @IsNotEmpty()
  drinkAmount: number;

  @Field(() => Int)
  @IsString()
  @IsNotEmpty()
  price: number;
}
