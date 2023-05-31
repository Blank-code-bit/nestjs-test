import { OrderEntity } from 'src/order/order.entity';
import { RestaurantEntity } from 'src/restaurant/restaurant.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsersEntity {
  @PrimaryGeneratedColumn()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  phoneNumber: number;

  @Column()
  address: string;

  @OneToMany(() => OrderEntity, (orderEntity) => orderEntity.user)
  orders: OrderEntity[];

  @OneToMany(
    () => RestaurantEntity,
    (restaurantEntity) => restaurantEntity.user,
  )
  restaurants: RestaurantEntity[];
}
