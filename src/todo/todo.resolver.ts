import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CategoryService } from 'src/category/categories.service';
import { Category } from 'src/category/entities/category.entity';
import { Constants } from 'src/constants/constants';
import { CreateTodoArgs } from './dto/args/create-todo.args';
import { ToggleTodoCompletedArgs } from './dto/args/toggle-todo-completed.args';
import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';

@Resolver(() => Todo)
export class TodoResolver {
    constructor(
        private todoService: TodoService,
        private categoryService: CategoryService
        ){}

    @Query(returns => [Todo], { name: Constants.QUERY_NAMES.GET_ALL_TODOS, nullable: true })
    getAllTodos(): Promise<Todo[]> {
      return this.todoService.getAll();
    }

    @Mutation(returns => Todo)
    async createTodo(@Args() args: CreateTodoArgs): Promise<Todo> {
      return this.todoService.create(args);
    }

    @Mutation(returns => Todo)
    async toggleTodoCompleted(@Args() args: ToggleTodoCompletedArgs): Promise<Todo> {
      await this.todoService.toggleCompleted(args.todoId);
      return this.todoService.findOne(args.todoId);
    }

    @ResolveField()
    async category(@Parent() todo: Todo): Promise<Category>{
        return await this.categoryService.findOne(todo.categoryId);
    }
}
