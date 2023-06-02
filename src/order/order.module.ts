import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { OrderResolver } from './order.resolver';
import { OrderService } from './order.service';
import { UsersModule } from 'src/users/users.module';
@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity]), UsersModule],
  providers: [OrderResolver, OrderService],
  exports: [OrderService],
})
export class OrderModule {}
