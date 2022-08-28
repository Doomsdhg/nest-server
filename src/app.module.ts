import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CategoryModule } from './category/category.module';
import { Constants } from './constants/constants';
import { ormConfig } from './orm.config';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    CategoryModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      introspection: true,
      playground: true,
      debug: true,
      autoSchemaFile: join(process.cwd(), Constants.FILES_PATHS.GRAPHQL_SCHEMA)
    }),
    TypeOrmModule.forRoot(ormConfig),
    TodoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
