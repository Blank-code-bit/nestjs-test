import { Field, ObjectType } from '@nestjs/graphql';
import { OrderEntity } from 'src/order/order.entity';
import { UsersEntity } from 'src/users/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class RestaurantEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  address: string;

  @Field()
  @Column()
  photo: string;

  @OneToMany(() => OrderEntity, (orderEntity) => orderEntity.restaurant)
  @JoinColumn()
  orders: OrderEntity[];
}
