import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class RestaurantInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  address: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  photo: string;
}
