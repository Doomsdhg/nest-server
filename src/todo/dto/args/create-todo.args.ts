import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class CreateTodoArgs {

    @Field()
    text: string;

    @Field()
    categoryId: string;
}