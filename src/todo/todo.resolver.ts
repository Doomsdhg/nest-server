import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CategoryService } from 'src/category/categories.service';
import { Category } from 'src/category/entities/category.entity';
import { CreateTodoArgs } from './dto/args/create-todo.args';
import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';

@Resolver(() => Todo)
export class TodoResolver {
    constructor(
        private todoService: TodoService,
        private categoryService: CategoryService
        ){}

    @Query(returns => [Todo], { name: 'todos', nullable: true })
    getAllTodos(): Promise<Todo[]> {
      return this.todoService.getAll();
    }

    @Mutation(returns => Todo)
    createTodo(@Args() args: CreateTodoArgs): Promise<Todo> {
      return this.todoService.create(args);
    }

    @ResolveField()
    async category(@Parent() todo: Todo): Promise<Category>{
        const { categoryId } = todo;
        return await this.categoryService.findOne(categoryId);
    }
}
