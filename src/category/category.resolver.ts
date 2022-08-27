import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './categories.service';
import { CreateCategoryArgs } from './dto/args/create-category.args';
import { GetCategoriesArgs } from './dto/args/get-categories.args';
import { Category } from './entities/category.entity';

@Resolver()
export class CategoryResolver {

  constructor(private categoriesService: CategoryService){}

    @Query(returns => [Category], { name: 'categories', nullable: true })
    getAllCategories(@Args() args: GetCategoriesArgs): Promise<Category[]> {
      return this.categoriesService.getAll();
    }

    @Mutation(returns => Category)
    createCategory(@Args() args: CreateCategoryArgs): Promise<Category> {
      return this.categoriesService.create(args);
    }
}
