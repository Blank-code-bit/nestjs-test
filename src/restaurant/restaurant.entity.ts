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

@Entity()
export class RestaurantEntity {
  @PrimaryGeneratedColumn()
  name: string;

  @Column()
  address: string;

  @Column()
  photo: string;

  @ManyToOne(() => UsersEntity, (userEntity) => userEntity.restaurants)
  @JoinColumn()
  user: UsersEntity[];

  @OneToMany(() => OrderEntity, (orderEntity) => orderEntity.restaurant)
  @JoinColumn()
  orders: OrderEntity[];
}
