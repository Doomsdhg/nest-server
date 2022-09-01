import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from '../category/category.module';
import { Todo } from './entities/todo.entity';
import { TodoResolver } from './todo.resolver';
import { TodoService } from './todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todo]), CategoryModule],
  providers: [TodoService, TodoResolver]
})
export class TodoModule {}
