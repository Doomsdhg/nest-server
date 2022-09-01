import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryService } from '../category/categories.service';
import { CreateTodoArgs } from './dto/args/create-todo.args';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo) 
        private todosRepository: Repository<Todo>,
        private categoryService: CategoryService
    ){}

    async create(args: CreateTodoArgs): Promise<Todo>{
        const { input } = args;
        if (input.categoryName){
            const createdCategory = await this.categoryService.create(input.categoryName);
            args.categoryId = createdCategory.id;
        }
        const newTodo = this.todosRepository.create({text: input.text, categoryId: args.categoryId});
        return this.todosRepository.save(newTodo);
    }

    getAll(): Promise<Todo[]>{
        return this.todosRepository.find();
    }

    findOne(id: string): Promise<Todo>{
        return this.todosRepository.findOneBy({id});
    }

    async toggleCompleted(id: string): Promise<void>{
        const todo = await this.todosRepository.findOneBy({id});
        await this.todosRepository.update(id, {isCompleted: !todo.isCompleted});
    }
}
