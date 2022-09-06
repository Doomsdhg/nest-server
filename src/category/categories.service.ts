import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../todo/entities/todo.entity';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category) 
        private categoriesRepository: Repository<Category>,
        @InjectRepository(Todo)
        private todosRepository: Repository<Todo>
    ){}

    create(title: string): Promise<Category>{
        const newCategory = this.categoriesRepository.create({title});
        return this.categoriesRepository.save(newCategory);
    }

    async getAll(): Promise<Category[]>{
        const categories: Category[] = await this.categoriesRepository.find();
        return this.sortTodosInCategories(categories);
    }

    findOne(id: string): Promise<Category>{
        return this.categoriesRepository.findOneBy({id});
    }

    findCategoryTodos(categoryId: string): Promise<Todo[]>{
        return this.todosRepository.findBy({categoryId});
    }

    private sortTodosInCategories(categories: Category[]): Category[]{
        return categories.map((category: Category) => {
            if (!category.todos){
                return category;
            }
            this.sortTodosAlphabetically(category);
            this.sortTodosByComplecity(category);
            return category;
        });
    }

    private sortTodosByComplecity(category: Category): void{
     category.todos = category.todos
     .sort((firstTodo: Todo, secondTodo: Todo) => {
       const bothEquallyCompleted = firstTodo.isCompleted === secondTodo.isCompleted;
       const onlyFirstIsCompleted = firstTodo.isCompleted && !secondTodo.isCompleted;
       if (bothEquallyCompleted) return 0;
       else if (onlyFirstIsCompleted) return 1;
       else return -1;
     });
    } 

    private sortTodosAlphabetically(category: Category): void {
     category.todos = category.todos
     .sort((firstTodo: Todo, secondTodo: Todo) => {
       return firstTodo.text.localeCompare(secondTodo.text);
     })
    }
}
