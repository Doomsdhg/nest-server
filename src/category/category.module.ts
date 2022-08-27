import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryResolver } from './category.resolver';
import { Category } from './entities/category.entity';
import { CategoryService } from './categories.service';
import { Todo } from 'src/todo/entities/todo.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Category, Todo])],
    controllers: [],
    providers: [CategoryResolver, CategoryService],
    exports: [CategoryService]
})
export class CategoryModule {}
