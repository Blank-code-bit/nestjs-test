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
  @IsNotEmpty()
  foodAmount: number;

  @Field(() => Int)
  @IsNotEmpty()
  drinkAmount: number;

  @Field(() => Int)
  @IsNotEmpty()
  price: number;

  @Field()
  @IsNotEmpty()
  userId: string;
}
