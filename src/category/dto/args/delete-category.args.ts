import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class DeleteCategoryArgs {
    @Field()
    id: string;
}