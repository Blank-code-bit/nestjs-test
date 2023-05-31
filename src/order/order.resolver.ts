import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { OrderEntity } from './order.entity';
import { OrderInput } from './dto/order.input';

@Resolver()
export class OrderResolver {
  constructor(readonly orderService: OrderService) {}

  @Mutation(() => OrderEntity)
  createOrder(@Args('input') createOrderInput: OrderInput) {
    return this.orderService.create(createOrderInput);
  }

  @Query(() => [OrderEntity])
  async orders(): Promise<OrderEntity[]> {
    return this.orderService.findAll();
  }
}
