import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '../todo/entities/todo.entity';
import { CategoryService } from './categories.service';
import { CategoryResolver } from './category.resolver';
import { Category } from './entities/category.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Category, Todo])],
    controllers: [],
    providers: [CategoryResolver, CategoryService],
    exports: [CategoryService]
})
export class CategoryModule {}
