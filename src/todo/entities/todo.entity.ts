import { Field, ObjectType } from "@nestjs/graphql";
import { Category } from "src/category/entities/category.entity";
import { Constants } from "src/constants/constants";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Todo {
    
    @PrimaryGeneratedColumn(Constants.ENTITY_OPTIONS.UUID)
    @Field()
    id: string;

    @Column()
    @Field()
    text: string;

    @Column({ default: false })
    @Field()
    isCompleted: boolean;

    @Column()
    @Field()
    categoryId: string;

    @ManyToOne(() => Category, category => category.todos)
    @Field(type => Category)
    category: Category;
}