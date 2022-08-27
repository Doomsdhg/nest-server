import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryArgs } from './dto/args/create-category.args';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category) 
        private categoriesRepository: Repository<Category>
    ){}

    create(args: CreateCategoryArgs): Promise<Category>{
        const newCategory = this.categoriesRepository.create({title: args.title});
        return this.categoriesRepository.save(newCategory);
    }

    getAll(): Promise<Category[]>{
        return this.categoriesRepository.find();
    }
}
