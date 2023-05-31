import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantEntity } from './restaurant.entity';
import { RestaurantService } from './restaurant.service';
import { RestaurantResolver } from './restaurant.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantEntity])],
  providers: [RestaurantResolver, RestaurantService],
  exports: [RestaurantService],
})
export class RestaurantModule {}
