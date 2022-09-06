import { Optional } from "@nestjs/common";
import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
class Input {

    @Optional()
    @Field({nullable: true})
    categoryName?: string;

    @Optional()
    @Field({nullable: true})
    text?: string;
}

@ArgsType()
export class CreateTodoArgs {

    @Optional()
    @Field({nullable: true})
    categoryId?: string;

    @IsNotEmpty()
    @Field(() => Input)
    input: Input;
}

