import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RestaurantEntity } from './restaurant.entity';
import { Repository } from 'typeorm';
import { RestaurantInput } from './dto/restaurant.input';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(RestaurantEntity)
    private readonly restaurantRepo: Repository<RestaurantEntity>,
  ) {}

  async create(restaurantInput: RestaurantInput): Promise<RestaurantEntity> {
    let createRestaurant = this.restaurantRepo.create(restaurantInput);
    return this.restaurantRepo.save(createRestaurant);
  }

  async findAll(): Promise<RestaurantEntity[]> {
    return this.restaurantRepo.find();
  }
}
