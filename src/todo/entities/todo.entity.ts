import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../../category/entities/category.entity";

@ObjectType()
@Entity()
export class Todo {
    
    @PrimaryGeneratedColumn('uuid')
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