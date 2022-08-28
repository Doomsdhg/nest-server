import { Field, ObjectType } from "@nestjs/graphql";
import { Constants } from "src/constants/constants";
import { Todo } from "src/todo/entities/todo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Category {
    
    @PrimaryGeneratedColumn(Constants.ENTITY_OPTIONS.UUID)
    @Field()
    id: string;

    @Column()
    @Field({nullable: true})
    title: string;

    @OneToMany(() => Todo, todo => todo.category)
    @Field(type => [Todo], {nullable: true})
    todos?: Todo[];
}