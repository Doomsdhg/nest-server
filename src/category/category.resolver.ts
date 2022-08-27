import { Args, Query, Resolver } from '@nestjs/graphql';
import { GetCategoriesArgs } from './dto/args/get-categories.args';
import { Category } from './entities/category.entity';

@Resolver()
export class CategoryResolver {

    @Query((returns) => [Category], { name: 'categories', nullable: true })
    getCategories(@Args() args: GetCategoriesArgs): [] {
      return [];
    }
}
