import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'src/todo/entities/todo.entity';
import { Repository } from 'typeorm';
import { CreateCategoryArgs } from './dto/args/create-category.args';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category) 
        private categoriesRepository: Repository<Category>,
        @InjectRepository(Todo)
        private todosRepository: Repository<Todo>
    ){}

    create(args: CreateCategoryArgs): Promise<Category>{
        const newCategory = this.categoriesRepository.create({title: args.title});
        return this.categoriesRepository.save(newCategory);
    }

    getAll(): Promise<Category[]>{
        return this.categoriesRepository.find();
    }

    findOne(id: string): Promise<Category>{
        return this.categoriesRepository.findOneBy({id});
    }

    findCategoryTodos(categoryId: string): Promise<Todo[]>{
        return this.todosRepository.findBy({categoryId});
    }
}
