import { ArgsType, Field, InputType, ObjectType } from "@nestjs/graphql";

@InputType()
class Input {

    @Field({nullable: true})
    categoryName?: string;

    @Field({nullable: true})
    text?: string;
}

@ArgsType()
export class CreateTodoArgs {

    @Field({nullable: true})
    categoryId?: string;

    @Field(() => Input)
    input: Input;
}

