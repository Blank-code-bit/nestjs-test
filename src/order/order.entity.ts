import { Field, Int, ObjectType } from '@nestjs/graphql';
import { RestaurantEntity } from 'src/restaurant/restaurant.entity';
import { UsersEntity } from 'src/users/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

@ObjectType()
@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Field()
  @Column()
  food: string;

  @Field()
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

  @Column('uuid')
  @RelationId((entity: OrderEntity) => entity.user)
  userId: string;
}
