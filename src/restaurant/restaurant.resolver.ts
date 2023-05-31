import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RestaurantService } from './restaurant.service';
import { RestaurantEntity } from './restaurant.entity';
import { RestaurantInput } from './dto/restaurant.input';

@Resolver()
export class RestaurantResolver {
  constructor(readonly restaurantService: RestaurantService) {}

  @Mutation(() => RestaurantEntity)
  create(@Args('input') createRestaurantInput: RestaurantInput) {
    return this.restaurantService.create(createRestaurantInput);
  }

  @Query(() => RestaurantEntity, { name: 'getAllRestaurant' })
  findAll() {
    return this.restaurantService.findAll();
  }
}
