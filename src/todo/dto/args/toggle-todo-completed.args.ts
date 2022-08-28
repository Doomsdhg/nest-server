import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class ToggleTodoCompletedArgs {

    @Field()
    todoId: string;
}