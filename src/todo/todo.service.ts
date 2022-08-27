import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryService } from 'src/category/categories.service';
import { Repository } from 'typeorm';
import { CreateTodoArgs } from './dto/args/create-todo.args';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo) 
        private todosRepository: Repository<Todo>,
        private categoryService: CategoryService
    ){}

    create(args: CreateTodoArgs): Promise<Todo>{
        const newTodo = this.todosRepository.create({text: args.text, categoryId: args.categoryId});
        return this.todosRepository.save(newTodo);
    }

    getAll(): Promise<Todo[]>{
        return this.todosRepository.find();
    }
}
