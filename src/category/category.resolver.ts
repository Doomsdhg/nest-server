import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Todo } from '../todo/entities/todo.entity';
import { CategoryService } from './categories.service';
import { CreateCategoryArgs } from './dto/args/create-category.args';
import { Category } from './entities/category.entity';

@Resolver(() => Category)
export class CategoryResolver {

  constructor(
    private categoryService: CategoryService
    ){}

    @Query(returns => [Category], { name: 'categories', nullable: true })
    async getAllCategories(): Promise<Category[]> {
      return await this.categoryService.getAll();
    }

    @Mutation(returns => Category)
    async createCategory(@Args() args: CreateCategoryArgs): Promise<Category> {
      return await this.categoryService.create(args.title);
    }

    @ResolveField()
    async todos(@Parent() category: Category): Promise<Todo[]>{
      return await this.categoryService.findCategoryTodos(category.id);
    }
}
