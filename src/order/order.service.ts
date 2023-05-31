import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from './order.entity';
import { OrderInput } from './dto/order.input';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private orderRepo: Repository<OrderEntity>,
  ) {}

  async create(orderInput: OrderInput): Promise<OrderEntity> {
    let createOrder = this.orderRepo.create(orderInput);
    return this.orderRepo.save(createOrder);
  }

  async findAll(): Promise<OrderEntity[]> {
    return this.orderRepo.find();
  }
}
