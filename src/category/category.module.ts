import { Module } from '@nestjs/common';
import { CategoryResolver } from './category.resolver';

@Module({
    imports: [],
    controllers: [],
    providers: [CategoryResolver],
})
export class CategoryModule {
    
}
