import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from './order.entity';
import { OrderInput } from './dto/order.input';
import { UsersService } from 'src/users/users.service';
import { UsersEntity } from 'src/users/users.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private orderRepo: Repository<OrderEntity>,
    private userService: UsersService,
  ) {}

  async create(orderInput: OrderInput): Promise<OrderEntity> {
    let createOrder = this.orderRepo.create(orderInput);
    const { userId } = orderInput;
    const getUser = await this.userService.getUser(userId);
    console.log(getUser);
    return this.orderRepo.save(createOrder);
  }

  async findOneById(id: string): Promise<OrderEntity> {
    return this.orderRepo.findOne({ where: { id } });
  }

  async findAll(id: string): Promise<OrderEntity[]> {
    return this.orderRepo.find({ where: { userId: id } });
  }

  async findOneBy(food: string): Promise<OrderEntity[]> {
    return this.orderRepo.find({ where: { food } });
  }

  async findAllOrdersWithUser(id: string, fullName: string) {
    return await this.orderRepo
      .createQueryBuilder('test')
      .select(['test.id', 'test.food'])
      .leftJoin('test.user', 'user')
      .where('user.id = :uID', { uID: id })
      .andWhere('user.fullName like :fullName', { fullName: `%${fullName}%` })
      .getMany();
  }

  // async findAllOrdersWithUser() {
  //   return this.orderRepo
  //   .find({ relations: ["user"] })
  //   .then(orders => orders.map(order => order.user));
  // }
}
