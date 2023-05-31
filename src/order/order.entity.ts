import { Field, Int } from '@nestjs/graphql';
import { RestaurantEntity } from 'src/restaurant/restaurant.entity';
import { UsersEntity } from 'src/users/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn()
  food: string;

  @Column()
  drink: string;

  @Field(() => Int)
  @Column()
  foodAmount: number;

  @Field(() => Int)
  @Column()
  drinkAmount: number;

  @Field(() => Int)
  @Column()
  price: number;

  @ManyToOne(() => UsersEntity, (userEntity) => userEntity.orders)
  @JoinColumn()
  user: UsersEntity[];

  @ManyToOne(
    () => RestaurantEntity,
    (restaurantEntity) => restaurantEntity.orders,
  )
  @JoinColumn()
  restaurant: RestaurantEntity;
}
