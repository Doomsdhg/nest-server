import { Field, ObjectType } from "@nestjs/graphql";
import { Todo } from "src/todo/entities/todo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Category {
    
    @PrimaryGeneratedColumn('uuid')
    @Field()
    id: string;

    @Column()
    @Field({nullable: true})
    title: string;

    @OneToMany(() => Todo, todo => todo.category)
    @Field(type => [Todo], {nullable: true})
    todos?: Todo[];
}