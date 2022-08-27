import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Todo } from 'src/todo/entities/todo.entity';
import { CategoryService } from './categories.service';
import { CreateCategoryArgs } from './dto/args/create-category.args';
import { Category } from './entities/category.entity';

@Resolver(() => Category)
export class CategoryResolver {

  constructor(
    private categoryService: CategoryService
    ){}

    @Query(returns => [Category], { name: 'categories', nullable: true })
    getAllCategories(): Promise<Category[]> {
      return this.categoryService.getAll();
    }

    @Mutation(returns => Category)
    createCategory(@Args() args: CreateCategoryArgs): Promise<Category> {
      return this.categoryService.create(args);
    }

    @ResolveField()
    async todos(@Parent() category: Category): Promise<Todo[]>{
      return this.categoryService.findCategoryTodos(category.id);
    }
}
