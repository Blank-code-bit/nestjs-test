import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { RestaurantModule } from './restaurant/restaurant.module';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    RestaurantModule,
    OrderModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'tiny.db.elephantsql.com',
      port: 5432,
      username: 'fxuxojtu',
      password: 'EdXbQ-VygQrBzElx8bHkQ5G_W2cm8Xyy',
      database: 'fxuxojtu',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
