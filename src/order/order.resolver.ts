import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { OrderService } from './order.service';
import { OrderEntity } from './order.entity';
import { OrderInput } from './dto/order.input';

@Resolver(() => OrderEntity)
export class OrderResolver {
  constructor(readonly orderService: OrderService) {}

  @Mutation(() => OrderEntity)
  createOrder(@Args('input') createOrderInput: OrderInput) {
    return this.orderService.create(createOrderInput);
  }

  @Query(() => OrderEntity)
  async orders(@Args('id') id: string): Promise<OrderEntity> {
    return this.orderService.findOneById(id);
  }

  @Query(() => [OrderEntity])
  async getAllOrders(@Args('id') userId: string): Promise<OrderEntity[]> {
    return this.orderService.findAll(userId);
  }

  @Query(() => [OrderEntity])
  async getNasiLemak(@Args('food') food: string): Promise<OrderEntity[]> {
    return this.orderService.findOneBy(food);
  }

  @Query(() => [OrderEntity])
  async getAllOrdersWithName(
    @Args('id') id: string,
    @Args('fullName') fullName: string,
  ): Promise<OrderEntity[]> {
    return this.orderService.findAllOrdersWithUser(id, fullName);
  }
}
