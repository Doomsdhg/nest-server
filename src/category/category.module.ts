import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryResolver } from './category.resolver';
import { Category } from './entities/category.entity';
import { CategoryService } from './categories.service';

@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    controllers: [],
    providers: [CategoryResolver, CategoryService],
})
export class CategoryModule {}
