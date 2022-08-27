import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CategoryModule } from './category/category.module';
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
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    TypeOrmModule.forRoot(ormConfig),
    TodoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
