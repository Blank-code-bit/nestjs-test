import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { OrderResolver } from './order.resolver';
import { OrderService } from './order.service';
@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity])],
  providers: [OrderResolver, OrderService],
  exports: [OrderService],
})
export class OrderModule {}
