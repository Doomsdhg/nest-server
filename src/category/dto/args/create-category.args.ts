import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class CreateCategoryArgs {
    @Field()
    title: string;
}